import { Component } from "react";
import { Allu } from "./Allu";
import { Ram } from "./Ram";

export class Arjun extends Component {
  state = {
    message: "Hello Arjun .. How Are you ",
    person: {
      fname: "Allu",
      lname: "Arjun",
    },
    movies: ["Bunny", "Desamuddur", "Pushpa", "Pushpa-2"],
  };
  render() {
    return ( 
    <div>
 <h2>Hello from Arjun Component</h2>
 <hr />
        {/* <Allu 
        wishes={this.state.message}
        personDetails={this.state.person}
        moviesDetails={this.state.movies}
        /> */}
        <Ram {...this.state}/> 
        {/* <h2>Hello From Arjun Component !! </h2>
        <h2>{this.state.message}</h2>
        <ul>
          <li>{this.state.person.fname}</li>
          <li>{this.state.person.lname}</li>
        </ul>
        <p>movies : </p>
        <ul>
          {this.state.movies.map((movies) => {
            return <li>{movies}</li>;
          })}
        </ul> */}
      </div>
    );
  }
}