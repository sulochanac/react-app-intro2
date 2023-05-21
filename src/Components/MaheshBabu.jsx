import { Component } from "react";
import { Babu } from "./Babu";
import { Ram } from "./Ram";
export class MaheshBabu extends Component{
  state = {
    message:"Hello MaheshBabu, How are you!!",
    person:{
      fname:"Mahesh",
      lname:"Babu",
    },
    movies:["Nijam","Aagadu","Athadu","Takkari Donga"]
  };
  render() {
    return ( 
    <div>
 <h2>Hello from MaheshBabu Component</h2>
 <hr />
        {/* <Babu
        gattamaneni={this.state.message}
        personDetails={this.state.person}
        moviesDetails={this.state.movies}
        /> */}
        <Ram {...this.state}/> 

        {/* <h2>Hello From MaheshBabu Component !! </h2>
        <h2>{this.state.message}</h2>
        <ul>
          <li>{this.state.person.fname}</li>
          <li>{this.state.person.lname}</li>
        </ul> */}
        {/* <p>Movies : </p>
        <ul>
          {this.state.movies.map((movies) => {
            return <li>{movies}</li>;
          })}
        </ul> */}
      </div>
    );
  }
}
 
 