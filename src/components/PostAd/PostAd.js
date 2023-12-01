import React, {useState, useEffect} from 'react';
import Error404 from '../Error404/Error404';
import AddUrlImage from './Image.json';
import { useNavigate } from "react-router-dom";

var PostAd = () => {
    const [url, setUrl] = useState("");
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");
    const[itemId, setItemId] = useState("");
    const [username, setUserName] = useState(null);
    const [admin, setAdmin] = useState(0);

    var navigate = useNavigate();

    // Style  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // desktop style ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    var PostAd_container = {
        height: "70vh", 
        width:"100%", 
        padding: "2em 10%",
        
    };
    var PostAd_div = {
        display: "grid",
        gridTemplateColumns: "52% 48%",
        height: "100%",
        width:"100%",
        padding:"30px 1em"
    }
    var video_section = {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexWrap: "wrap",
    };
    var iframe_style = {
        borderRadius: "20px 20px 0 0",
    };
    var details_section = {
        marginTop: "4em",
        marginLeft: 100,
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2.5em",
    };
    var AdTitle = {
        fontSize: "2.5rem",
        inlineSize: "100%",
    };
    var AdDescription = {
        fontSize: "1.35em",
        inlineSize: "100%",
        overflowWrap: "break-word",
    };
    var itemid_style = {
        inlineSize: "100%",
    };
    var youtube_url = {
        borderRadius: "0 0 20px 20px",
        paddingInline: "20px",
    };
    var youtube_URL_image_div = {
        height: "90%",
        display: "flex",
        alignItems: "center"
    };
    var youtube_image = {
        width: "100%",
        height: "60%",
    };

    var buttonSection = {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end"
    };
    var submitBtn = {
        backgroundColor: "#003A56"
    };
    var itemid_div_style = {
        width: "100%", 
        display: "flex", 
        justifyContent: "center"
    }
    // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    useEffect(()=>{
        var user = JSON.parse(sessionStorage.getItem("user"));
        setUserName(user == null ? null : user.username);
        setAdmin(user == null ? 0 : user.admin);
        fetch("/lastAd")
        .then(res => res.json())
        .then(res=>{
            var previousAdData = (res.res);
            if(previousAdData.length != 0){
                setUrl(previousAdData[0].videoLink);
                setTitle(previousAdData[0].title);
                setDescription(previousAdData[0].adDescription);
                setItemId(previousAdData[0].itemid);
            }
        });
    }, []);

    var urlChange = event=>{
        var val = event.target.value;
        if(val != null){
            var arr = val.split("/");
            var arr = arr[(arr.length-1)].split("?");
            console.log(arr[0]);
            var youtube_url = "https://www.youtube.com/embed/"+arr[0];
            setUrl(youtube_url);
        }else{
            setUrl("");
        }
    };

    var submitAd = (event)=>{
        event.preventDefault();
        var jsonObj = {url: url, title: title, description: description, itemid: itemId};
        fetch("/addAd", {
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            credentials: "include",
            body: JSON.stringify(jsonObj)
        })
        .then(res=> res.text())
        .then(res=>{
            if(res == "Ad added" || res == "Ad updated"){
                navigate("/");
            }
        });
    };

    var showPage = ()=>{
        if(admin == 1){
            return (
                <div style={PostAd_container}>
                    <form style={PostAd_div} onSubmit={submitAd}>
                        <div style={video_section}>
                            {url.length != 0 ? 
                                 <iframe width="100%" height="90%" style={iframe_style}
                                 src={url+"?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0"}></iframe> 
                            :
                                <div style={youtube_URL_image_div}>
                                    <img style={{...youtube_image, ...iframe_style}}
                                    src={AddUrlImage.youtubeImage}/>
                                </div>
                            }
                            <input style={youtube_url} placeholder='Video URL from YouTube'
                            value={url} className='form-control' id='VideoURL' type='url' 
                            onChange={urlChange} required/>
                        </div>
                        <div style={details_section}>
                            <div style={{width: "100%"}}>
                                <input style={AdTitle} id='AdTitle' 
                                placeholder='Ad title' className="form-control" 
                                value={title} onChange={event=> setTitle(event.target.value)}
                                required/>
                            </div>
                            <div style={{width: "100%"}}>
                                <textarea style={AdDescription} rows="4" 
                                id="newItemDescription" placeholder="Ad description" 
                                className="form-control" onChange={event=>{setDescription(event.target.value)}} required>{description}</textarea>
                            </div>
                            <div style={itemid_div_style}>
                                <input style={itemid_style} type='number' id='itemid' placeholder='Item ID'
                                value={itemId} onChange={event=> setItemId(event.target.value)} 
                                className="form-control" required/>
                            </div>
                            <div className='button_section' style={buttonSection}>
                                <input type='submit' style={submitBtn} className='btn btn-success'/>
                            </div>
                        </div>
                    </form>
                </div>
            );
        }
        return <><Error404 linkAvailable = "true"/></>;
    }

    return(<>{showPage()}</>);
}

export default PostAd;