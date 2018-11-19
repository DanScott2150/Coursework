import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    persons: [
      { id: '1afse', name: 'Max', age: 28 },
      { id: '2gety', name: 'Manu', age: 29 },
      { id: '3outw', name: 'Stephanie', age: 26 }
    ],
    // userName: "Dan",
    showPersons: false
  }
  //
  // userNameHandler = (event) => {
  //   this.setState({userName: event.target.value});
  // }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                      click={() => this.deletePersonHandler(index)}
                      name={person.name}
                      age={person.age}
                      key={person.id}
                      changed={(event) => this.nameChangedHandler(event, person.id)}/>
                    }
                  )
          }
         </div>
      );
    }

    return (
      <div className="App">

        <h1>Hi, I'm a React App</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons Div
        </button>

        {persons}

      </div>
    );
  }
}

export default App;
