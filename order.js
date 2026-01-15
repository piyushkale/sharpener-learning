const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('<h1>All order</h1>')
})

router.post('/',(req,res)=>{
    res.send('<h1>Order created</h1>')
})

module.exports = router