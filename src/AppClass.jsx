import { Component } from "react";
import "./App.css"


export default class AppClass extends Component{
  render(){
    this.data = this.props.props
   
  
  let gallerystyle = {
    textAlign:"center"
     
   }
  return (
    <>
    <h1 style={gallerystyle}>Kalvium Gallery </h1>
    <div className='Container'>
     <img src={this.data[0].img} alt="" width={"700px"} />
     <img src={this.data[1].img} alt="" width={"700px"} />
     <img src={this.data[2].img} alt="" width={"700px"} />
     <img src={this.data[3].img} alt="" width={"700px"} />
     

    </div>
    




    </>)  
  }
  // code here
  
}
