import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Error404 from "../Error404/Error404";
import User from "./User";
import Data from "./Data";

var UsersAndData = () => {
    const [page, setPage] = useState("user");
    const [firstTime, setFirstTime] = useState(0);
    const [admin, setAdmin] = useState(false);

    // Style -------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Desktop Style -----------------------------------------------------------------------------------------------------------------------------------------------------
    var UsersAndDataContainer = {
        height: "70vh", 
        width:"100%", 
        color: "#003A56",
    };
    var UsersAndDataContainerBody = {
        padding: "1em 10%"
    };
    var customRadioButton= {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        textAlign: "center",
    };
    var optionContainer= {
        position: "relative",
    };
    var underline= {
        position: "absolute",
        bottom: -5,
        left: 0,
        right: 0,
        height: 5,
        backgroundColor: "transparent",
        transform:  `translateX(${firstTime % 2 == 0 ? "-100" : "100"}%)` ,
        transition: "transform 0.3s ease-in-out",
        borderRadius: "3px"
    };
    var underlineSelected= {
        backgroundColor: "#003A56",
        transform: "translateX(0%)"
    };
    var formCheckInput= {
        display: "none",
    };
    var formCheckLabel= {
        cursor: "pointer",
    };
  
    // Done with the style -----------------------------------------------------------------------------------------------------------------------------------------------

    useEffect(()=>{
        var user = sessionStorage.getItem("username");
        fetch("/userInfo", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: user
            })
        })
        .then(res => res.json())
        .then(res=>{
            setAdmin(Boolean(res.admin))
        })
    }, []);

    const handleChange = (event) => {
        var viewPage = event.target.value;
        console.log(viewPage);
        setPage(viewPage);
    };

    const styleTransform = ()=>{
        var val = firstTime + 1;
        setFirstTime(val);
    }

    const showComponent = ()=>{
        if(admin){
            return (
                <div style={UsersAndDataContainer}>
                    <div style={customRadioButton}>
                        <div key={"user"} style={optionContainer}>
                            <Form.Check
                                type="radio"
                                id="user"
                            >
                                <Form.Check.Input 
                                    type="radio" 
                                    id="user" 
                                    value="user" 
                                    checked={page === "user"} 
                                    onChange={handleChange} 
                                    style={formCheckInput}
                                />
                                <Form.Check.Label style={formCheckLabel} onClick={styleTransform}><h3>User</h3></Form.Check.Label>
                            </Form.Check>
                            <div
                                style={
                                    page === "user"
                                    ? { ...underline, ...underlineSelected}
                                    : underline
                                }
                            ></div>
                        </div>
                        <div key={"data"} style={optionContainer}>
                            <Form.Check
                                type="radio"
                                id="data"
                            >
                                <Form.Check.Input 
                                    type="radio" 
                                    id="data" 
                                    value="data" 
                                    checked={page === "data"} 
                                    onChange={handleChange} 
                                    style={formCheckInput}
                                />
                                <Form.Check.Label style={formCheckLabel} onClick={styleTransform}><h3>Data</h3></Form.Check.Label>
                            </Form.Check>
                            <div
                                style={
                                page === "data"
                                    ? { ...underline, ...underlineSelected}
                                    : underline
                                }
                            ></div>
                        </div>
                    </div> 
                    <div style={UsersAndDataContainerBody}>
                        {page == "data" ? <>
                            <Data />
                        </> : <>
                            <User />
                        </>}
                    </div>              
                </div>
            );
        }else{
            return <Error404 linkAvailable={true} />
        }
    };
    
    return(
        <>
            {showComponent()}
        </>
    );
}

export default UsersAndData;

