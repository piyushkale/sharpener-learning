const express = require('express')
const router = express.Router()

//importing user controller
const userController = require('../controllers/userController')

router.get('/',userController.getUser)

router.get('/:id',userController.getUserById)

router.post('/',userController.addUser)

module.exports = router;