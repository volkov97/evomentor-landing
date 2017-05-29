import express from 'express';

// Configure variables
const router = express.Router();

// Controllers
const VisitorController = require('../controllers/visitor');

// Routes
router.use(VisitorController.index);

// Export
module.exports = router;