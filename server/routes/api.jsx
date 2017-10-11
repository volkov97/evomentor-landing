import express from 'express';

// Configure variables
const router = express.Router();

// Controllers
const ApiController = require('../controllers/api');

// Routes
router.use(ApiController.index);

// Export
module.exports = router;