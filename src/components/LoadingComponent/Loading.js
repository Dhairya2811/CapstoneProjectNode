import { Bars } from "react-loader-spinner";
import React from "react";

export default function LoadingSpinner() {
  return (
    <div style={{
      height: "89vh",
      width: "90vw",
      backgroundColor: "#E8F0F4",
      display: "flex",
      paddingLeft: "2vw",
      paddingTop: "-2em",
      justifyContent: "center",
      alignItems:"center"
    }}>
      <Bars
        height="80px"
        width="100px"
        radius="10px"
        color="#003A56"
        ariaLabel="loading"
        wrapperStyle
      />
    </div>
  );
}