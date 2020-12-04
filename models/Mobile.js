const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mobileSchema = new Schema({
    model: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    _5g: {
        type: Boolean,
        default: false,
    },
    color: {
        type: String,
        requried: true,
    },
    //one to one relationship
    // company: {
    //     type: Object,
    // }
    //delete when one to many rel 

    //reference type
    company: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Company",
    },
});

module.exports = mongoose.model('Mobile', mobileSchema);