
const express = require('express')
const router = express.Router()

const adminController = require('../controllers/admin-contoller')

router.route('/users').get(adminController.getUsers)
router.route('/hotels').get(adminController.getHotels)
router.route('/messages').get(adminController.getContacts)
router.route('/deleteUser').post(adminController.deleteUser)
router.route('/deleteHotel').post(adminController.deleteHotel)
router.route('/deleteContact').post(adminController.deleteContact)

module.exports = router