import express from "express"
const router = express.Router();

router.get("/" ,(req, res,next)=>{ 
    res.send("get test")}
).post("/",(req,res)=> res.send("post test"))



export default router;