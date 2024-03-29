import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Auxiliary from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends PureComponent {
  constructor(props){
    super(props);
    console.log('[App.js] inside constructor', props);
    this.state = {
      persons: [
        { id: '1afse', name: 'Max', age: 28 },
        { id: '2gety', name: 'Manu', age: 29 },
        { id: '3outw', name: 'Stephanie', age: 26 }
      ],
      // userName: "Dan",
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    };
  }

  componentWillMount(){
    console.log('[App.js] inside willMount');
  }

  componentDidMount(){
    console.log('[App.js] inside didMount');
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE App.js] inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //         nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] inside componentWillUpdate', nextProps, nextState);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log('[UPDATE App.js inside getDerivedStateFromProps]',
                  nextProps,
                  prevState
                );
    return prevState;
  }

  componentDidUpdate(){
    console.log('[UPDATE App.js] inside componentDidUpdate');
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
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }

    });
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] inside render()');

    let persons = null;

    if (this.state.showPersons){
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />;
    }



    return (
      <Auxiliary>
          <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
            <Cockpit
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              login={this.loginHandler}
              clicked={this.togglePersonsHandler}
            />
            <AuthContext.Provider value={this.state.authenticated}>
              {persons}
            </AuthContext.Provider>

        </Auxiliary>

    );
  }
}

export default withClass(App, classes.App);
