const db = require('../config/db');
const collection = require('../config/Collection');

module.exports = {
    //Car REGISTRATION
    doRegistert: (carData) => {
        console.log("car Data " + carData.name);
        return new Promise(async (resolve, reject) => {
            db.get().collection(collection.CARS_COLLECTION).insertOne(carData).then((data) => {
                resolve({
                    success: true,
                    message: 'Student successfully added'
                })
            }).catch(error => {
                console.error(error);
            });


        })
    },

    //ALL CAR DETAILS
    AllcarDetails: () => {
        return new Promise(async (resolve, reject) => {
            let CarData = await db.get().collection(collection.CARS_COLLECTION).find().toArray();
            resolve(CarData)
        })
    },

    //ALL LOCATION
    AllLocation: () => {
        return new Promise(async (resolve, reject) => {
            let Location = await db.get().collection(collection.LOCATION_COLLECTION).find().toArray();
            resolve(Location)
        })
    },

    //ALL BRAND
    AllBrand: () => {
        return new Promise(async (resolve, reject) => {
            let Brand = await db.get().collection(collection.BRAND_COLLECTION).find().toArray();
            resolve(Brand)
        })
    },
}