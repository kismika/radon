const express = require('./logger');


const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has value'+ externalModule.welcome)
    console.log('The current batch is'+ externalModule.welcome)
    
    res.send('My first ever api!')
});
router.get('/test-me', function (req, res){
res.send('My first ever api!')
})


module.exports = router;
// adding this comment for no reason