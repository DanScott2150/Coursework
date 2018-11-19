import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    userName: "Dan"
  }

  userNameHandler = (event) => {
    this.setState({userName: event.target.value});
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // Don't do this: this.state.persons[0].name = "Maximilian";
    this.setState({persons: [
      { name: newName, age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 27 }
    ] })
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      { name: 'Max', age: 28 },
      { name: event.target.value, age: 29 },
      { name: 'Stephanie', age: 26 }
    ] })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Exercise:</h1>

        <UserInput
          username={this.state.userName}
          changename={this.userNameHandler}/>
        <UserOutput
          username={this.state.userName} />

      <br/><br/>
        <h1>Hi, I'm a React App</h1>
        <button
        style={style}
        onClick={() => this.switchNameHandler('Maximiliann!!')}>Switch Name</button>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>

      </div>
    );
  }
}

export default App;
