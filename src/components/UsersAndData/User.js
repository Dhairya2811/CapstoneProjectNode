import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";

/**
 * {username: 'das', email: 'das@s.s', blocked: 0, admin: 0}
 */

const displayUser = (user)=>{
    // style for the each user in the list ***********************************************************************************************
    // desktop style *********************************************************************************************************************
    const userListDiv = {
        display: "flex",
        flexWrap: "nowrap",
        width: "100%",
        flexDirection: "row",
        padding: "10px 1em",
        borderRadius: "10px",
        margin: "0.5em 0",
        backgroundColor: "white"
    };
    const userDetail = {
        display: "flex",
        flex: "1",
        alignItems: "center"
    };
    const usernameStyle = {
        paddingLeft: "1em",
        fontWeight: "bold",
        fontSize: "1.25em"
    };
    const userBtn = {
        width: "auto",
        margin: "0 1em"
    };
    // style completed *******************************************************************************************************************
    return (<>
        <div style={userListDiv}>
            <div style={userDetail}>
                <span style={usernameStyle}>{user.username}</span>
            </div>
            <div style={userDetail}>
                {user.email}
            </div>
            <div style={userBtn}>
                {user.blocked == 0 ? <button className="btn btn-danger">Block</button> 
                    :
                <button className="btn btn-success">Unblock</button>}
            </div>
            <div style={userBtn}>
                {user.admin == 0 ? <button className="btn btn-success">Add as Admin</button> 
                    : 
                <button className="btn btn-danger">Remove as Admin</button>}
            </div>
        </div>
    </>);
};

const User = ({user}) => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("/users", {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: user.username})
        })
        .then(res => res.json())
        .then(res => {
            setUsers(res.res);
        });
    }, []);

    return (<>
        {users.map(user => {
            return <div key={user.username}>{displayUser(user)}</div>
        })}
    </>)
}

export default User;