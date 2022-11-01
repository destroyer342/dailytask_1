import React,{ Component } from "react";
//const userNames = ['Jesse', 'Tom', 'Anna']
export default class App extends Component{
  state= {
    name:'Rance',
    age:25,
    favoriteColors:['Blue', 'Red', 'Yellow']
  }

 renderListOfUserNames = (names) => {
    return names.map(name => <li>{name}</li>)
  }
  handleClick = () => {
    this.setState({
      name:'Aubry'
    })
  }
  render(){
    return(
    <div>
      <h2>My Favorite Colors:</h2>
      <ul>
        {this.renderListOfUserNames(this.state.favoriteColors)}
      </ul>
      <h2>Hello {this.state.name}</h2>
      <button onClick={this.handleClick}>CLICK ME TO CHANGE NAME</button>
      
    </div>
    )
  }
}