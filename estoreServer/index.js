// const express = require("express");
// // const productCategories = require("./Routes/productCategories"); // Use the correct file path
// const app = express();
// // const cors = require("cors");

// // app.use(cors());
// // app.use("/productCategories", productCategories);

// const port = 5005;
// const server = app.listen(port, () => {
//   console.log("Server is running on port 5005");
// });


const express = require('express');
const product = require('./Routes/product');
const app = express();
const cors = require('cors');

app.use(cors());

app.use("/",product);

const PORT = 5001;
const server = app.listen(PORT , ()=>{
    console.log("App is running on the port - 5001");
})

