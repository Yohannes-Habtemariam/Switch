import React from "react";

const LightStatusReading = (props) => {
    return (
        <div className= {props.lightStatus ? "lit" : "dark"} > {props.lightStatus ? "The house light is on. You can study javaScript coding, specially react." : "The house light is off. You need to get sleep to join the class of javaScript react with a fresh mind."} </div>
    )
}
export default LightStatusReading;