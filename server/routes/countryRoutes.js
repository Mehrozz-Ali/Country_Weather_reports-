const express = require("express");
const router = express.Router();

const {
    getCountryData,
} = require("../controller/countryController");

router.get("/:name", getCountryData);

module.exports = router;