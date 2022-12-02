import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import ItemDisplay from "../ItemDisplay/ItemDisplay";
import LoadingSpinner from "../LoadingComponent/Loading";
import BestDealBack from '../../Images/Best_deals_background.png';
import BestDealLabel from '../../Images/best_deals.png';


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
    var categoryHead = ()=>{
        if(items.index == "Price: low to high"){
            return(
                <>
                    <h2><span className="categoryFilterH2">Price: </span><span className="categoryFilterName">Low to High</span></h2>
                </>
            );
        }else if(items.index == "Price: high to low"){
            return(
                <>
                    <h2><span className="categoryFilterH2">Price: </span><span className="categoryFilterName">High to Low</span></h2>
                </>
            );
        }else{
            return(
                <>
                    <h2><span className="categoryFilterH2">Category: </span><span className="categoryFilterName">{items.index}</span></h2>
                </>
            );
        }

    }
    return(
        <>{loading == false ?  
            <div id="index_page" >
                {items.index == true ?
                    <>
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
                    <div className="displayItems">
                        {/* Best deals */}
                        <div className="displayBestDeals" style={{backgroundImage: `url(${BestDealBack})`}}>
                            <div className="bestDealsTitle">
                                <img src={BestDealLabel} />
                            </div>
                            <div className="showAllDiv">
                                <a href="/category/Deals">Show all</a>
                            </div>
                            <div className="bestDealsItems">
                                {(items.Deals).map((item, index)=>{
                                    return <ItemDisplay item = {item} key={index} />
                                })}
                            </div>
                        </div>
                        <div className="displayCategory">
                            {/* Electronics */}
                            <div className="displayElectronic displayByCategory">
                                <div className="categoryTitleDiv">
                                    <h2>
                                        Electronics
                                    </h2>
                                    <div className="showAllDiv">
                                        <a href="/category/Electronics">Show all</a>
                                    </div>
                                </div>
                                <div className="categoryDisplay">
                                    {(items.Electronic).map((item, index)=>{
                                        return <ItemDisplay item = {item} key={index} />
                                    })}
                                </div>
                            </div>
                            {/* Fashion */}
                            <div className="displayFashion displayByCategory">
                                <div className="categoryTitleDiv">
                                    <h2>
                                        Fashion
                                    </h2>
                                    <div className="showAllDiv">
                                        <a href="/category/Fashion">Show all</a>
                                    </div>
                                </div>
                                <div className="categoryDisplay">
                                    {(items.Fashion).map((item, index)=>{
                                        return <ItemDisplay item = {item} key={index} />
                                    })}
                                </div>
                            </div>
                            {/* Home */}
                            <div className="displayHome displayByCategory">
                                <div className="categoryTitleDiv">
                                    <h2>
                                        Home
                                    </h2>
                                    <div className="showAllDiv">
                                        <a href="/category/Home">Show all</a>
                                    </div>
                                </div>
                                <div className="categoryDisplay">
                                    {(items.Home).map((item, index)=>{
                                        return <ItemDisplay item = {item} key={index} />
                                    })}
                                </div>
                            </div>
                            {/* Toys */}
                            <div className="displayToys displayByCategory">
                                <div className="categoryTitleDiv">
                                    <h2>
                                        Toys
                                    </h2>
                                    <div className="showAllDiv">
                                        <a href="/category/Toys">Show all</a>
                                    </div>
                                </div>
                                <div className="categoryDisplay">
                                    {(items.Toys).map((item, index)=>{
                                        return <ItemDisplay item = {item} key={index} />
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="subtitleAtBottom" style={{marginTop: document.height}}>
                        <p className="subtitle fancy"><span>Designed and developed by Dhairya Soni</span></p>
                    </div>
                    </>
                :
                <div className="displayCategoryFilter">
                    <div className="displayCategoryFilterHead">
                        {categoryHead()}
                    </div>
                    <div className="categoryDisplay">
                        {(items.data).map((item, index)=>{
                            return <ItemDisplay item = {item} key={index} />
                        })}
                    </div>
                </div>}
            </div>
        : <LoadingSpinner /> }</>
    );
}

export default Index;