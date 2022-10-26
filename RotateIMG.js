import React, { useState } from "react";
import "./App.css";

// class RotateIMG extends React.Component{
//     constructor(props){
//       super(props);
//       this.state = {
//         rotation: 0
//       }

//       this.rotate = this.rotate.bind(this);
//       this.rotateleft = this.rotateleft.bind(this);
//     }

//     rotateright(){
//       let newRotation = this.state.rotation + 90;
//       if(newRotation >= 360){
//         newRotation =- 360;
//       }
//       this.setState({
//         rotation: newRotation,
//       })
//     }

//     rotateleft(){
//       let newRotation = this.state.rotation - 90;
//       if(newRotation >= 360){
//         newRotation =- 360;
//       }
//       this.setState({
//         rotation: newRotation,
//       })
//     }

//     render(){
//       const { rotation } =  this.state;
//       return <div><input onClick={this.rotateleft} type="button" value="left" />
//         <img style={{transform: `rotate(${rotation}deg)`}} src={this.props.src} width="400" />
//         <input onClick={this.rotateright} type="button" value="right" />

//       </div>
//     }
//   };
const RotateIMG = (props) => {
  const [state, setState] = useState({
    rotation: "",
  });
  const rotateleft = (e) => {
    let newRotation = state.rotation - 90;
    if (newRotation >= 360) {
      newRotation = -360;
    }
    setState({
      rotation: newRotation,
    });
  };
  const rotateright = (e) => {
    let newRotation = state.rotation + 90;
    if (newRotation >= 360) {
      newRotation = -360;
    }
    setState({
      rotation: newRotation,
    });
  };
  return (

    <div>
      <img style={{ transform: `rotate(${state.rotation}deg)` }} src={props.src} width="400" />
      <input onClick={rotateleft} type="button" value="left" />
      <input onClick={rotateright} type="button" value="right" />
    </div>


  );
};
export default RotateIMG;
