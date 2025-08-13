const Registration = require("../models/registration");

const axios = require("axios");

exports.submitPAN = async (req, res) => {
  const { panNumber, businessName, organizationType } = req.body;

  // Validate PAN format
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  if (!panRegex.test(panNumber)) {
    return res.status(400).json({ error: "Invalid PAN format" });
  }

  // In a real app, you might verify PAN with an external API
  res.status(200).json({ success: true });
};

exports.submitBusinessDetails = async (req, res) => {
  const { pincode } = req.body;

  try {
    // Get city/state from pincode (using PostPin API)
    const response = await axios.get(
      `https://api.postalpincode.in/pincode/${pincode}`
    );

    if (response.data[0].Status !== "Success") {
      return res.status(400).json({ error: "Invalid PIN code" });
    }

    const { District: district, State: state } = response.data[0].PostOffice[0];

    res.status(200).json({
      success: true,
      district,
      state,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch location details" });
  }
};

exports.uploadDocuments = async (req, res) => {
  const files = req.files;

  if (!files.aadhaarFile || !files.panFile || !files.bankDocument) {
    return res.status(400).json({ error: "All documents are required" });
  }

  res.status(200).json({
    success: true,
    aadhaarFile: files.aadhaarFile[0].path,
    panFile: files.panFile[0].path,
    bankDocument: files.bankDocument[0].path,
  });
};

exports.submitRegistration = async (req, res) => {
  try {
    const registration = new Registration({
      ...req.body,
      user: req.user.id // Link to authenticated user
    });
    
    await registration.save();
    
    // Add registration to user's record
    await User.findByIdAndUpdate(req.user.id, {
      $push: { registrations: registration._id }
    });

    res.status(201).json({ success: true, registrationId: registration._id });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
};

// New admin function
exports.getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find().populate('user', 'mobile');
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch registrations" });
  }
};

exports.checkStatus = async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id);
    if (!registration) {
      return res.status(404).json({ error: "Registration not found" });
    }

    res.status(200).json(registration);
  } catch (error) {
    res.status(500).json({ error: "Failed to check status" });
  }
};