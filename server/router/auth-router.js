
const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth-controller')
const schema = require('../validators/auth-validator')
const validate = require('../middlewares/validate-middleware')

router.route('/register').post(
    validate(schema.signupSchema), 
    authController.register)

router.route('/login').post(
    validate(schema.loginSchema),
    authController.login)

module.exports = router