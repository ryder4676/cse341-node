const router = require("express").Router();

// Import the "GetAll" function from the controller
const controller = require("../controllers/index.js");

// Define a route for the "professional" endpoint
router.get("/professional", controller.GetAll);

// Export the router to make it accessible in other modules
module.exports = router;
