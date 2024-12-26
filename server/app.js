import express from "express"
import config from "config"
import "./utils/dbConnect.js"
import adminRouter from "./controllers/admins/index.js"
import userRouter from "./controllers/users/index.js"
import videoRouter from "./controllers/videos/index.js"
import publicRouter from "./controllers/public/index.js"

const app = express();

const PORT = config.get("PORT")

app.use(express.json());

app.get("/", (req, res)=>{
    try {

        res.status(200).json({msg: 'your web app home page is this⚡'})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})

app.use("/api/public", publicRouter)

app.use("/api/admins", adminRouter);
app.use("/api/users", userRouter);
app.use("/api/videos", videoRouter);


app.listen(PORT, ()=>{
    console.log(`YOUR APP IS RUNNING AT PORT ${PORT} `);
    
})