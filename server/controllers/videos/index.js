import express from "express"
import videoModel from "../../models/Videos/Videos.js"
const router = express.Router()

router.get("/getall", async (req, res)=>{
    try {
        let getAll = await videoModel.find({})
        res.status(200).json(getAll)
        
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: error})
    }
})

router.get("/getone/:id", async (req, res)=>{
    try {
        let paramsId = req.params.id;
        let getOne = await videoModel.find({_id: paramsId})
        res.status(200).json(getOne)
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})

router.put("/editadmin/:id", async(req, res)=>{
    try {
        let paramsId = req.params.id;
        let editOne = req.body;
        await videoModel.updateOne({_id: paramsId}, {$set: editOne})

        res.status(200).json({msg: 'your one movie is edited⚡'})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
});

router.delete("/deleteone/:id", async (req, res)=>{
    try {

        let paramsId = req.params.id;
        await videoModel.deleteOne({_id: paramsId})
        res.status(200).json('ONE movie IS DELETED')
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})

router.delete("/deleteall", async (req, res)=>{
    try {
        await videoModel.deleteMany({})
        res.status(200).json('ALL movies ARE DELETED')
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})

export default router