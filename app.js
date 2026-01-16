const express = require('express')
const app = express()
const path = require('path')


app.get('/',(req,res)=>{
    const resPath = path.join(__dirname,".","view","index.html")
    res.sendFile(resPath)
})

app.listen(3000,()=>{
    console.log("server is running at port 3000")
})