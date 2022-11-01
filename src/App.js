import React,{ Component } from "react";
//const userNames = ['Jesse', 'Tom', 'Anna']
export default class App extends Component{
  state= {
    name:'rance',
    age:25,
    favoriteColors:['Blue', 'Red', 'Yellow']
  }

 renderListOfUserNames = (names) => {
    return names.map(name => <li>{name}</li>)
  }
  handleClick = () => {
    this.setState({
      name:'aubry'
    })
  }
  render(){
    return(
    <div>
      <h2>Hello {this.state.name}</h2>
      <button onClick={this.handleClick}>CLICK ME TO CHANGE</button>
      <ul>
        {this.renderListOfUserNames(this.state.favoriteColors)}
      </ul>
    </div>
    )
  }
}