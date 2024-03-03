
const express = require('express')
const router = express.Router()

const restoController = require('../controllers/resto-controller')

router.route('/create').post(restoController.createHotel)
router.route('/get').get(restoController.getHotels)
router.route('/update').post(restoController.updateHotel)
router.route('/delete').post(restoController.deleteHotel)

module.exports = router