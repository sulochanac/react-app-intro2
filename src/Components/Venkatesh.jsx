import { Component } from "react";
import { Daggubati } from "./Daggubati";
import { Ram } from "./Ram";

export class Venkatesh extends Component{
  state = {
    message: "Hello Venkatesh, Where are you!!",
person:{
  fname:"Venkatesh",
  lname:"Daggubati",
},
movies:["Vasantham","Dhrushyam","NNN","F3"]
  }
    render (){
    return <div>
       <h2>Hello from Venkatesh Component</h2>
 <hr />
        {/* <Daggubati 
        daggu={this.state.message}
        personDetails={this.state.person}
        moviesDetails={this.state.movies}
        /> */}
        <Ram {...this.state}/> 
      {/* <h2>{this.state.message}</h2>
        <ul>
          <li>{this.state.person.fname}</li>
          <li>{this.state.person.lname}</li>
        </ul> */}
             {/* <p>movies :</p>
      <ul>
        {this.state.movies.map((movies)=>{
          return <li>{movies}</li>
        })}
      </ul> */}
    </div>
  }
    }
  
  
