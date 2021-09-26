import React from "react"
import Parents from "./Parents";
import "../../src/main.css"

class Children extends React.Component {
  
    render() {
    
    console.log("props >>>",this.props)

  
    return (
      <div>
      <h1 className={this.props.isSwitchOn ? "switchOn"  : "switchOff" }>
        Switch: {this.props.isSwitchOn ? "On" : "Off"} 
        </h1>
        <button onClick={this.props.toggleSwitch}>toggle </button>
        </div>
      )  
    };
  }


export default Children;
