const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const model = new Schema({
    name: {
        type: String,
        required: true,
    },
    company: {
        type: String,
    },
});

module.exports = mongoose.model('Model', model);