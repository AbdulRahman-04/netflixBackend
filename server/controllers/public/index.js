import express from "express"
import config from "config"
import bcrypt, { hash } from "bcrypt"
import jwt from "jsonwebtoken"
import adminModel from "../../models/Admins/Admins.js";
import videoModel from "../../models/Videos/Videos.js";
import userModel from "../../models/Users/Users.js";
const router = express.Router();

//REGISTER API'S
router.post("/addadmin", async (req, res)=>{
    try {
        let userInp = req.body;

        let checkEmail = userInp.email;
        let duplicateCheck = await adminModel.find({email: checkEmail})
 
        if(!duplicateCheck){
            return res.status(200).json({msg: `error, user already exists`})
        }

        let hashPass = await bcrypt.hash(userInp.password, 10);
        userInp.password = hashPass
        
        let SECRET_KEY = config.get("SECRET_KEY");
        let sendtoken = jwt.sign({duplicateCheck}, SECRET_KEY, {expiresIn: "1h"});

        await adminModel.create(userInp);
        res.status(200).json({msg: `admin added successfully!🥰`, token:sendtoken })
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})

router.post("/adduser", async (req, res)=>{
    try {
        let userInp = req.body;
        let password = userInp.password

        let checkEmail = userInp.email;
        let duplicateCheck = await userModel.findOne({email: checkEmail});

        if(duplicateCheck){
            return res.status(200).json({msg: `users already exists!`})
        }

        let hashPass = await bcrypt.hash(userInp.password, 10);
        password = hashPass

        let SECRET_KEY1 = config.get("SECRET_KEY1");
        let sendtoken = jwt.sign({duplicateCheck}, SECRET_KEY1, {expiresIn: "2h"})


        await userModel.create(userInp);
         res.status(200).json({msg: `admin added successfully!🥰`, token:sendtoken })
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
});

router.post("/addvideo", async (req, res)=>{
    try {

        let videoInp = req.body;
        await videoModel.create(videoInp);
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})



// LOGIN API'S

// router.post("/login", (req, res)=>{
//     try {

//         let {email, password} = req.body;
        
//     } catch (error) {
//         console.log(error);
//         res.status(401).json({msg: error})
//     }
// })




export default router