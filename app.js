const express = require("express");
const app = express();
const productRouter = require('./routes/productRouter')

app.use("/api/products", productRouter);

app.listen(3000,()=>{
    console.log("server is running at port 3000")
})