

const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/register")
.then(()=>{
    console.log("connected database is successfully")
})
.catch(()=>{
    console.log("not connected yet")
})
const newSchema = mongoose.Schema(
    {
    
        firstname:String ,
        lastname:String ,
        address:String ,
        email:String,
        password:String
    
})


const collection = mongoose.model("registerdatas",newSchema)

module.exports = collection
