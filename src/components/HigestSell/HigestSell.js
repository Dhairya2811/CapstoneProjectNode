import React, { useEffect, useState } from "react";
import Error404 from "../Error404/Error404";
import LoadingSpinner from "../LoadingComponent/Loading";
import { useLocation } from "react-router-dom";
import { Table, Collapse, PageHeader } from "react-bootstrap";

var HigestSell = () => {
    const [admin, setAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    var location = useLocation();

    // Style ------------------------------------------------------------------------------------------------
    // Desktop Style ----------------------------------------------------------------------------------------
    var HigestSellContainer = {
        height: "70vh", 
        width:"100%", 
        padding: "1em 10%",
        color: "#003A56",
        
    };
    var detailTableStyle = {
        width: "95%",
        marginLeft: "5%",
        marginBottom: "0"
    };
    // Style Completed --------------------------------------------------------------------------------------
    useEffect( ()=>{
        setLoading(true);
        fetch("/userInfo", {
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            credentials: "include",
            body: JSON.stringify({username: sessionStorage.getItem("username")})
        })
        .then(res => res.json())
        .then(res=>{
            setAdmin(Boolean(res.admin));
        });

        fetch("/higestSellReq")
        .then(res => res.json())
        .then(async res => {
            setLoading(false);
            setData(res);
        });
    }, []);
    
    
    const [openRows, setOpenRows] = useState({});

    const toggleRow = (id) => {
        setOpenRows((prev) => ({
        ...prev,
        [id]: !prev[id]
        }));
    };

    const showContent = ()=>{
        if(loading){
            <LoadingSpinner />
        }else{
            if(admin){
                return (<div style = {HigestSellContainer}>
                    <h1>Highest Sales in the {new Date().toLocaleString('en-US', { month: 'long' })}.</h1>
                    <Table striped bordered hover>
                        <tbody>
                            {data.map((user) =>  (
                                <React.Fragment key={user.rowid}>
                                    <tr onClick={() => toggleRow(user.rowid)}>
                                        <td style={{color: "#003A56", fontWeight: "Bold", fontSize: 20}}>{user.sellername}</td>
                                        <td style={{color: "#003A56", textAlign: "right", fontSize: 20, fontWeight: "Bold"}}>${user.profit}</td>
                                    </tr>
                                    <tr colSpan="2">
                                            <Collapse in={openRows[user.rowid]}>
                                                <td colSpan={2} style={{padding: "0"}}>
                                                    <Table style={detailTableStyle}>
                                                        <tbody>
                                                            {user.details.map(detail => (
                                                                <tr key={detail.itemtitle}>
                                                                    <td className="col-md-4">{detail.buyername}</td>
                                                                    <td className="col-md-4" style={{textAlign: "center"}}>{detail.itemtitle}</td>
                                                                    <td className="col-md-4" style={{textAlign: "right"}}>$ {detail.price}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </Table>
                                                </td>
                                            </Collapse>
                                    </tr>
                                    
                                </React.Fragment>))
                            }
                        </tbody>
                    </Table>
                </div>);
            }else{
                return <Error404 linkAvailable={true}/>
            }
        }
    };

    return (<>
        {showContent()}
    </>);
}

// const HigestSell = ()=>{
//     return <>
//         HigestSell
//     </>
// };

export default HigestSell;