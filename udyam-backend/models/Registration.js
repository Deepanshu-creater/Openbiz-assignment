const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
  aadhaarNumber: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  panNumber: { type: String, required: true, unique: true },
  businessName: { type: String, required: true },
  organizationType: { type: String, required: true },
  businessAddress: { type: String, required: true },
   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  pincode: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  district: { type: String },
  businessActivity: { type: String, required: true },
  commencementDate: { type: Date, required: true },
  aadhaarFile: { type: String, required: true }, // File path
  panFile: { type: String, required: true },    // File path
  bankDocument: { type: String, required: true }, // File path
  status: { type: String, default: "PENDING" }, // PENDING, APPROVED, REJECTED
  verificationNotes: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Registration", RegistrationSchema);