const mongoose =require("mongoose");
require("dotenv").config();

const URL = process.env.MONGODB_URL;
const dbconnect =()=>{
    mongoose.connect(URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("Database connected")
    }).catch((err)=>{
        console.log(err)
        process.exit(1)
    })
}
module.exports=dbconnect;