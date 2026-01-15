const express = require('express')
const app = express()
const studentRouter = require('./routes/students')
const courseRouter = require('./routes/course')

//default route
app.get('/',(req,res)=>{
    res.send('<h1>Welcome to the Student & Course Portal API!</h1>')
})

 //Student route
app.use('/students',studentRouter)

 //Course route
app.use('/courses',courseRouter)

// Handling invalid routes
app.use((req,res)=>{
    res.send(`<h1>Invalid route ${req.url}</h1>`)
})

//server 
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})