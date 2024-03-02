
const express = require('express')
const router = express.Router()

const restoController = require('../controllers/resto-controller')
const schema = require('../validators/auth-validator')
const validate = require('../middlewares/validate-middleware')

router.route('/create').post(
    validate(schema.signupSchema), 
    restoController.createHotel)

module.exports = router