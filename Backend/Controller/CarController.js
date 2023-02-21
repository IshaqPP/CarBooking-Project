const carSchema = require("../Models/CarModel")

// const generateToken = require("../../utils/generatetoken")

exports.carRegister = async (req, res) => {
    console.log("fgdhughdf");
    console.log(req.body);
    try {

        let details = {
            Name,
            Brand,
            Segment
        } = req.body
        carSchema.findOne({ Name: details.Name }).then((result) => {
            if (result) {
                res.status(400).json("Car already Registerd")

            } else {
                carSchema.create(Car).then((result) => {
                    let details = {
                        Name: result.Name,
                        Brand: result.Brand,
                        Segment: result.Segment,
                    }
                    res.status(201).json(details)
                    console.log(result);
                }).catch((err) => {
                    res.status(400)
                    // throw new Error('Eroor Occured')
                    console.log(err);
                })
            }
        })
    } catch (error) {
        res.json(error.message)
    }
}


exports.teat = (req, res) => {
    res.json("JIOIII")
}

exports.getBrands = async (req, res) => {

}