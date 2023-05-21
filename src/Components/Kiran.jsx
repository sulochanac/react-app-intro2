import { Component } from "react";
// this file linked to Ramu,Raghu and Kiran
export class Kiran extends Component {
  // props or properties which comes from Parent
render () {
  console.log (this.props);
  return (
    <div>
      <h2>Hello From Kiran Component</h2>
      <p>Message From Parent : {this.props.wishes}</p>
      <h3>Person Details from Parent : </h3>
      <ul>
        <li>{this.props.personDetails.fname}</li>
        <li>this.props.personDetails.lname</li>
 </ul>
 <h4>Subject Details From Parent</h4>
 <ul>
  {this.props.subjectDetails.map ((subject) => {
    return <li>{subject}</li>
  }
  )}
  
 </ul>
    </div>
  )
}
}