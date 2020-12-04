const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const company = new Schema({
    name: {
        type: String,
        required: true,
    },
    mobile: {
        type: Array,
    }
});

module.exports = mongoose.model('Company', company);