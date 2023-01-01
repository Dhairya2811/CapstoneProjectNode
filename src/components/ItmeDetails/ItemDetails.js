import {useEffect, useState} from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Error404 from "../Error404/Error404";
import LoadingSpinner from "../LoadingComponent/Loading";

var ItemDetails = () => {
    var [item, setItem] = useState();
    var [itemLoaded, setItemLoaded] = useState(false);
    var {id} = useParams();
    var navigate = useNavigate();
    var location = useLocation();
    var [commentLoading, setCommentLoading] = useState(true);
    var [comments, setComments] = useState([]);

    useEffect(()=>{
        if(itemLoaded == false){
            setItemLoaded(true);
            fetch(`/getItem/${id}`)
            .then(res => res.json())
            .then(res=>{
                setItem(res)
                setItemLoaded(false);
            });
        }
        if(commentLoading == true){
            getCommentData();
        }
    }, [location]);
    var getCommentData = ()=>{
        fetch("/getComments/"+id)
        .then(res=>res.json())
        .then(res=>{
            setCommentLoading(false);
            setComments(res);
        });
    }
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
        fetch(`/delete/${id}`)
        .then(res=>res.text())
        .then(res=>{
            navigate("/");
        });
    }

    var addComment = ()=>{
        return <div className="addCommentDiv">
            <div className="addCommentTextarea">
                <textarea className="form-control" id="commentText" style={{borderRadius: "10px 0px 0px 10px"}} rows="4" placeholder="Add comment for this item..."></textarea>
            </div>
            <div className="submitButton">
                <button className="submitCommentBtn" style={{backgroundColor: "#003A56"}} onClick={submitComment.bind(this)}><i className='material-icons' style={{color: "white"}}>send</i></button>
            </div>
        </div>
    }

  

    var addToCartBtnDisplay = ()=>{
        let username = (sessionStorage.getItem("username"));
        if(username !== null){
            if(item.name == username){
                return <div style={{width: "100%"}}>
                    <input className="btn btn-primary cartBtn" style={{backgroundColor: "#003A56", borderColor: "#003A56"}} type="button" value="Edit" onClick={editItem} />
                    <input className="btn btn-danger cartBtn" type="button" style={{backgroundColor: "#a90119", borderColor: "#a90119"}} value="Delete" onClick={delItem} />
                </div>
            }
            else if(item.inCart !== true){
                return <input className="btn btn-primary cartBtn" style={{backgroundColor: "#003A56"}} type="button" value="Add to cart" onClick={addToCart} />;
            }else{
                return <input className="btn btn-danger cartBtn" type="button" value="Remove from cart" style={{backgroundColor: "#a90119", borderColor: "#a90119"}} onClick={addToCart} />;
            }
        }
    }
    function flagComment(comment){
        fetch("/flagComment", {
            method: "post",
            headers:{
                "Content-Type":"application/json",
            },
            credentials:"include",
            body: JSON.stringify({rowid: comment.rowid, flag: comment.flag})
        })
        .then(res => res.text())
        .then(res=>{if(res == "flag_change"){
            getCommentData();
        }})
    }
    function displayComment(comment){
        return (<div>
                <div className="commentHeader">
                    <div className="commenterName">
                        <h4>{comment.name}</h4>
                        <small>{comment.datetime} </small>
                        {comment.flag == "0" ? <div style={{color: "gray"}} id="flagBtn" onClick={()=> flagComment(comment)} >&#9873;</div> : <div style={{color: "red"}} id="flagBtn" onClick={()=> flagComment(comment)} >&#9873;</div>}
                    </div>
                </div>
                <div className="commentText">
                    {comment.comment}
                </div>
            </div>)
    }
    var getComments = ()=>{
        if(comments.length != 0 ){
            return <div style={{width:"100%", padding: "0 3%"}}>{comments.map(comment=>{
                return(<div>
                    {displayComment(comment)}
                </div>);
            })}</div>
        }
    }
    var returnFun = ()=>{
        if(item == undefined && !itemLoaded){
            return <div style={{ zIndex: 1}}>
                <Error404 errorMessage="There is no item on this URL" linkAvailable = "true"/>
            </div>
        }
        else if (item.item== "undefined" && !itemLoaded){
            return <div style={{ zIndex: 1}}>
                <Error404 errorMessage="There is no item on this URL" linkAvailable = "true"/>
            </div>
        }else{
            var getComment = getComments();
            return <div className="displayItemInfo">
                <div className="displayInfodiv">
                    <div className="itemImageDisplay">
                        <img className="itemImage" src={item.image} />
                    </div>
                    <div className="itemInfoDisplay" >
                        <h1 className="title">{item.title}</h1>
                        <small>{item.category}</small>
                        <div className="reviewDiv">
                            <a href="#commentsDiv"> {comments.length} 
                            {comments.length == 1 || comments.length == 0 ? <span> review</span> : <span> reviews</span>}</a>
                        </div>
                        <h4 className="itemPrice">${item.price}</h4>
                        <pre className="itemDescription">{item.description}</pre>
                        
                        {addToCartBtnDisplay()} 
                    </div>
                </div> 
                <br/>
                {sessionStorage.getItem("username") != null || comments.length != 0 ? <div className="commentsDiv" id="commentsDiv">
                    <span className="commentHeading">
                        <h3>Comment</h3>
                    </span>
                    {sessionStorage.getItem("username") != null ? addComment() :
                    <></>}
                    {getComment}
                </div> : <></>}
            </div>
        }
    }

    return(
        <div className="itemDetailsPage">
            {itemLoaded ? <LoadingSpinner /> : returnFun()}
        </div>
    );
}

export default ItemDetails;