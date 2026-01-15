const express =require('express')
const app = express()
const orderRoute = require('./routes/order')
const userRoute = require('./routes/users')
app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1>')
})
app.use('/order',orderRoute)
app.use('/user',userRoute)

app.listen(3000)