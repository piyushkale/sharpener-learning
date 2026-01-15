const express = require("express");
const app = express();

const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to homepage</h1>')
})

app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/cart", cartRoute);


app.listen(3000);
