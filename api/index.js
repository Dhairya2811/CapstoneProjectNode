import express from 'express';
const router = express.Router();

router.get("/contests", (req, res)=>{
    res.send("This is API/INDEX.JS content");
});

export default router;