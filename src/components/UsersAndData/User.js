import React, { useEffect, useState } from "react";

/**
 * {username: 'das', email: 'das@s.s', blocked: 0, admin: 0}
 */

const User = ({user}) => {
    const [users, setUsers] = useState([]);

    // style for the each user in the list ***********************************************************************************************
    // desktop style *********************************************************************************************************************
    const userListDiv = {
        display: "flex",
        flexWrap: "nowrap",
        width: "100%",
        padding: "10px 1em",
        borderRadius: "10px",
        margin: "0.5em 0",
        backgroundColor: "white",
        flexDirection: window.innerWidth > 700 ? "row" : "column",
        gap: "1em"
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

    var fetchUsers = ()=>{
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
    }

    var buttonClickFun = (username, block, admin)=>{
        fetch("userblockadmin", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username: username, block: block, admin: admin})
        })
        .then(res => res.text())
        .then(res => {
            if(res == "USER INFO UPDATED"){
                fetchUsers();
            }
        });
    }

    const displayUser = (user)=>{
        return (<>
            <div style={userListDiv}>
                <div style={userDetail}>
                    <span style={usernameStyle}>{user.username}</span>
                </div>
                <div style={{...userDetail, marginLeft: "1.25em"}}>
                    {user.email}
                </div>
                <div style={userBtn}>
                    {user.blocked == 0 ? <button className="btn btn-danger" onClick={()=>buttonClickFun(`${user.username}`, 1, user.admin)}>Block</button> 
                        :
                    <button className="btn btn-success" onClick={()=>buttonClickFun(`${user.username}`, 0, user.admin)}>Unblock</button>}
                </div>
                <div style={userBtn}>
                    {user.admin == 0 ? <button className="btn btn-success" onClick={()=>buttonClickFun(`${user.username}`, user.blocked, 1)}>Add as Admin</button> 
                        : 
                    <button className="btn btn-danger" onClick={()=>buttonClickFun(`${user.username}`, user.blocked, 0)}>Remove as Admin</button>}
                </div>
            </div>
        </>);
    };

    useEffect(()=>{
        fetchUsers();
    }, []);

    return (<>
        {users.map(user => {
            return <div key={user.username}>{displayUser(user)}</div>
        })}
    </>)
}

export default User;