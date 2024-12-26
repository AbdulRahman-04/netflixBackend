import express from "express"
import adminModel from "../../models/Admins/Admins.js"

const router = express.Router()

router.get("/getall", async (req, res)=>{
    try {
        let getAll = await adminModel.find({})
        res.status(200).json(getAll)
        
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: error})
    }
})

router.get("/getone/:id", async (req, res)=>{
    try {
        let paramsId = req.params.id;
        let getOne = await adminModel.find({_id: paramsId})
        res.status(200).json(getOne)
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})

router.put("/editadmin/:id", async (req, res)=>{
    try {
        let parasmId = req.params.id;
        let userInp = req.body;
        await adminModel.updateOne({_id: parasmId}, {$set: userInp})
        res.status(200).json({msg: 'your one admin is edited⚡'})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
});

router.delete("/deleteone/:id", async (req, res)=>{
    try {
        let paramsId = req.params.id;
        await adminModel.deleteOne({_id: paramsId})
        res.status(200).json('ONE ADMIN IS DELETED')
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})

router.delete("/deleteall", async (req, res)=>{
    try {

        await adminModel.deleteMany({})
        res.status(200).json('ALL ADMINS ARE DELETED')
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})

export default router