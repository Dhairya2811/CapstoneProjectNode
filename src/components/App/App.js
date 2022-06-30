// import Header from "../Header/Header";
import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Navigationbar from "../Navigationbar/Navigationbar";
import Index from "../Index/Index";
import SignIn from "../SignIn/SignIn";
import Register from "../Register/Register"
// import ContestList from "../ContestList/ContestList";
// import ContestPreview from "../ContestPreview/ContestPreview";

// const pushState = (obj, url)=>
//     window.history.pushState(obj, "", url);


class App extends React.Component{
    // state= {
    //     pageHeader: "Naming Contests",
    //     contests: this.props.initialContests
    // }
    componentDidMount(){
        // ajax ...
        
    }
    // fetchContest = (contestId)=>{
    //     pushState(
    //         {currentContestId: contestId},
    //         `/contest/${contestId}`
    //     )
    // }
    render(){
        return (
            <div className="App">
                <Navigationbar />
                <div className="body">
                    <Container>
                        <Routes>
                                <Route exact path="/" element={<Index/>}/>
                                <Route path="/register" element={<Register/>}/>
                                <Route path="/signin" element={<SignIn/>}/>
                        </Routes>
                    </Container>
                </div>
            </div>
        );
    }
};

export default App;