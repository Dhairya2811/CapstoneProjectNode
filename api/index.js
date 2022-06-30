import express from 'express';
// import data from "../src/testData.json"
const router = express.Router();

router.get("/contests", (req, res)=>{
    res.send("this is API call");
});

router.post("/registerUser", (req, res)=>{
    console.log("This is register User POST request");
});

export default router;