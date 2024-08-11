const express = require("express");
const cors = require("cors");
const collection = require('./model/mongo.js');

const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const router = express.Router();

//import jwt from 'jsonwebtoken';

const jwt = require('jsonwebtoken');
const { Collection } = require("mongoose");





const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
    {
        origin: ["http://localhost:3000"],
        credentials: true
    }
));
app.use(cookieParser());

app.use('/auth', router)


//register backend=======================

router.post("/register", async (req, res) => {
    const { firstname, lastname, address, email, password } = req.body;

    const user = await collection.findOne({ email });
    if (user) {

        return res.json({ message: "user allready exist" })
    }

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let createuser = await collection.create({
                firstname,
                lastname,
                address,
                email,
                password: hash
            })
            res.send(createuser);
           createuser.save();

        })
    })

})



//login backend==============================
router.post("/login",async (req, res) => {
    const { email,password } = req.body;
    const user= await collection.findOne({email});
    if(!user)
    {
      return res.json({message:"user is not register"})
    }
    const token= jwt.sign({email:user.email},"shhhh");
                  res.cookie("token",token);
                   res.json({message:"login sucessfully "});
                  console.log(token);
     
    const validpassword = await bcrypt.compare(password,user.password)
     if(!validpassword)
     {
     
      return res.json({message:"password is not correct"})
     }
     else
     {
      return res.json({message:"corrrect password"});
      
     }
           
                
  
  })


  //logout backend =====================
  router.get("/logout", function(req, res) {
    res.cookie('token','');
  
  })

app.listen(8001, () => {
    console.log("port connected successfully")
  });