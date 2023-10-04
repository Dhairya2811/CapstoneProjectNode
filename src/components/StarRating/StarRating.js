import React, { useEffect, useState } from 'react';
import { FaTimes, FaStar } from "react-icons/fa";

function StarRating({starReviewOpen, closeClick, itemid}){
    const [hover, setHover] = useState(false);
    const [rates, setRates] = useState(0);

    var style = {
        position: "absolute",
        top: "45%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#E8F0F4",
        padding: "20px",
        zIndex: 1000,
        width: "50%",
    }
    var buttonStyle = {
        border: "1px solid black",
        borderRadius: "5px",
        padding: "5px",
        backgroundColor: "#E8F0F4",
        float: "right",
    };
    var bodyStyle = {
        margin: "auto",
        width: "50%"
    };
    var starStyle = { fontSize: 30, 
        color: '#E8F0F4', 
        stroke: '#003A56', 
        strokeWidth: 10, 
        cursor: hover ? 'pointer' : 'default'
    };

    useEffect(()=>{
        getReviewData();
    }, []);

    var getReviewData = ()=>{
        var username = sessionStorage.getItem("username");
        fetch("/starreview/?username="+username+"&itemid="+itemid)
        .then(res=>res.json())
        .then(res=>{
            if(res.res.length == 0){
                setRates(0);
                for(var i = 1; i<=5; i++){
                    document.getElementById("rateStar"+i).style.color="#E8F0F4";
                }
            }else{
                setRates(res.res[0].rate);
                for(var i = 1; i <=res.res[0].rate; i++){
                    document.getElementById("rateStar"+i).style.color="#003A56";
                }
            }
        });
    };

    var starClick = (starNum)=>{
        for(var i = 1; i<=5; i++){
            document.getElementById("rateStar"+i).style.color="#E8F0F4";
        }
        for(var i = 1; i <=starNum; i++){
            document.getElementById("rateStar"+i).style.color="#003A56";
        }
        fetch("/starreview", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                rate: starNum,
                username: sessionStorage.getItem("username"),
                itemid: itemid
            })
        })
        .then(res=>res.text())
        .then(res=>{
            console.log(res);
        })
        .catch(err=>console.log(err));
        setTimeout(closeClick(), 100);
    };



    return (
        <>
            {starReviewOpen && 
                <div className='StarRating' style={style}>
                    <span style={{width: "100%"}}><button style={buttonStyle} onClick={closeClick}><FaTimes /></button></span><br/>
                    <h2 style={{textAlign: "center"}}>How would you rate it?</h2>
                    <div style={bodyStyle}>
                        <FaStar style={starStyle} onClick={()=>starClick(1)} id="rateStar1" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} />&thinsp;
                        <FaStar style={starStyle} onClick={()=>starClick(2)} id="rateStar2" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} />&thinsp;
                        <FaStar style={starStyle} onClick={()=>starClick(3)} id="rateStar3" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} />&thinsp;
                        <FaStar style={starStyle} onClick={()=>starClick(4)} id="rateStar4" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} />&thinsp;
                        <FaStar style={starStyle} onClick={()=>starClick(5)} id="rateStar5" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} />
                    </div>
                </div>
            }
        </>
    );
}


export default StarRating;
