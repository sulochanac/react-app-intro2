import { Component } from "react";
import { Employee } from "./Employee";
import { Manager } from "./Manager";
// this file linked to company, employee and manager
export class Company extends Component{
  state={
    CompanyName:"VMR Infotech",
      }
  render(){
    return <div>
      <h2>Welcome to Company Component</h2>
      <hr />
      {/* <Employee companyDetails = {this.state.CompanyName}/> */}
      <Manager/>
  
    </div>
  }
}