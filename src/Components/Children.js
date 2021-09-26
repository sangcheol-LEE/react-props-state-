import React from "react"
import Parents from "./Parents";
import "../../src/main.css"

class Children extends React.Component {

  constructor() {
    super ()

    this.state={
        isSwitchOn: false,
      };
  }

  // 토글스위치 함수를 boolean 값에 맞춰 변하게 할 수 있도록 조건문으로 수정
  toggleSwitch = () => {
    // if(this.state.isSwitchOn) {
    //   this.setState({
    //     isSwitchOn:false
    //   })
    // }else {
    //   this.setState({
    //     isSwitchOn:true
    
    //   });
    this.setState({
      isSwitchOn: !this.state.isSwitchOn,
    })

  }

  render() {
    //  스위치가 켜졌으면 색깔이 파란색
    //  스위치가 꺼졌으면 색깔이 검은색
    // 이럴땐 데이터 타입을 boolean을 사용해주는 게 좋다.
    console.log(this.state)

    const { isSwitchOn: 스위치, } = this.state //구조분해할당 
  
    return (
      <div>
      <h1 className={스위치 ? "switchOn"  : "switchOff" }>
        Switch: {스위치 ? "On" : "Off"} 
        </h1>
        <button onClick={this.toggleSwitch}>toggle </button>
        </div>
      )  
    };
  }


export default Children;
