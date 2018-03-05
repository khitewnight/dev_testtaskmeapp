const express = require('express')
    , router = express.Router();
    
router.use('/schedules', require('./schedules'));

module.exports = router;