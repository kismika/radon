const express = require('express');

const helper = require('../util/helper.js');
const logger = require('../logger/logger.js');

const formatter = require('../validator/formatter.js');




const router = express.Router();

router.get('/test-me', function (req, res) {
   
    helper.date();
   helper.month();
   formatter.lower();
   formatter.upper();
   formatter.trim();
   
    res.send('Welcom')
});
router.get('/test-me', function (req, res){
res.send('this day')
})

router.get('/test-me', function (req, res){
 res.send('this day2')
    })

    router.get('/test-me', function (req, res){
    res.send('this day3')
 })


module.exports = router;
// adding this comment for no reason