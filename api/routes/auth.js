const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString(),
    });
    try {
        const existingUser = await User.findOne({email : req.body.email});
        if(!existingUser){
            const user = await newUser.save();
            res.status(201).json(user);
        }

        else{
            res.json({error : "Email Already exists. Try with a different email account."})
        }

    } 
    
    catch (err) {
        console.log(err);
      res.json({error : "Please fill out all the mentioned credentials."});
    }
  });


// Login

router.post("/login", async(req,res)=>{
    try{
        const user = await User.findOne({email : req.body.email});
        if(!user){
            return res.json({error : "No User found. Try with a different email address."});
        }

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        if(originalPassword !== req.body.password){
            return res.json({error : "Wrong Password"});
        }

        const accessToken = jwt.sign(
            {id : user._id, isAdmin : user.isAdmin},
            process.env.SECRET_KEY,
            {expiresIn : "5d"})

        const {password, ...info} = user._doc;
        res.status(200).json({...info, accessToken});        
        
    }
    catch(err){
        res.json({error : "Please fill out the mentioned credentials"});
    }
})

module.exports = router;