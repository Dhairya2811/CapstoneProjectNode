import express from "express";
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
server.locals.db = db;
server.use(sassMiddleware({
    src: path.join(__dirname, "scss"),
    dest: path.join(__dirname, "public"),
    debug: true,
    outputStyle: 'compressed'
}));

server.use(express.json({limit: '50mb'}));

server.set("view engine", "ejs");

server.use(express.json());

server.get(["/", "/signin", "/register", "/addItem", "/details/:id", "/myCart", "/myItems", "/editItem/:id", "/payment"], (req, response)=>{
        response.render('index');    
});

server.get("/index", async (req, response)=>{
    var sql = "Select rowid,* from items where quantity>0";
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
    var sql = `SELECT c.name, i.rowid, i.title, i.description, i.price, i.image, i.imageName, i.quantity, i.category FROM cart AS c INNER JOIN items AS i ON c.itemid = i.rowid WHERE c.name="${req.params.username}" AND i.quantity > 0`;
    (await db).all(sql)
    .then(row=>{
        res.send(row);
    });
});
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
    (await db).get(sql, params)
    .then(res=>{
        response.send("deleted")
    });
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

server.post("/successfulPurchase", async (req, res)=>{
    var data = req.body;
    var items = data.items;
    for(let i = 0; i<items.length; i++){
        var sql = `UPDATE items SET quantity = ? WHERE rowid=?`;
        var params = [parseInt(items[1][i])-1, parseInt(items[0][i])];
        (await db).all(sql, params)
        .then((err, rows)=>{
            if(err){console.log(err);}
        });
    }
    res.send("purchased");
});

server.use(express.static('public')); // use this middleware before get method.


server.listen(3000, async ()=>{
    console.log("Server is listening on port 3000");
});