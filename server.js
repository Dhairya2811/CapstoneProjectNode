import express from "express";
import api from "./api/index.js";
import sassMiddleware from "node-sass-middleware";
import path from "path";
import sqlite3 from "sqlite3";
import { open } from "sqlite"; 
import bcrypt from "bcrypt";

// variables
const saltRound = 10;

// code 
sqlite3.verbose();

const db = open({
    filename: "Database.db",
    driver: sqlite3.Database
});

const server = express();
server.use(sassMiddleware({
    src: path.join(__dirname, "scss"),
    dest: path.join(__dirname, "public"),
    debug: true,
    outputStyle: 'compressed'
}));

server.set("view engine", "ejs");

server.use(express.json());

server.get(["/", "/signin", "/register", "/addItem", "/details/:id"], (req, response)=>{
    response.render('index');    
});
server.get("/index", async (req, response)=>{
    var sql = "Select rowid,* from items";
    (await db).all(sql).then(
        data=>{
            response.json(data);
        }
    );
});
server.get("/getItem/:id", async (req, res)=>{
    var itemId = req.params.id;
    var sql = `select * from items WHERE rowid=${itemId}`;
    (await db).get(sql)
    .then(
        (rows)=>{
            res.send(rows);
        }
    );
});
server.post("/register" ,async (req, response)=>{
    var data = req.body;
    var usename = data.useName;
    var email = data.email;
    (await db).get(`select * from users where username = '${usename}'`).then(res=>{ 
        if((typeof res)== "undefined"){
            var password = data.password; bcrypt.hash(password, saltRound, async(err, hash)=>{
                if(err){console.log("err: "+err)}
                ((await db).all("select rowid, * from users"))
                .then(async res=>{
                    // console.log(res);
                    var id = 0;
                    if(res.length == 0){
                        // console.log("length: 0")
                        id = 1;
                    }else{
                        // console.log("length >0");
                        id = (res[res.length - 1].rowid)+1;
                    }
                    var sql = "insert into users (rowid, username, email, password) values (?, ?, ?, ?);"
                    var params = [id, usename, email, hash];
                    (await db).all(sql, params)
                    .then( (err, rows)=>{
                        if(err){console.error(err)}
                        console.log("Inserted");

                        response.send("Inserted");
                    });
                });
            })
        }else{
            response.send("Taken");
        }
    });
});
server.post("/signIn", async (req, response)=>{
    var data = req.body;
    var username = data.userName;
    var password = data.password;
    var sql = "select username, password from users where username=?";
    var params = [username];
    (await db).all(sql, params)
    .then(res=>{
        if(res.length === 0){
            response.send("incorrect username");
        }else{
            var user = res[0];
            bcrypt.compare(password, user.password, (err, res)=>{
                if(err){console.log(err);}
                if(res){
                    response.send(username);
                }else{
                    response.send("incorrect password")
                }
            }); 
        }
    })
});

server.post("/addItem", async (req, res)=>{
    var data = req.body;
    var title = data.title;
    var description = data.description;
    var price = data.price;
    var quantity = data.quantity;
    var category = data.category;
    var image = data.image;
    var imageName = data.imageName;
    // console.log(`title ${title}, des: ${description}, price: ${price}, quantity: ${quantity}, category: ${category}, image:${image}, imageName ${imageName}`);
    var sql = "INSERT INTO items(title, description, price, image, imageName, quantity, category) Values (?, ?, ?, ?, ?, ?, ?)";
    var params = [title, description, price,image, imageName, quantity, category];
    (await db).all(sql, params).then(
        (err, rows)=>{
            console.log("inserted");
            if(err){console.log(err);}
            res.send("inserted");
        }
    );
});
server.post("/addToCart", async (req, res)=>{
    var data = req.body;
    var username = data.username;
    var itemid = data.itemId;
    console.log(`${username} => ${itemid}`)
    res.send("added")
});

server.use('/api', api);
server.use(express.static('public')); // use this middleware before get method.


server.listen(3000, async ()=>{
    (await db).exec("CREATE TABLE cart (name text, itemID int, FOREIGN KEY (name) REFERENCES users(username)), FOREIGN KEY (itemID) REFERENCES items(rowid))");
    // (await db).exec("delete from items")
    console.log("Server is listening on port 3000");
});