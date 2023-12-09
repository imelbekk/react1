import React, {Component} from "react";

export default class App extends Component{
  state={
    count: 0,
    count2: 0,
    arr: [0],
    user:{
      fistName:'John',
      lastName:'Doe',
      adress:'London'
    }
  }
  btn1 = () =>{
   this.setState({
    count: this.state.count + this.state.count2
   })
  }
  btn2 = ()=>{
    this.setState({
      count2: this.state.count2 + 1
    })
  }
  addCounter =()=>{
    const {arr} = this.state
    let last_item = 0
    this.setState({
      add: arr.push(last_item)
    })
  }
  pChange = (index)=>{
    console.log(index);
    }
  mChange =(index)=>{
    console.log(index);
  }
  render(){
    const {count,count2,arr,user} = this.state
    const {adress} = user
    return (
      <div>
        <h1> {count} metr </h1>
        <button onClick={this.btn1}>yurish</button>
        <h2>Qadam kattaligi: {count2} metr</h2>
        <button onClick={this.btn2}>qadamni kengaytirish</button>
         
       <button onClick={this.addCounter}>add counter</button>
        {
          arr.map((item,index)=>{
            return <div>
              <button onClick={()=>this.pChange(index)}>+</button>
              <span>{item}</span>
              <button onClick={()=>this.mChange(index)}>-</button>
            </div>

          })
        }

        <h2>Adress: {adress}</h2>
      </div>
    ) 
  }
}