const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const Product = require("./models/Product");
const User = require("./models/User");
const port = process.env.PORT || 5000;

//connection to database
mongoose
    .connect(
        "mongodb+srv://anwarjabri:6194021111426@cluster0.5kebrbw.mongodb.net/MyShop?retryWrites=true&w=majority"
    )
    .then(() => console.log("connected to database"))
    .catch((err) => console.log(err));

//CRUD

//CREATE PRODUCT

// Product.insertMany([
//     { title: "Iphone 14", price: 2000, color: "Silver", available: true },
//     { title: "Samsung Galaxy", price: 1950, color: "Gold", available: false },
//     { title: "Huawei Y6 Pro", price: 800, color: "Blue", available: true },
// ]);
// const newProduct = new Product({
//     title: "Xiaomi Redmi Note 10 Pro",
//     price: 1300,
//     color: "Gold",
//     accessory: ["headphones", "fast charger", "power bank"],
//     available: true,
// });
// newProduct.save((err, result) => {
//     if (err) throw err;
//     console.log("product added successfully");
// });

//READ PRODUCTS

// const findProducts = async () => {
//     try {
//         const products = await Product.find().limit(2);
//         console.log(products);
//     } catch (error) {
//         if (error) throw error;
//     }
// };
// findProducts();

//Update a product
// const update = async () => {
//     try {
//         const newProduct = await Product.findByIdAndUpdate(
//             "633566f9bac8be5665518d64",
//             {
//                 $set: {
//                     available: false,
//                 },
//             }
//         );
//         console.log(newProduct);
//     } catch (error) {
//         if (error) throw error;
//         console.log(error);
//     }
// };
// update();

// Product.findByIdAndUpdate(
//     "633566f9bac8be5665518d64",
//     {
//         $set: {
//             available: true,
//         },
//     },
//     { new: true },
//     (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     }
// );

//  DELETE

// Product.findByIdAndDelete("633566f9bac8be5665518d64", (err, result) => {
//     if (err) throw err;
//     console.log("deleted successfully");
// });

//create user

// const newUser = new User({
//     fName: "Mohamed",
//     lName: "Jabri",
//     email: "anwar@gmail.com",
//     password: "anwar123",
// });
// newUser.save((err) => {
//     if (err) throw err;
//     console.log("user was added successfully");
// });
app.listen(port, () => {
    console.log("server is up and running ...");
});
