import React, { Component } from "react";

export default class App extends Component {
  state = {
    name: "Rance",
    age: 21,
    favoriteColors: [
      {
        name: "Blue",
        colorhex:"#0000FF"
      },
      { 
        name: "Red" ,
        colorhex:"#FF0000"
      },
      { 
        name: "Yellow" ,
        colorhex:"#FFFF00"
      }
    ],
  };

  renderListOfColors = (colors) => {
    return colors.map((color) => <li>{color.name}</li>);
  };
  handleClick = () => {
    this.setState({
      name: "Aubry",
    });
  };
  render() {
    return (
      <div>
        <h2>My Favorite Colors:</h2>
        <ul>{this.renderListOfColors(this.state.favoriteColors)}</ul>
        <h2>Hello {this.state.name}</h2>
        <button onClick={this.handleClick}>CLICK ME TO CHANGE NAME</button>
      </div>
    );
  }
}
