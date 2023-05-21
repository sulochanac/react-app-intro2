import { Component } from "react";

export class January extends Component{
  render () {
    console.log(this.props)
    return <div>
<h1>{this.props.message}</h1>
<h2>Person from Parent Component</h2>
<ul>
  <li>{this.props.person.fname}</li>
  <li>{this.props.person.lname}</li>
</ul>
<ul>
  {this.props.subjects.map((subjects) => {
    return <li>{subjects}</li>
  })}
</ul>
    </div>
  }
}