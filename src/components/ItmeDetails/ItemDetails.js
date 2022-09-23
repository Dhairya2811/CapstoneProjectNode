import {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";

var ItemDetails = () => {
    var [item, setItem] = useState();
    var {id} = useParams();
    var navigate = useNavigate();
    var [commentLoading, setCommentLoading] = useState(true);
    var [comments, setComments] = useState([]);

    useEffect(()=>{
        fetch(`/getItem/${id}`)
        .then(res => res.json())
        .then(res=>{setItem(res)});
        let itemid = id;
        if(commentLoading){
            fetch("/getComments/"+itemid)
            .then(res=>res.json())
            .then(res=>{
                setCommentLoading(false);
                console.log(res);
                setComments(res);
            });
        }
    });
    
    var addToCart = ()=>{
        let username = (sessionStorage.getItem("username"));
        let itemID = id;
        fetch("/addToCart", {
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            credentials: "include",
            body: JSON.stringify({username: username, itemId: itemID, cartAction: !item.inCart})})
        .then(res => res.text())
        .then(res => {
            navigate("/myCart");});
    } 

    var editItem = ()=>{
        navigate(`/editItem/${item.rowid}`);
    }

    var submitComment = ()=>{
        var text = document.getElementById("commentText").value;
        if(text.length == 0){
            console.log("Comment empty");
        }else{
            console.log("comment submitted");
            var date = new Date();
            var day = date.getDate();
            var month = date.getMonth()+1;
            var year = date.getFullYear();
            var currentDate = `${day}-${month}-${year}`;
            fetch("/addComment", {
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    username: sessionStorage.getItem("username"),
                    datetime: currentDate,
                    comment: text,
                    itemid: id
                })
            })
            .then(res=> res.text())
            .then(res => {
                if(res == "Inserted"){
                    setCommentLoading(true);
                }
            });
            document.getElementById("commentText").value = "";
        }
    }

    var delItem = ()=>{
        // console.log("Delete item: "+id);
        fetch(`/delete/${id}`)
        .then(res=>res.text())
        .then(res=>{
            console.log(res)
            navigate(`/`);
        });
    }

    var addComment = ()=>{
        return <div className="addCommentDiv">
            <div className="addCommentTextarea">
                <textarea className="form-control" id="commentText" style={{borderRadius: "10px 0px 0px 10px"}} rows="4" placeholder="Add comment for this item..."></textarea>
            </div>
            <div className="submitButton">
                <button className="submitCommentBtn" onClick={submitComment.bind(this)}><i className='material-icons' style={{color: "white"}}>send</i></button>
                {/* <input type="button" value={<i class='material-icons'>send</i>} onClick={submitComment()} className="submitCommentBtn" /> */}
            </div>
        </div>
    }

  

    var addToCartBtnDisplay = ()=>{
        let username = (sessionStorage.getItem("username"));
        if(username !== null){
            if(item.name == username){
                return <div style={{width: "100%"}}>
                    <input style={{marginTop: "1em", marginLeft: "3em"}} className="btn btn-primary" type="button" value="Edit" onClick={editItem} />
                    <input style={{marginTop: "1em", marginRight: "3em", float: "right"}} className="btn btn-danger" type="button" value="Delete" onClick={delItem} />
                </div>
            }
            else if(item.inCart !== true){
                return <input style={{marginTop: "1em", marginLeft: "3em"}} className="btn btn-primary" type="button" value="Add to cart" onClick={addToCart} />;
            }else{
                return <input style={{marginTop: "1em", marginLeft: "3em"}} className="btn btn-danger" type="button" value="Remove from cart" onClick={addToCart} />;
            }
        }
    }
    var getComments = ()=>{
        if(comments.length != 0 ){
            console.log("Get comment ");
            return <div style={{backgroundColor:"red"}}>{comments.map(comment=>{
                return (<div>
                    <div className="commentHeader">
                        <div className="commentTitle">
                            {comment.username}
                        </div>
                    </div>
                </div>)
            })}</div>
        }
    }
    var returnFun = ()=>{
        if(item == undefined){
            <div style={{height: window.innerHeight, width: window.innerWidth, zIndex: 1, backgroundColor: "gray"}}></div>
        }else{
            var getComment = getComments();
            return <>
                <div style={{ width:"100%", display: "grid", gridTemplateColumns: "30% auto", marginTop: "1em"}}>
                    <div style={{height: "100%", width: "100%"}}>
                        <img src={item.image} style={{marginTop: "1em", marginLeft:"5%", width: "90%"}}/>
                        <h2 style={{width:"100%", marginLeft: "1.5em"}}>${item.price}</h2>
                    </div>
                    <div style={{height: "100%", width: "100%",marginLeft:"2em" , marginTop: "1em"}}>
                        <h1 style={{marginBottom: "0px"}}>{item.title}</h1>
                        <small style={{marginTop: "0px"}}>{item.category}</small>
                        <pre style={{fontSize: "15px", marginTop: "2em"}}>{item.description}</pre>
                    </div>
                </div>
                {addToCartBtnDisplay()}  
                <br/>
                <div className="commentsDiv">
                    <span className="commentHeading">
                        <h3>Comment</h3>
                    </span>
                    {addComment()}
                    {getComment}
                </div>
            </>
        }
    }

    return(
        <div>
            {returnFun()}
        </div>
    );
}

export default ItemDetails;