import React, { Component } from 'react';
import Children from "./Children";

class Parents extends Component {

  constructor() {
    super ()

    this.state={
        isSwitchOn: false,
      };
  }

  toggleSwitch = () => {
    this.setState({
      isSwitchOn: !this.state.isSwitchOn,
    })

  }

  render() {
    return (
      <Children 
      isSwitchOn={this.state.isSwitchOn}
      toggleSwitch={this.toggleSwitch}/>
    );
  }
}

export default Parents;