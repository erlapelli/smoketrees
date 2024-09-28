const express=require('express')
const router = express.Router() 

const{Register} = require('../controllers/register')


router.route('/').post(Register) 

module.exports = router