const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    estd: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    //one to many relationship
    mobiles: {
        type: Array,
        default: [],
    },
});

module.exports = mongoose.model('Company', companySchema);