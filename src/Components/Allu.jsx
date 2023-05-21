import { Component } from "react";

export class Allu extends Component{
  render(){
console.log(this.props)
 return <div>
<h2>Hi from Allu Component</h2>
<p>Message from Parent {this.props.wishes}</p>
<h3>Person details from Parent :</h3>
<ul>
{this.props.personDetails.fname}
 {this.props.personDetails.lname}
      </ul>
      <h2>Movies details from Parent:</h2>
      <ul>
        {this.props.moviesDetails.map((movies)=>{
          return <li>{movies}</li>
        })}
      </ul>
    </div>
  }
}
  