const express = require('express');

const router = express.Router();

const Car = require('../models/car');
const Transaction = require('../models/transactions');
//Routes
router.get('/',(req,res) => {
   

    Car.find({  })
    .then((data) => {
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error) => {
       console.log('Error: ', error); 
    });

});

router.get('/name',(req,res) => {
    const data = {
        username: 'koppam',
        age: 19
    };
    res.json(data);
});

router.post('/buy',(req,res) => {
    console.log('Body: ', req.body);
    const data=req.body;

    const newTransaction = new Transaction(data);
    
    newTransaction.save((error)=> {
        if (error) {
            res.status(500).json({msg: 'Internal server error, data has not been saved!'});
        }
        else{
            res.json({msg: 'Data has been saved'});
        }
    });
});

module.exports = router;