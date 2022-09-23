import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container" style={{width:"100%", height:"100%", position: "absolute", backgroundColor: "#90909073", paddingLeft: `${(window.innerWidth-70)/2}px`, paddingTop: `${(window.innerHeight-70)/2.5}px`}}>
      <div className="loading-spinner">
      </div>
    </div>
  );
}