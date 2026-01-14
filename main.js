
const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Home')
})
app.get('/products',(req,res)=>{
    res.send('Here is the list of all products.')
})

app.post('/products',(req,res)=>{
    res.send('A new product has been has added.')
})

app.get('/categories',(req,res)=>{
    res.send('Here is the list of all categories')
})

app.post('/categories',(req,res)=>{
    res.send('A new category has been has added')
})

app.use((req,res)=>{
    res.status(404).send(`<h1>404 - Page Not Found</h1>`)
})


app.listen(4000)