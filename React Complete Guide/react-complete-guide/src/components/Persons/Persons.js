import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{
  constructor(props){
    super(props);
    console.log('[Persons.js] inside constructor', props);
  }

  componentWillMount(){
    console.log('[Persons.js] inside willMount');
  }

  componentDidMount(){
    console.log('[Persons.js] inside didMount');
  }

  componentWillReceiveProps(nextProps){
    console.log('[UPDATE Persons.js] inside componentWillReceiveProps', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE Persons.js] inside shouldComponentUpdate', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons ||
  //           nextProps.changed !== this.props.changed ||
  //           nextProps.clicked !== this.props.clicked;
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE Persons.js] inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE Persons.js] inside componentDidUpdate');
  }

  render(){
    console.log('[Persons.js] inside render');
    return this.props.persons.map((person, index) => {
      return <Person
                key={person.id}
                click={() => this.props.clicked(index)}
                name={person.name}
                position={index}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}/>
    });
  }
}

export default Persons;
