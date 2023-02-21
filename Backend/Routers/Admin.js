const express = require("express");
const router = express.Router();
const carHelpers = require('../Helpers/Car-helpers');

//  Car register
router.post('/Register', function (req, res) {
    const formData = req.body;
    console.log(formData);
    carHelpers.doRegistert(formData).then((response) => {
        console.log("Car added Successfully");
        res.json(response);
    }).catch((err) => {
        console.log(err + "Car Registration Error");
    })

});

//CAR DETAILS
router.get('/CarData', function (req, res) {
    carHelpers.AllcarDetails().then((CarData) => {
        res.send(CarData);
    })
});

//BRAND LISTING
router.get('/Brand', function (req, res) {
    carHelpers.AllBrand().then((Brands) => {
        res.send(Brands);
    })
});

module.exports = router;