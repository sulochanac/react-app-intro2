import { Component } from "react";
import { Apple } from "./Apple";
import { Raghu } from "./Raghu";

export class One extends Component {
  state = {
    // how to display message
    message: "Hello One, How are you",
    // how to display Object
    person:{
     fname:"Rama",
     lname:"Krishna",
    },
    // how to display Array
    subjects: ["HTML","CSS","Java","React"]
      };
      
  render() {
    return <div>
      <h2>Hello from One Component</h2>
      <hr />
      {/* <Apple
      greetings={this.state.message}
      personDetails={this.state.person}
      subjecrDetails={this.state.subjects}
      /> */}

      <Raghu {...this.state}
      />
      {/* <h2>{this.state.message}</h2>
      <ul>
        <li>{this.state.person.fname}</li>
        <li>{this.state.person.lname}</li>
      </ul>
     <p>Subjects : </p> 
     <ul>
      {this.state.subjects.map ((subjects) =>{
        return <li>{subjects}</li>
      })}
     </ul> */}
    </div>
  }
}