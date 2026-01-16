const express = require('express')
const router = express.Router()
const path = require('path')
router.get('/',(req,res)=>{

    // path for the html file
    const resPath = path.join(__dirname,"..","view","form.html")

    //sending html file as response
    res.sendFile(resPath)
})
router.post('/',(req,res)=>{

    const data = req.body 
    console.log(data)
    res.json(data)
})

module.exports = router