import React from "react"
import Parents from "./Parents";
import "../../src/main.css"

class Children extends React.Component {

  constructor() {
    super ()

    this.state={
      titleColor: "red",
      titleSize: "50px",
      };
  }

  render() {
    return (
      <h1 style={{color : this.state.titleColor,
                  fontSize: this.state.titleSize}}>
        Hello world 
        </h1>
      )
    };
  }


export default Children;
