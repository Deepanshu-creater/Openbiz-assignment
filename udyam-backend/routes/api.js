const express = require("express");
const router = express.Router();
const registrationController = require("../controllers/registrationController");
const authController = require("../controllers/authController");
const { protect, admin } = require('../middlewares/authMiddleware');
const upload = require("../config/multer"); // For file uploads

// Step 1: Aadhaar OTP Verification
router.post("/send-otp", authController.sendOTP);
router.post("/verify-otp", authController.verifyOTP);

// Step 2: PAN & Business Details
router.post("/submit-pan", registrationController.submitPAN);

// Step 3: Business Details
router.post("/submit-business", registrationController.submitBusinessDetails);

// Step 4: Document Upload
router.post(
  "/upload-documents",
  upload.fields([
    { name: "aadhaarFile", maxCount: 1 },
    { name: "panFile", maxCount: 1 },
    { name: "bankDocument", maxCount: 1 },
  ]),
  registrationController.uploadDocuments
);

// Step 5: Final Submission
router.post("/submit-registration", registrationController.submitRegistration);

router.post('/register', authController.register);
router.post('/login', authController.login);

// Protect existing routes
router.post('/submit-pan', protect, registrationController.submitPAN);
router.get('/status/:id', protect, registrationController.checkStatus);

// Admin-only routes
router.get('/admin/registrations', protect, admin, registrationController.getAllRegistrations);

// Check Status
router.get("/status/:id", registrationController.checkStatus);

module.exports = router;