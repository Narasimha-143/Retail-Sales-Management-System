const express = require("express");
const router = express.Router();
const operationsController = require("../controllers/operationsController");

router.post("/", operationsController.createOperation);
router.get("/", operationsController.getOperations);

module.exports = router;
