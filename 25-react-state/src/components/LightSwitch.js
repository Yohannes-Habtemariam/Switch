import React from "react";

const LightSwitch = (props) => {
    return (
        <button onClick = {() => {
            props.lightSwitchStatus();
            props.numberOfClickCount();
        }} className="switch"> 
          Switch 
        </button>
    )
    }

export default LightSwitch;