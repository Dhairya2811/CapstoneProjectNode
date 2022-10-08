import express from "express";
import api from "./api/index.js";
import sassMiddleware from "node-sass-middleware";
import path from "path";
import sqlite3 from "sqlite3";
import { open } from "sqlite"; 
import bcrypt from "bcrypt";
import { bool } from "prop-types";

// variables
const saltRound = 10;

// code 
sqlite3.verbose();

const db = open({
    filename: "Database.db",
    driver: sqlite3.Database
});

const server = express();
server.locals.db = db;
server.use(sassMiddleware({
    src: path.join(__dirname, "scss"),
    dest: path.join(__dirname, "public"),
    debug: true,
    outputStyle: 'compressed'
}));

server.set("view engine", "ejs");

server.use(express.json());

server.get(["/", "/signin", "/register", "/addItem", "/details/:id", "/myCart", "/myItems", "/editItem/:id"], (req, response)=>{
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


server.get("/getComments/:itemid", async(req, res)=>{
    var itemid = req.params.itemid;
    var sql = `SELECT rowid, * FROM comment WHERE itemid=${itemid}`;
    (await db).all(sql).then(data=>res.send(data));
});

server.get("/getMyItems/:username", async(req, res)=>{
    var sql = `Select rowid, * from items where name = "${req.params.username}"`;
    (await db).all(sql).then(
        data =>{
            res.json(data);
        }
    )
});
// ****************************************************************************
server.get("/getCartItems/:username", async (req, res)=>{
    var sql = `select c.name, i.rowid, i.title, i.description, i.price, i.image, i.imageName, i.quantity, i.category from cart as c inner join items as i on c.itemID = i.rowid where c.name = "${req.params.username}"`;
    (await db).all(sql)
    .then(row=>{
        res.send(row)
    });
});
// ****************************************************************************
server.get("/getItem/:id", async (req, res)=>{
    var itemId = req.params.id;
    var sql = `select rowid, * from items WHERE rowid=${itemId}`;
    (await db).get(sql)
    .then(
        async (rows)=>{
            // rows["incart"] = true;
            (await server.locals.db).all(`SELECT * FROM cart WHERE itemID = ${itemId}`)
            .then(internalrows =>{
                var inCart = false;
                if ((internalrows).length !== 0){
                    inCart = true;
                }
                rows["inCart"] = inCart;
                res.send(rows);
            });
        }
    );
});

server.get("/delete/:id", async (req, response)=>{
    var itemID = req.params.id;
    var sql = `DELETE FROM items where rowid = ?`;
    var params = [itemID];
    console.log(itemID);
    (await db).get(sql, params)
    .then(res=>{
        // setTimeout(()=>{
        //     response.redirect("/index");
        // }, 100);
        response.send("deleted")
    });
    // response.send("d");
});

server.post("/addComment", async(req, res)=>{
    var data = req.body;
    var username = data.username;
    var datetime = data.datetime;
    var flag = false;
    var comment = data.comment;
    var itemid = data.itemid;
    var sql = `INSERT INTO comment (name, datetime, flag, comment, itemid) VALUES (?, ?, ?, ?, ?)`;
    var params = [username, datetime, flag, comment, itemid];
    (await db).all(sql, params)
    .then((err, rows)=>{
        if(err){console.error(err)}
        res.send("Inserted");
    });
});

server.post("/flagComment", async(req, res)=>{
    var data = req.body;
    var sql = "UPDATE comment SET flag=? WHERE rowid=? ";
    var flag = !(parseInt(data.flag));
    var params = [flag, data.rowid];
    (await db).all(sql, params).then((err, rows)=>{
        if(err){console.log(err);}
        res.send("flag_change");
    });
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
                    var id = 0;
                    if(res.length == 0){
                        id = 1;
                    }else{
                        id = (res[res.length - 1].rowid)+1;
                    }
                    var sql = "insert into users (rowid, username, email, password) values (?, ?, ?, ?);"
                    var params = [id, usename, email, hash];
                    (await db).all(sql, params)
                    .then( (err, rows)=>{
                        if(err){console.error(err)}
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
    var name = data.username;
    var sql = "INSERT INTO items(title, description, price, image, imageName, quantity, category, name) Values (?, ?, ?, ?, ?, ?, ?, ?)";
    var params = [title, description, price,image, imageName, quantity, category, name];
    (await db).all(sql, params).then(
        (err, rows)=>{
            if(err){console.log(err);}
            res.send("inserted");
        }
    );
});
server.post("/addToCart", async (req, res)=>{
    var data = req.body;
    var username = data.username;
    var itemid = data.itemId;
    var sql = "INSERT INTO cart (name, itemID) VALUES (?, ?)";
    var sql2 = "DELETE FROM cart WHERE name=? AND itemID=?"
    var params = [username, itemid];
    if(data.cartAction){
        (await db).all(sql, params).then(
            (err, rows)=>{
                res.send("added");
            }
        );
    }
    else{
        (await db).all(sql2, params).then(
            (err, rows)=>{
                res.send("removed");
            }
        );
    }
});
server.post("/updateItem", async (req, res)=>{
    var data = req.body;
    var id = data.id;
    var title = data.title;
    var description = data.description;
    var price = data.price;
    var quantity = data.quantity;
    var category = data.category;
    var image = data.image;
    var imageName = data.imageName;
    var name = data.username;
    var sql = "UPDATE items SET title = ?, description = ?, price = ?, image = ?, imageName = ?,quantity = ? , category = ?, name = ? WHERE rowid = ?";
    // var sql = "INSERT INTO items(title, description, price, image, imageName, quantity, category, name) Values (?, ?, ?, ?, ?, ?, ?, ?)";
    var params = [title, description, price,image, imageName, quantity, category, name, id];
    (await db).all(sql, params).then(
        (err, rows)=>{
            if(err){console.log(err);}
            res.send("updated");
        }
    );
});
server.use('/api', api);
server.use(express.static('public')); // use this middleware before get method.


server.listen(3000, async ()=>{
    // (await db).exec("CREATE TABLE comment (name text, datetime text, flag text, comment text, itemid int, FOREIGN KEY (name) REFERENCES users(username), FOREIGN KEY (itemid) REFERENCES items(rowid))");
    // (await db).exec("DELETE FROM cart");
    // (await db).exec("CREATE TABLE items ( title text, description text, price text, image text, imageName text, quantity number, category text, name text, FOREIGN KEY (name) REFERENCES users(username))")
    console.log("Server is listening on port 3000");
});