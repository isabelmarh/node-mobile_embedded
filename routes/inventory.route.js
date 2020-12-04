const express = require('express');
const Company = require('../models/Company');
const Model = require('../models/Model');
const router = express.Router();

router.post('/addco', async (req, res) => {
    try {
        const { name, model } = req.body;
        const docToSave = new Company({ name, model });
        const ret = await docToSave.save();
        res.status(200).json({ ret });
        return;

    } catch (error) {
        throw error;
    }
});

router.post('/addmod', async (req, res) => {
    try {
        const { name, company } = req.body;
        const co = await Company.findOne({ name: company });
        if (!co) {
            res.status(403).json({ Company: 'does not exist' });
        }
        let model = new Model({ name, company });
        co.models.push(model);
        const updatedCoArr = await co.save();
        res.status(200).json(updatedCoArr);

    } catch (error) {
        throw error;
    }
});

module.exports = router;