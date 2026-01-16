const express = require('express')
const router = express.Router()
const path = require('path')
router.get('/',(req,res)=>{

    // path for the html file
    const resPath = path.join(__dirname,"..","view","form.html")

    //sending html file as response
    res.sendFile(resPath)
})

module.exports = router