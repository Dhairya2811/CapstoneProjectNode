import express from "express";
import api from "./api";
import path from "path";

const server = express();
server.set("view engine", "ejs");

server.get("/", (req, res)=>{
    res.render("index", {
        contest: "..."
    })
});

server.use("/api", api);

server.use(express.static('public'));

server.listen(3000, ()=>{
    console.log("http://localhost:3000");
});
