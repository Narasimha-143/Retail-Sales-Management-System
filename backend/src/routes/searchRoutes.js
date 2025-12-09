const express = require("express");
const router = express.Router();
const { advancedSearch } = require("../controllers/searchController"); // correct path

router.get("/", advancedSearch);

module.exports = router;
