import React, { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingComponent/Loading";

const Data = ({ data }) => {
    var [nextPageNo, setNextPageNo] = useState(1);
    var [items, setItems] = useState([]);
    var [loading, setLoading] = useState(false);
    var [showLoadMore, setShowLoadMore] = useState(true);

    var loadMoreData = ()=>{
        console.log("load more fun call");
        setLoading(true);
        fetch("/getAllItems?page="+nextPageNo)
        .then(res => res.json())
        .then(res => {
            setItems(items.concat(res.response));
            setNextPageNo(res.nextPage);
            if(res.response.length < 10){
                setShowLoadMore(false);
            }
            setLoading(false);
        });
    };

    useEffect(()=>{
        loadMoreData();
    }, []);
    
    var returnContent = () => {
        if(loading){
            return <LoadingSpinner />
        }else{
            return <>
                {items.map(item=>{
                    return (<div key={item.rowid}>{item.rowid}</div>)
                })}
                {showLoadMore ? <input type="button" value="Load More" className="btn" onClick={()=>loadMoreData()} /> : <></> }
            </>
        }
    };

    return (<>{returnContent()}</>)
}

export default Data;