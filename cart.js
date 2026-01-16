const express = require('express')
const router = express.Router()

// importing controller
const cartController = require('../controllers/cartController')

router.get('/:userId',cartController.getCartForId)

router.post('/:userId',cartController.addCartForId)

module.exports = router;