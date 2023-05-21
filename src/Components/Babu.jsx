import { Component } from "react";

export class Babu extends Component{
  render(){
    return <div>
      <h2>Hi Babu..Waht are you doing !!</h2>
      <p>Message from Parent{this.props.gattamaneni} </p>
    <h3>Person details from Parent :</h3>
    <ul>
    {this.props.personDetails.fname}
    {this.props.personDetails.lname}
    </ul>
    <h4>Movies Details from Parent:</h4>
    <ul>
      {/* {this.props.movies.map ((movies)=>{
        return <li>{movies}</li> */}
      {/* })} */}
    </ul>
    </div>
  }
}