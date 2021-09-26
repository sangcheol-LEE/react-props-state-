import React from "react"
import Parents from "./Parents";
import "../../src/main.css"

class Children extends React.Component {

  render() {
    return (
    <div className="mainInner">
    <h1 className="mainText">
      {this.props.name}
      ({this.props.age}살)
      </h1>
      
    <form className="inputBox">
      <input className="idText"type="text"/>
      <input className="passWordText"type="password"/>
      <button onClick={this.props.introduce}>Click</button>
    </form>
   </div>
  )
  };
  }


export default Children;
