const mongoose = require('mongoose');

const db = () => {
    mongoose
        .connect('mongodb://localhost:27017/Mob', { useNewUrlParser: true })
        .then(() => {
            console.log('DB connected');
        })
        .catch((err) => {
            throw err;
        });
};

module.exports = db;