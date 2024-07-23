const mongoose =  require("mongoose")
const DB_URL =  process.env.MONGODB_URL;
mongoose.connect(DB_URL)
 .then(()=>{
    console.log("DB Connected")
 }).catch((err)=>{
    console.log("DB Connection Error",err)
 })
