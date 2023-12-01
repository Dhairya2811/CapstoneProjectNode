import {useEffect, useState} from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Error404 from "../Error404/Error404";
import StarRating from "../StarRating/StarRating";
import LoadingSpinner from "../LoadingComponent/Loading";
import { FaStar } from "react-icons/fa";

var ItemDetails = () => {
    var [item, setItem] = useState();
    var [itemLoaded, setItemLoaded] = useState(false);
    var {id} = useParams();
    var navigate = useNavigate();
    var location = useLocation();
    var [commentLoading, setCommentLoading] = useState(true);
    var [comments, setComments] = useState([]);
    var [starReviewOpen, setStarReviewOpen] = useState(false);
    var [reviewLoading, setReviewLoading] = useState(true);
    var [rates, setRates] = useState();
    const [username, setUserName] = useState(null);
    const [blocked, setBlocked] = useState(null);
    

    useEffect(()=>{
        var user = JSON.parse(sessionStorage.getItem("user"));
        setUserName(user.username);
        setBlocked(user.blocked);
        const fetchData = async ()=>{
            if(itemLoaded == false){
                await setItemLoaded(true);
                fetch(`/getItem/${id}/${user.username}`)
                .then(res => res.json())
                .then(async res=>{
                    await setItem(res)
                    await setItemLoaded(false);
                });
            }
            if(commentLoading == true){
                await getCommentData();
            }
            if(reviewLoading == true){
                await getReviewData();
            }
        };
        fetchData();
    }, [location]);
    var getCommentData = ()=>{
        fetch("/getComments/"+id)
        .then(res=>res.json())
        .then(res=>{
            setCommentLoading(false);
            setComments(res);
        });
    }
    var getReviewData = async ()=>{
        try{
            const res = await fetch("/aveReview/?itemid="+id);
            if(res.ok){
                const data = await res.json();
                setRates(data.avg);
            }else{
                throw new Error('Something went wrong');
            }
        }catch(err){
            console.error(err);
        }finally{
            setReviewLoading(false);
        }       
    };
    const starReviews = ()=>{
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            if(i<=Math.floor(rates)){
                stars.push(<span><FaStar style={{ fontSize: 20, color: '#E8F0F4', stroke: '#003A56', strokeWidth: 10, color: "#003A56"}} id="star1" />{"\t"}</span>);
            }else{
                stars.push(<span><FaStar style={{ fontSize: 20, color: '#E8F0F4', stroke: '#003A56', strokeWidth: 10, color: "#E8F0F4" }} id="star1" />{"\t"}</span>);
            }
        }
        return stars;
    };
    var addToCart = ()=>{
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
                    username: username,
                    datetime: currentDate,
                    comment: text,
                    itemid: id
                })
            })
            .then(res=> res.text())
            .then(res => {
                if(res == "Inserted"){
                    setCommentLoading(true);
                    navigate("/details/"+id);
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
        if(blocked != 1){
            return <div className="addCommentDiv">
                <div className="addCommentTextarea">
                    <textarea className="form-control" id="commentText" style={{borderRadius: "10px 0px 0px 10px"}} rows="4" placeholder="Add comment for this item..."></textarea>
                </div>
                <div className="submitButton">
                    <button className="submitCommentBtn" style={{backgroundColor: "#003A56"}} onClick={submitComment.bind(this)}><i className='material-icons' style={{color: "white"}}>send</i></button>
                </div>
            </div>
        }
        return <></>
    }

    var checkout = ()=>{
        sessionStorage.setItem("items", JSON.stringify([item]));
        navigate("/payment");
    }
  

    var addToCartBtnDisplay = ()=>{
        if(username !== null){
            if(item.name == username){
                return <div style={{width: "100%"}}>
                    <input className="btn btn-primary cartBtn" style={{backgroundColor: "#003A56", borderColor: "#003A56"}} type="button" value="Edit" onClick={editItem} />
                    <input className="btn btn-danger cartBtn" type="button" style={{backgroundColor: "#a90119", borderColor: "#a90119"}} value="Delete" onClick={delItem} />
                </div>
            }
            else if(item.inCart !== true){
                return <div style={{width: "100%"}}>
                    <input className="btn btn-primary cartBtn" style={{backgroundColor: "#003A56"}} type="button" value="Add to cart" onClick={addToCart} disabled={blocked == 1} />
                    <input className="btn btn-success cartBtn" type="button" value="Checkout" onClick={checkout}  disabled={blocked == 1} />
                </div>;
            }else{
                return <div style={{width: "100%"}}>
                    <input className="btn btn-danger cartBtn" type="button" value="Remove from cart" style={{backgroundColor: "#a90119", borderColor: "#a90119"}} onClick={addToCart} disabled={blocked == 1}/>
                    <input className="btn btn-success cartBtn" type="button" value="Checkout" onClick={checkout}  disabled={blocked == 1}/>
                </div>;
            }
        }
    }
    function flagComment(comment){
        if(blocked != 1){
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
    const Overlay = ({ starReviewOpen }) => {
        var style = {
            position: "absolute",
            top: 0,
            left: 0,
            width: document.body.scrollWidth,
            height: document.body.scrollHeight,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999
        };
        return (
          <>
            {starReviewOpen && <div className="overlay" style={style}></div>}
          </>
        );
    };
    var StarReviewClick = ()=>{
        setStarReviewOpen(true);
    };

    var closeClick = ()=>{
        setTimeout(()=>{
            setStarReviewOpen(false);
            getReviewData();
        }, 50);
    };

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
                        <img style={{height: "auto", maxHeight: "450px", width: "70%", maxWidth: "450px"}} className="itemImage" src={item.image} />
                    </div>
                    <div className="itemInfoDisplay" >
                        <h1 className="title">{item.title}</h1>
                        <small>{item.category}</small>
                        <div className="reviewDiv">
                            {/* create the review with the stars and rate out of 5. */}
                            
                                {reviewLoading ? (<p>Loading...</p>) : (<button title="Give your review to this product." 
                                style={{backgroundColor: "transparent", borderColor: "transparent", marginLeft: "-10"}}
                                onClick={StarReviewClick} disabled={blocked == 1}>{starReviews().map(star=>star)}</button>)}
                            <br/>
{/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                                {/* Add the component for the rates */}
                                {username != null && starReviewOpen ? 
                                <>
                                    <Overlay starReviewOpen={starReviewOpen} />
                                    <StarRating starReviewOpen={starReviewOpen} closeClick={closeClick} itemid={id}/>
                                </> : <></>}
{/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                                
                            <a href="#commentsDiv"> {comments.length} 
                            {comments.length == 1 || comments.length == 0 ? <span> review</span> : <span> reviews</span>}</a>
                        </div>
                        <h4 className="itemPrice">${item.deal == 1 ? item.dealPrice : item.price}</h4>
                        <pre className="itemDescription">{item.description}</pre>
                        
                        {addToCartBtnDisplay()} 
                    </div>
                </div> 
                <br/>
                {username != null || comments.length != 0 ? <div className="commentsDiv" id="commentsDiv">
                    <span className="commentHeading">
                        <h3>Comment</h3>
                    </span>
                    {username != null ? addComment() :
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