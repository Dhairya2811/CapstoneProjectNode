var express = require("express");
var sassMiddleware = require("sass-middleware");
var path = require("path");
var sqlite3 = require("sqlite3");
var { open } = require("sqlite"); 
var bcrypt = require("bcrypt");
const cors = require("cors");

// var express = require("express");


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

var pathArray = [
    "/", 
    "/signin", 
    "/register", 
    "/addItem", 
    "/details/:id", 
    "/myCart", 
    "/myItems", 
    "/editItem/:id", 
    "/payment", 
    "/category/:name",
    "/myCart/category/:name",
    "/myItems/category/:name",
    "/search/:search_by"
 ];
server.get(pathArray, (req, response)=>{
        response.render('index');    
});

const returnData = {};
const setReturn = (key, data)=>{
    returnData[key] = data;
};
const getReturn = ()=> {return returnData}
server.get(["/index", "/index/category/:name"], async (req, response)=>{
    var name = req.params.name;
    var sql = "";
    var params = [];
    if(name == undefined || name == "All"){    
        // get the last 6 items which are on deal
        setReturn("index", true);
        var sql_index = `Select rowid,* from items where quantity > ? AND deal=1 ORDER BY rowid DESC LIMIT 0,6`;
        var params_index = [ 0];
        (await db).all(sql_index, params_index).then(
            async data=>{
                setReturn("Deals", data);
                // get the last 6 items which has category Electronic
                let sql = "SELECT rowid, * FROM items WHERE quantity > ? AND category = ? ORDER BY rowid DESC LIMIT 0,6";
                let params = [0, 'Electronics'];
                (await db).all(sql, params).then(
                    async data=>{
                        setReturn('Electronic', data)
                        // get the last 6 items which has category Fashion
                        let sql = "SELECT rowid, * FROM items WHERE quantity > ? AND category = ? ORDER BY rowid DESC LIMIT 0,6";
                        let params = [0, 'Fashion'];
                        (await db).all(sql, params).then(
                            async data=>{
                                setReturn('Fashion', data);
                                // get the last 6 items which has category Home
                                let sql = "SELECT rowid, * FROM items WHERE quantity > ? AND category = ? ORDER BY rowid DESC LIMIT 0,6";
                                let params = [0, 'Home'];
                                (await db).all(sql, params).then(
                                    async data=>{
                                        setReturn('Home', data);
                                        // get the last 6 items which has category Toys
                                        let sql = "SELECT rowid, * FROM items WHERE quantity > ? AND category = ? ORDER BY rowid DESC LIMIT 0,6";
                                        let params = [0, 'Toys'];
                                        (await db).all(sql, params).then(
                                            async data=>{
                                                setReturn('Toys', data);
                                                response.json(getReturn())
                                            }
                                        );
                                    }
                                );
                            }
                        );   
                    }
                );
            }
        );        
    }else if(name == "Lowtohigh"){
        setReturn("index", "Price: low to high");
        sql = `SELECT rowid, * FROM items WHERE quantity > ? ORDER BY price, rowid DESC`;
        params = [ 0];
        (await db).all(sql, params).then(
            data=>{
                setReturn("data", data);
                response.json(getReturn());        
            }
        );
    }else if(name == "Hightolow"){
        setReturn("index", "Price: high to low");
        sql = `SELECT rowid, * FROM items WHERE quantity > ? ORDER BY price DESC`;
        params = [ 0];
        (await db).all(sql, params).then(
            data=>{
                setReturn("data", data);
                response.json(getReturn());
            }
        );
    }else if(name == "Deals"){
        setReturn("index", "Deals");
        sql = `SELECT rowid, * FROM items WHERE quantity > ? AND deal=1 ORDER BY price`;
        params = [ 0];
        (await db).all(sql, params).then(
            data=>{
                setReturn("data", data);
                response.json(getReturn());
            }
        );
    }else{
        setReturn("index", name);
        sql = `SELECT rowid, * FROM items WHERE quantity > ? AND category = ? ORDER BY rowid DESC`
        params = [ 0, name];
        (await db).all(sql, params).then(
            data=>{
                setReturn("data", data);
                response.json(getReturn());
            }
        );
    }
});
server.get("/index/search/:search_by", async(req, res)=>{
    var name = req.params.search_by;
    setReturn("index", name);
    var sql = `SELECT rowid, * FROM items WHERE title LIKE ? OR category LIKE ? OR description LIKE ? ORDER BY deal DESC`;
    var params = ['%'+name+'%', '%'+name+'%', '%'+name+'%'];
    (await db).all(sql, params).then(
        data=>{
            setReturn("data", data);
            res.json(getReturn());
        }
    )
})

