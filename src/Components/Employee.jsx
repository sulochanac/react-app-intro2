import { Component } from "react";
import { Company } from "./Company";
// this file linked to company, employee and manager
export class Employee extends Component{
  constructor(){
    super();
    this.state = {
      empDetails : {
        fname:"Ram",
        lname:"Krishna",
        email:"ram@gmail.com",
        city:"Bangalore",
        state:"Karnataka",
        pin:560049,
      },
      subjects: ["HTML","CSS","JS","React"]
    }
  }
   render(){
    var {companyDetails}=this.props //Destructuring a property called companyDetails
    console.log(this.props)
    return <div>
<h2>Welcome to Employee Component </h2>
<p>CompanyName : {this.props.companyDetails}</p>
{/* <ul>
  <li>{this.state.empDetails.fname}</li>
  <li>{this.state.empDetails.lname}</li>
  <li>{this.state.empDetails.email}</li>
  <li>{this.state.empDetails.city}</li>
  <li>{this.state.empDetails.state}</li>
  <li>{this.state.empDetails.pin}</li>
</ul> */}

<ul>
  {this.state.subjects.map((subjects)=>{
    return <li>{subjects}</li>
  })}
</ul>
<ul>
  <h2>Employee Details :</h2>
  <ul>
   {/* {Object.keys(this.state.empDetails)} */}
   {Object.values(this.state.empDetails).map((val)=>{
    return <li>{val}</li>
   })}
  </ul>
</ul>
    </div>
  }
}