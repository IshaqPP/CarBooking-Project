const db = require('../config/db');
const collection = require('../config/Collection');

module.exports = {
    //Car Booking
    doBooking: (userData) => {
        console.log("user Data " + userData.name);
        return new Promise(async (resolve, reject) => {
            db.get().collection(collection.USER_BOOK_COLLECTION).insertOne(userData).then((data) => {
                resolve({
                    success: true,
                    message: 'Student successfully added'
                })
            }).catch(error => {
                console.error(error);
            });


        })
    },

    //ALL BOOKING DETAILS
    AllBookingDetails: () => {
        return new Promise(async (resolve, reject) => {
            let BookData = await db.get().collection(collection.USER_BOOK_COLLECTION).find().toArray();
            resolve(BookData)
        })
    },
}