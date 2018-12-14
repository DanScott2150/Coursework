import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withClass from '../../../hoc/withClass';
import Auxiliary from '../../../hoc/Auxiliary';

import classes from './Person.css';

import { AuthContext } from '../../../containers/App';

class Person extends Component {

  constructor(props){
    super(props);
    console.log('[person.js] inside constructor', props);
  }

  componentWillMount(){
    console.log('[person.js] inside willMount');
  }

  componentDidMount(){
    console.log('[person.js] inside didMount');
    if(this.props.position === 0){
      this.inputElement.focus();
      }
  }

  render(){
        console.log('[person.js] inside render');
    return (
      <Auxiliary>
        <AuthContext.Consumer>
          {auth => auth ? <p>I'm Authenticated </p> : null}
        </AuthContext.Consumer>
       <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
       <p>{this.props.children}</p>
       <input
          ref={(inp) => { this.inputElement = inp}}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}/>
      </Auxiliary>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