server.get("/getComments/:itemid", async(req, res)=>{
    var itemid = req.params.itemid;
    var sql = `SELECT rowid, * FROM comment WHERE itemid=${itemid}`;
    (await db).all(sql).then(data=>res.send(data));
});

server.get(["/getMyItems/:username", "/getMyItems/:username/category/:name"], async(req, res)=>{
    var username = req.params.username;
    var name = req.params.name;
    var sql = "";
    var params = [];
    if(name == undefined || name == "All"){
        sql = `Select rowid, * from items where name = ?`;
        params = [username];
    }else if(name == "Lowtohigh"){
        sql = `SELECT rowid, * FROM items WHERE name = ? ORDER BY price`;
        params = [username];
    }else if(name == "Hightolow"){
        sql = `SELECT rowid, * FROM items WHERE name = ? ORDER BY price DESC`;
        params = [username];
    }else{
        sql = `SELECT rowid, * FROM items WHERE name = ? AND category = ?`
        params = [username, name];
    }
    (await db).all(sql, params).then(
        data =>{
            res.json(data);
        }
    )
});
// ****************************************************************************
server.get(["/getCartItems/:username", "/getCartItems/:username/category/:name"], async (req, res)=>{
    var userName = req.params.username;
    var name = req.params.name;
    var sql = "";
    if(name == undefined || name == "All"){
        sql = `SELECT c.name, i.rowid, i.title, i.description, i.price, i.image, i.imageName, i.quantity, i.category FROM cart AS c INNER JOIN items AS i ON c.itemid = i.rowid WHERE c.name="${userName}" AND i.quantity > 0`;
    }else if(name == "Lowtohigh"){
        sql = `SELECT c.name, i.rowid, i.title, i.description, i.price, i.image, i.imageName, i.quantity, i.category FROM cart AS c INNER JOIN items AS i ON c.itemid = i.rowid WHERE c.name="${userName}" AND i.quantity > 0 ORDER BY price`;
    }else if(name == "Hightolow"){
        sql = `SELECT c.name, i.rowid, i.title, i.description, i.price, i.image, i.imageName, i.quantity, i.category FROM cart AS c INNER JOIN items AS i ON c.itemid = i.rowid WHERE c.name="${userName}" AND i.quantity > 0 ORDER BY price DESC`;
    }else{
        sql = `SELECT c.name, i.rowid, i.title, i.description, i.price, i.image, i.imageName, i.quantity, i.category FROM cart AS c INNER JOIN items AS i ON c.itemid = i.rowid WHERE c.name="${userName}" AND i.quantity > 0 AND i.category = "${name}"`;
    }
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
            if(rows !== undefined){
                (await server.locals.db).all(`SELECT * FROM cart WHERE itemID = ${itemId}`)
                .then(internalrows =>{
                    var inCart = false;
                    if ((internalrows).length !== 0){
                        inCart = true;
                    }
                    rows["inCart"] = inCart;
                    res.send(rows);
                });
            }else{
                let row = {"item": "undefined"}
                res.send(row);
            }
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
                    console.log(username)
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
    var dealText = data.dealText;
    var dealPrice = data.dealPrice;
    console.log(`deal text: ${dealText}\ndeal price: ${dealPrice}`);
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
    console.log(data.cartAction);
    console.log("id: "+ itemid);
    console.log("username: "+ username);
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
    var deal = false;
    var dealText = data.dealText;
    var dealPrice = data.dealPrice;
    if(dealText != ""  || dealText != undefined){
        deal = true;
    }
    console.log(`deal text: ${dealText}\ndeal price: ${dealPrice} \nDeal: ${deal}`);
    var sql = "UPDATE items SET title = ?, description = ?, price = ?, image = ?, imageName = ?,quantity = ? , category = ?, name = ? WHERE rowid = ?";
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

server.get("/:path", (req, res)=>{
    // res.redirect("/");
    res.render('index');    

});

var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
server.listen(server_port, async ()=>{
    // var sql = "UPDATE items SET deal_title='Best deal' WHERE rowid=31";
    // (await db).all(sql).then(
    //     (err, rows)=> console.log("Updated")
    // )
    console.log("Server is listening on port 3000");
});