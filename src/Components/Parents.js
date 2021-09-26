import React, { Component } from 'react';
import Children from "./Children";

class Parents extends Component {
  
  introduce = () => {
    alert("Hello")
  }
  
  
  render() {
    return (
      <>
     <Children 
     name="Ian" 
     age={26}
     introduce={this.introduce}
     />

     <Children
      name="Nari"
      age={30} />
      </>
    );
  }
}

export default Parents;