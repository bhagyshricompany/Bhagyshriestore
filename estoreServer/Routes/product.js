// const express = require("express");
// const productCategories = express.Router(); // Use a different name for the Router variable

// const mysql = require("mysql2");
// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "bhagy",
//   database: "estore",
//   port: "3307",
//   multipleStatements: true,
// });

// productCategories.get("/", (req, res) => {
//   let categorydata;
//   pool.query("select * from categories", (err, categories) => {
//     if (err) {
//       categorydata = err;
//       res.status(500).send(categorydata);
//     } else {
//       categorydata = categories;
//       res.status(200).send(categorydata);
//     }
//   });
// });

// module.exports = productCategories;

const express = require('express');
const product = express.Router();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "bhagy",
    database : "estore",
    port : 3306,
    multipleStatements : true
})

product.get("/productCategories",(req,res)=>{
    let categorydata;

            pool.query("Select * from categories",(error,categories)=>{
                if(error){
                    categorydata = error;
                    res.status(500).send(categorydata);
                }else{
                    categorydata = categories;
                    res.status(200).send(categorydata);
                }
            })

})

product.get("/getProducts",(req,res)=>{
    let productData;

    pool.query("select * from products",(err,rows)=>{
        if(err){
            res.status(500).send(err);
        }else{
            productData = rows;
            res.status(200).send(productData);
        }
    })
})


module.exports = product;
