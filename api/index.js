const express = require("express");
const app =express();
const mongoose =require("mongoose")//creating or importing a mongoose
const dotenv= require("dotenv");
const  userRoute= require("./routes/user")
const  authRoute= require("./routes/auth")
const  productRoute= require("./routes/product")
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");


dotenv.config();
 mongoose.connect(process.env.MONGO_URL)
 .then(()=>
    console.log("DB Connection Successful")
 )
 .catch((err)=>{
    console.log(err);
 })//connecting to database using then as it promise and catch to reolve erroer
   app.use(express.json());
 
 app.use("/api/users", userRoute);
 app.use("/api/auth", authRoute);
 app.use("/api/products", productRoute);
 app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);


app.listen(process.env.PORT || 5000,()=> {
   console.log("backend is running")

});