import React, { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingComponent/Loading";
import { useNavigate } from "react-router-dom";

const Data = ({ data }) => {
    var [nextPageNo, setNextPageNo] = useState(1);
    var [items, setItems] = useState([]);
    var [loading, setLoading] = useState(false);
    var [showLoadMore, setShowLoadMore] = useState(true);
    var [alertText, setAlertText] = useState("");
    var [showAlert, setShowAlert] = useState(false);
    var [comments, setComments] = useState({});
    var [showComments, setShowComments] = useState([]);
    var navigate = useNavigate();

    // style ---------------------------------------------------------------------------------------------------------------------------------------------
    // desktop style -------------------------------------------------------------------------------------------------------------------------------------
    
    const itemStyle = {
        display: "grid",
        gridTemplateColumns: "29.5% 69.5%",
        gap: "1%",
        backgroundColor: "white",
        borderRadius: "1em",
        padding: "2em",
        marginTop: "1em",
        cursor: "pointer",
        position: "relative",
        zIndex: "1",
    };

    var imageDiv = {
        backgroundColor: "white",
        width: "100%",
        height: "10em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
    };

    var imageStyle = {
        height: "auto", 
        maxHeight: "10em", 
        width: "auto", 
        maxWidth: "100%",
        objectFit: "cover",
        borderRadius: "10px",
    };

    var detailsDiv = {
        paddingTop: "1em",
        marginLeft: "1em",
        width: "100%",
        height: "5em",
        display: "grid",
        gridTemplateColumns: "65% 35%",
    };

    var dealTitleStyle = {
        fontWeight: "bold",
        fontSize: "0.9em",
        backgroundColor: "red",
        color: "#E8F0F4",
        borderRadius: "5px",
        width: "fit-content",
        padding: "2px 1em",
        textAlign: "center",
        marginBottom: ".5rem",
    };

    var priceDiv = {
        fontSize: "1.25em",
    };

    var detailsText = {
        zIndex: 0,
    };
    var detailsBtn = {
        display: "flex",
        justifyContent: "center",
        flexFlow: "column", 
        alignItems: "center",
        gap: "1em"
    };
    var alertDiv= {
        display: showAlert ? "block" : "none",
    };

    // style completed -----------------------------------------------------------------------------------------------------------------------------------

    var loadMoreData = async (page)=>{
        setLoading(true);
        var pathArr = location.pathname.split("/");
        if(data.length != 0 && pathArr[2] != undefined){
            await setItems(data);
            var idsArray = showComments;
            await data.forEach(async element => {
                var cpComments = comments;
                var jsonRes = await fetch("/getComments/"+element.rowid);
                var res = await jsonRes.json();
                var dataId = element.rowid;
                idsArray[dataId] ="none";
                cpComments[element.rowid] = res;
                setComments(cpComments);
            });
            await setShowLoadMore(false);
            await setLoading(false);
            await setShowComments(idsArray);
        }else{
            var jsonRes = await fetch("/getAllItems?page="+page);
            var res = await jsonRes.json();
            var idsArray = showComments;
            await res.response.forEach(async element => {
                var cpComments = comments;
                var jsonRes = await fetch("/getComments/"+element.rowid);
                var res = await jsonRes.json();
                var dataId = element.rowid;
                idsArray[dataId] =false;
                cpComments[element.rowid] = res;
                setComments(cpComments);
            });
            await setItems(items.concat(res.response));
            await setNextPageNo(res.nextPage);
            if(res.response.length < 10){
                await setShowLoadMore(false);
            }
            await setLoading(false);
            await setShowComments(idsArray);
        }
    };

    useEffect(()=>{
        loadMoreData(nextPageNo);
    }, []);
    
    // work on the detials page.
    var showItem = (category, deal, dealPrice, deal_title, description, image, imageName, name, price, quantity, rowid, title)=>{
        // --------------------------------------------------------------------------------------------------------------------------------------------------------------
        var commentsDivStyle = {
            height: "fit-content",
            width: "100%",
        };
        var commentHeader= {
            width: "100%",
            borderBottom: "1px solid gray",
        };
        var commenterName = {
            marginTop: "1em",
            display: "grid",
            gridTemplateColumns: "40% 40% 10% 10%",
            color: "rgb(56, 56, 56)",
        };
        var commentText = {
            minHeight: "3em",
            marginBottom: "2em",
            padding: "0 1.5%",
        };
        var flagBtn = {
            cursor: "pointer",
            paddingLeft: "2em",
            display: "flex",
            alignSelf: "flex-end",
            marginBottom: "5px"
        };
        var small= {
            display: "flex",
            justifyContent: "end",
            alignSelf: "flex-end",
            marginBottom: "5px",
        };
        var allCommentsDiv = {
            display: "block",
            height: "fit-content",
            width: "100%",
            padding: "30px 2em 10px",
            backgroundColor: "#87878769",
            marginTop: "-30px",
            borderRadius: "1em"
        };

        // --------------------------------------------------------------------------------------------------------------------------------------------------------------

        var displayDescription = "";
        var newDescription = (`${description}`).replace("\n", " ");
        if(newDescription.split(" ").length >50 || description.split("\n").length > 3){
            displayDescription = newDescription.split(" ").slice(0, 50).join(" ")+"... "
        }else{
            displayDescription = newDescription;
        }
        var clickOnItem = ()=>{
            navigate(`/details/${rowid}`)
        };
        var deleteBtnClick = (e)=>{
            e.stopPropagation();
            fetch("/delete/"+rowid)
            .then(res => res.text())
            .then(res => {
                if(res == "deleted"){
                    setShowAlert(true);
                    setAlertText("Item has been deleted.");
                    setTimeout(()=>{
                        setShowAlert(false);
                        setAlertText("");
                        loadMoreData(1);
                        window.location.reload();
                    }, 2000);
                }
            });
        };  

        var showCommentClick = async (e)=>{
            e.stopPropagation();
            var showCommentsVar = showComments;
            await setShowComments({});
            showCommentsVar[rowid] = !showCommentsVar[rowid];
            await setShowComments(showCommentsVar);
        };   

        var deleteCommentClick = (commentID)=>{
            fetch("/deleteComment", {                
                method: "post",
                headers:{
                    "Content-Type":"application/json",
                },
                credentials:"include",
                body: JSON.stringify({commentid: commentID})
            })
            .then(res => res.text())
            .then(res => {
                if(res == "COMMENT DELETED"){
                    window.location.reload();
                }
            });
        }
        
        var displayComment = (comment) => {
            return (<div>
                    <div style={commentHeader}>
                        <div style={commenterName}>
                            <h4>{comment.name}</h4>
                            <small style={small}>{comment.datetime} </small>
                            {comment.flag == "0" ? <div style={{...flagBtn, color: "gray"}}>&#9873;</div> : <div style={{...flagBtn, color: "red"}} >&#9873;</div>}
                            <button onClick={()=>deleteCommentClick(comment.rowid)} className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                    <div style={commentText}>
                        {comment.comment}
                    </div>
                </div>)
        }

        return (
        <>
            <div key={rowid} style={{...itemStyle, boxShadow: showComments[rowid] ? "10px 10px 5px #00395622" : "0 0"}}>
                <div style={imageDiv} onClick={clickOnItem}>
                    <img style={imageStyle} className="itemImage" src={image} />    
                </div>
                <div style={detailsDiv} onClick={clickOnItem}>
                    <div style={detailsText}>
                        <h2>{title}</h2>
                        {deal == 1 ? 
                        <div style={dealTitleStyle}>
                            {deal_title}
                        </div>
                        : <></>}
                        <div>{displayDescription}</div>
                        <div style={priceDiv}>$ {deal == 1 ? dealPrice : price}</div>
                    </div>
                    <div style={detailsBtn}>
                        <div style={{height: "fit-content",  zIndex: "1"}}><input type="button" className="btn btn-danger" value={"Delete"} onClick={deleteBtnClick} /></div>
                        <div style={{height: "fit-content",  zIndex: "1"}}><input type="button" className="btn btn-success" value={"Show Comments"} onClick={showCommentClick} /></div>
                    </div>
                </div>
            </div>
            <div>
                {showComments[rowid] == true ? 
                    <div style={allCommentsDiv}>
                        <div id={`comment-${rowid}`} style={commentsDivStyle}>
                            {
                                comments[rowid] != undefined ? 
                                    comments[rowid].map(comment => {
                                        return (<div key={comment.rowid}>
                                            {displayComment(comment)}
                                        </div>
                                        )
                                    }) : 
                                    <></>
                            }
                        </div>
                    </div> : 
                    <></>
                }
            </div>
        </>);
    };

    var returnContent = () => {
        if(loading){
            return <LoadingSpinner />
        }else{
            return <>
            <div style={alertDiv} className="alert alert-danger">
                {alertText}
            </div>
                {items.map(item=>{
                    return (showItem(item.category, item.deal, item.dealPrice, item.deal_title, item.description, item.image, 
                        item.imageName, item.name, item.price, item.quantity, item.rowid, item.title))
                })}
                {showLoadMore ? <input type="button" value="Load More" className="btn" onClick={()=>loadMoreData(nextPageNo)} /> : <></> }
            </>
        }
    };

    return (<>{returnContent()}</>)
}

export default Data;