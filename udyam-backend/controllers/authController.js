const OTP = require("../models/OTP");
const twilio = require("twilio");
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// controllers/authController.js
exports.sendOTP = async (req, res) => {
  const { mobile } = req.body;
  
  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // 1. Verify Twilio credentials are configured
    if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
      throw new Error('Twilio credentials not configured');
    }

    // 2. Validate mobile number format
    if (!/^[0-9]{10}$/.test(mobile)) {
      return res.status(400).json({ error: 'Invalid mobile number' });
    }

    // 3. Save OTP to database
    await OTP.deleteMany({ mobile }); // Clear previous OTPs
    await OTP.create({ 
      mobile, 
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000) // 5 minutes expiry
    });

    // 4. Send SMS
    await client.messages.create({
      body: `Your OTP is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: `+91${mobile}` // Assuming Indian numbers
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('OTP send error:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to send OTP',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};
exports.verifyOTP = async (req, res) => {
  const { mobile, otp } = req.body;

  try {
    const otpRecord = await OTP.findOne({ mobile, otp });

    if (!otpRecord) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    if (otpRecord.expiresAt < new Date()) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }

    // Delete OTP after successful verification
    await OTP.deleteOne({ _id: otpRecord._id });

    res.status(200).json({ success: true, message: "OTP verified" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to verify OTP" });
  }
};

// Add to existing OTP functions
exports.register = async (req, res) => {
  const { mobile, password } = req.body;

  try {
    const user = await User.create({ mobile, password });
    
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '30d' }
    );

    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error: 'Registration failed' });
  }
};

exports.login = async (req, res) => {
  const { mobile, password } = req.body;

  try {
    const user = await User.findOne({ mobile });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '30d' }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};