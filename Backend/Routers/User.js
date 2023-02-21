const express = require("express");
const router = express.Router();
const usreHelpers = require('../Helpers/User-helpers');
const carHelpers = require('../Helpers/Car-helpers');

//  Booking
router.post('/Booking', function (req, res) {
    const formData = req.body;
    console.log(formData);
    usreHelpers.doBooking(formData).then((response) => {
        console.log("Car added Successfully");
        res.json(response);
    }).catch((err) => {
        console.log(err + "Car Registration Error");
    })

});

//Location LISTING
router.get('/Location', function (req, res) {
    carHelpers.AllLocation().then((Brands) => {
        res.send(Brands);
    })
});

//CAR BOOKING DETAILS
router.get('/BookData', function (req, res) {
    usreHelpers.AllBookingDetails().then((Brands) => {
        res.send(Brands);
    })
});

module.exports = router;