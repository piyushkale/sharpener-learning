/* Set up a dynamic GET route:
Create a route in your Express app with a route parameter in the URL.
Example: /welcome/:username
This allows the app to extract the username directly from the URL.
Use a query parameter for additional info:
Accept a query parameter (like role) in the same request URL.
Example: /welcome/Julian?role=Admin
This allows the app to extract extra data from the query string.
Extract values inside your route handler:
Use Express methods to retrieve the route parameter and query parameter.
Use them to customize your response.
Send a personalized response:
Send an response with a message that uses both the username and role.
For example: Welcome Julian, your role is Admin */
const express = require('express')
const app = express()

app.get('/welcome/:username',(req,res)=>{
    const username = req.params.username
    const role = req.query.role

    res.send(`Welcome ${username}, your role is ${role}`)
})

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})
