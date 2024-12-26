import express from "express"
import userModel from "../../models/Users/Users.js"
const router = express.Router()

router.get("/getall", async (req, res)=>{
    try {
        let getAll = await userModel.find({})
        res.status(200).json(getAll)
        
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: error})
    }
})

router.get("/getone/:id", async (req, res)=>{
    try {
        let paramsId = req.params.id;
        await userModel.find({_id: paramsId})
        res.status(200).json('your one user is here')
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})

router.put("/editadmin/:id", async (req, res)=>{
    try {
        let paramsId = req.params.id;
        let editInp = req.body;
        await userModel.updateOne({_id: paramsId}, {$set: editInp})

        res.status(200).json({msg: 'your one user is edited⚡'})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
});

router.delete("/deleteone/:id", async (req, res)=>{
    try {
        let paramsId = req.params.id;
        await userModel.deleteOne({_id: paramsId})
        res.status(200).json('ONE user IS DELETED')
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})

router.delete("/deleteall", async (req, res)=>{
    try {
        await userModel.deleteMany({})
        res.status(200).json('ALL users ARE DELETED')
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})

export default router