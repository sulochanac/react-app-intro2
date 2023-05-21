import { Component } from "react";
// this file linked to company, employee and manager
export class Manager extends Component{
  constructor(){
    super();
    this.state={
      showDetails : true, //by default it will be false
      managerdetails : {
        name:"Ramesh",
        department:"IT",
        experience:10,
        salary:200000,
        city:"Bangalore",
      }
    }
  }
  sayHelloToManager=()=>{
    console.log("Hello Manager, How are you")
  }
  showEmpDetails=()=>{
    let newState={...this.state} // copy the previous state
    newState.showEmpDetails=true // change thevalue for show details
    this.setState({newState:true}) //updating the state
  }
  render(){
    return <div>
      <h2>Welcome to Manager Component</h2>
      <button onClick={this.sayHelloToManager}>Say Hello</button><br /><br />
      <button onClick={this.showEmpDetails}>Show Employee Details</button>
      {/* {this.state.showDetails && <h2>Employee details will be shown now</h2>} */}
      {/* another way of displaying */}
      {this.state.showDetails && <div>
        <ul>
          {Object.values(this.state.managerdetails).map((val)=>{
            return <li key={val}>{val}</li>
          })}
        </ul>
      </div> }
    </div>
  }
}