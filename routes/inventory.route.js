const express = require('express');
const router = express.Router();
const Company = require('../models/Company');
const Mobile = require('../models/Mobile');

router.post('/addCompany', async (req, res) => {
    try {
        const { name, estd, country } = req.body;
        const company = new Company({ name, estd, country });
        await company.save();
        res.status(200).json(company);
    } catch (error) {
        res.status(400).json(error);
    }
});

//one to one relationship 
// router.post('/addMobile', async (req, res) => {
//     try {
//         const { model, year, _5g, color, company } = req.body;

//         // search for company inside the database
//         const isCompany = await Company.findOne({ name: company });
//         if (!isCompany) {
//             res.status(403).json({ Error: 'add the company first' });
//         }
//         // now embed in the new document 
//         const newMobile = new Mobile({ model, year, _5g, color, company: isCompany });
//         await newMobile.save();
//         res.status(200).json(newMobile);

//     } catch (error) {
//         throw error;
//     }
// });

//one to many
// router.post('/addMobile', async (req, res) => {
//     try {
//         const { model, year, _5g, color, company } = req.body;
//         // search for company inside the database
//         const isCompany = await Company.findOne({ name: company });
//         if (!isCompany) {
//             res.status(403).json({ Error: 'add the company first' });
//         }
//         // now embed in the new document 
//         const newMobile = new Mobile({ model, year, _5g, color });
//         isCompany.mobiles.push(newMobile);
//         await isCompany.save();
//         res.status(200).json(isCompany);

//     } catch (error) {
//         throw error;
//     }
// });

//reference
router.post("/addMobile", async (req, res) => {
    try {
        const { model, year, _5g, color, company } = req.body;
        const isCompany = await Company.findOne({ name: company });
        if (!isCompany) {
            res.status(403).json({
                error: "Add the company first",
            });
        }
        const newMobile = new Mobile({
            model,
            year,
            _5g,
            color,
            company: isCompany._id,
        });
        await newMobile.save();
        res.status(200).json(newMobile);
    } catch (error) {
        res.json(error);
    }
});

router.get('/mobile/:model', async (req, res) => {
    try {
        const { model } = req.params;
        const mobile = await Mobile.findOne({ model }).populate("company");
        if (!mobile) {
            res.send("Mobile doesn't exist");
        }
        res.status(200).json(mobile);
    } catch (error) {
        res.json(error);
    }
});
module.exports = router;