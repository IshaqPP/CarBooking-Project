const mongoose = require("mongoose");

const carSchema = mongoose.Schema(
    {
        Name: {
            type: String,
            required: true,
            unique: true,
        },
        Brand: {
            type: String,
            required: true,
        },
        Segment: {
            type: String,
            required: true,
        }
    }
);

const model = mongoose.model("Car", carSchema);

module.exports = model;