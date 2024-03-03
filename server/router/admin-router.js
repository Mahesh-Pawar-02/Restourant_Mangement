
const express = require('express')
const router = express.Router()

const adminController = require('../controllers/admin-contoller')

router.route('/users').get(adminController.getUsers)
router.route('/hotels').get(adminController.getHotels)
router.route('/messages').get(adminController.getContacts)

module.exports = router