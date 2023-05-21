import { Component } from "react";

export class Apple extends Component{
  render(){
    console.log(this.props)
    return <div>
      <h2>Hello From Apple Component</h2>
      <p>Message from Parent : {this.props.greetings}</p>
      <h3>Person Details from Parent : </h3>
      <ul>
        <li>{this.props.personDetails.fname}</li>
        <li>{this.props.personDetails.lname}</li>
      </ul>
      <h3>Subject Details from Parent :</h3>
      <ul>
        {/* {this.props.subjectDetails.map((subject) => {
          return <li>{subject}</li>; */}

        {/* })} */}
      </ul>
    </div>
  }
}