import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import ItemDisplay from "../ItemDisplay/ItemDisplay";
import LoadingSpinner from "../LoadingComponent/Loading";


var  Index = ()=> {
    var [items, setItems] = useState([]);
    var [loading, setLoading] = useState(true);
    var location = useLocation();
    
    useEffect(()=>{
        var pathArr = location.pathname.split("/");
        if(location.pathname == "/"){
            setLoading(true);
            fetch("/index")
            .then(res => res.json())
            .then(res => {
                setItems(res);
                setLoading(false);
            });
        }
        else if(pathArr[1] == "category"){
            setItems([]);
            setLoading(true);
            fetch("/index/category/"+pathArr[2])
            .then(res=>res.json())
            .then(res=>{
                setItems(res);
                setLoading(false);
            });
        }else if(pathArr[1] == "search"){
            setItems([]);
            setLoading(true);
            fetch("/index/search/"+pathArr[2])
            .then(res=>res.json())
            .then(res=>{
                setItems(res);
                setLoading(false);
            });
        }
    }, [location]);
    return(
        <div id="index_page">
            {/* display ad */}
            <div id="ad_div">
                <div className="ad_video">
                <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/FT3ODSg1GFE"+"?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0"}></iframe>
                </div>
                <div className="ad_text">                
                    <div>
                        <div className="h1 ad_title">
                            iPhone 14 Pro
                        </div>
                        <div className="ad_desc">
                            A magical new way to interact with iPhone. Groundbreaking safety features designed to save lives. An innovative 48MP camera for mind-blowing detail. All powered by the ultimate smartphone chip.
                        </div>
                        <div className="ad_go_btn_div">
                            <Button onClick={()=>{window.location.href = "/details/7"}} className="ad_go_btn">
                                Go &#8594;
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* display all the items */}
            <div className="displayitems">
                {loading == false ? (items).map((item, index)=>{
                    return <ItemDisplay item = {item} key={index} />
                }) : <LoadingSpinner /> }
            </div>
            
        </div>
    );
}

export default Index;