
## Class-based vs. Functional Components
With new React version, not as much of a difference between the two as there used to be. BUT, most existing React projects will be built with the old code.

  - Class based:
      - class XY extends Component
      - Access to state
      - Lifecycle hooks
      - Access state & props via 'this' (this.state.XY / this.props.XY)

  - functional:
      - const XY = (props) => {...}
      - In the past, they could not manage state. Now they can via React Hooks by useState()
      - No lifecycle hooks
      - Access props via 'props' (props.XY)

When working with state or need lifecycle hooks, use class-based, and/if you don't want to use react hooks.

Use functional for all presentational components, that only receive input.

## Component Lifecycle
Only available in class-based components
IMPORTANT: confusing naming, but "Lifecycle Hooks" have absolutely nothing to do with new "React Hooks"

  -  Creation
      - constructor(props) - ES6 class feature. 
      - getDerivedStateFromProps(props, state) - rare, niche cases
      - render() - prepare & structure JSX code
        - render child components
      - componentDidMount() - will get used a lot. Here's where you do 'side effects' like HTTP requests. Shouldn't update state here since it triggers a re-render

## creation lifecycle 
constructor()
  When calling constructor(props), need to also call super(props). 
  constructor(props){
    super(props);
    etc...
  }

getDerivedStateFromProps
- static method, have to include 'static' before method call.
- return state

Can intiialize state within constructor.

Historically, other lifecycle hooks existed. These are still supported and sometimes used, BUT they will be removed in the future. They were rarely used, often incorrectly. > componentWillMount()

## update lifecycle for prop changes
  - getDerivedStateFromProps(props, state) - wont be used often. Can be used to initialize state of a component that updates based on updated props. i.e. some form control that gets external props. BUT, if you need to do this, there's *usually* a better way.

  - shouldComponentUpdate(nextProps, nextState) - May cancel the updating/rerendering process. Can be used to optimize performance, BUT can break your components if you incorrectly block them from updating. Needs to return true (if component should continue updating) or return false (if not). Can't do nothing.

  - render()
    - Update child component props; all child components go through same lifecycle

  - getSnapshotBeforeUpdate(prevProps, prevState) - wont be used often. Used for last-minute DOM operations, not changes but things like getting current scroll position of the user.

  - componentDidUpdate() - signals render has executed, update is done. This is where to do side-effects like HTTP requests. But don't update state here, which would trigger a re-render. This hook will probably be the most-used here.

## useEffect() in functional components
In old React, could only manage state via class-based components. New React hooks let you do this in functional components too.

Need to import along with react: import react, { useEffect } from 'react';

Second-most important React hook you can use, aside from useState. 

Combines functionalitiies of class-based lifecycles.

Pass function into useEffect(), will execute for every render cycle. Can send HTTP requests.
Can be tricky to manage if you don't want it to run for everything. Can add second argument to function that specifies when useEffect() will run. ie:
      const cockpit = props => {
        useEffect(() => {
          //simulate HTTP request
          setTimeout(() => {
            alert('Data saved to cloud');
          }, 1000);
        }, [props.persons]);
      }

    ^ Will only execute this useEffect() if props.persons has changed. Can then add mulitple useEffect() functions if you have different functions based on different scenarios.

  To only fire useEffect() when component first renders, can simply pass empty array [].

## Cleaning up lifecycle hooks
When component is removed, can perform "cleanup" like closing HTTP connections.
  - componentWillUnmount()

If using Hooks, can use useEffect() for cleanup work. Can return a function that runs

In Chrome dev tools, can enable 'rendering' paint flashing, to highlight what exactly re-renders

Optimizing class-based components > shouldComponentUpdate() to check if update needed and return true or false if
Optimizing functional components with React.memo()
  - React will store a snapshot of component, only re-render if input changes.
  export default React.memo(Cockpit);

Shouldn't optimize every component. You'll have components that will always update when their parent updates. In those cases, optimizing functions will still work, but unnecessary code, slows performance down.

- PureComponents instead of shouldComponentUpdate
class xyz exends PureComponent{}
Normal component that implements shouldComponentUpdate with complete props check, checks for any changes in any props.

## How React Updates the DOM 
render() is called, but does not actually update the DOM.
Compares "virtual DOMs" => faster than the real DOM.
  - Compares old virtual DOM to re-rendered virtual DOM
  - If differences, then React reaches out to real DOM and renders updates on only the changed parts, rather than the whole thing.

##Rendering adjacent JSX elements
IN s3 example, we return multiple <Person> components, because we return it as an array: this.props.persons.map(...).

React lets us return an array of adjacent elements as long as all elements have a unique 'key' attribute.
  <Person key={person.id} />

This means we can return adjacent elements by wrapping in square brackets
      class Person extends Component{
        render(){
          return [
            <p key="1">paragraph 1</p>,
            <p key="2">paragraph 2</p>
            <input key="3" type="text" />
          ]
        }
      }

Can also create a wrapping component > Higher Order Component
Empty component that just acts as a wrapper
    const aux = props => props.children;
    export default aux;

    ../:
    <Aux>
      <div></div>
      <div></div>
      <div></div>
    </Aux>

## React.Fragment

New built-in 'Aux' higher order component. 
<React.Fragment>

Can also:
  import React, {Component, Fragment} from 'react';

  <Fragment>
    <div></div>
    <div></div>
  </Fragment>
  
Performs exactly the same as the above <Aux> component.

## Higher Order Components
Common convention to name hoc files with 'With-' prefix. 'WithClass.js'

Similar to <Aux> example, used to wrap other components.

Will be used later in course for error handling & managing HTTP requests.

Can also do this via JS function (re-visit this part)

## Passing unknown props
-- re-visit this later


## Setting State Correctly
Update via setState();



----------------------------


Stateless vs. Stateful components. Should aim to use stateless components as much as possible, keeps app manageable
Use class based components as little as possible.

Stateful (containers)
  - 'class XY extends Component'
  - Access to state
  - Lifecycle hooks (will learn about later)
  - Access state & props via 'this'. this.state.XY, this.props.XY
  - Use only if you need to manage state or access Lifecycle hooks

Stateless (functional components)
  - 'const XY = (props) => {...}'
  - Access props via 'props' argument. props.XY
  - Use in most cases

Component Lifecycle - only available for stateful components

Creation lifecycle:
  - constructor(props) - default ES6 class feature
    - call super(props), set up state

  - componentWillMount()
    - Exists for historical reasons. Not really used anymore

  - render()
    - Prepare & structure JSX code

  - Render Child Components
  - componentDidMount()
    - Don't update state (triggers re-render)
    - Perform 'side effects' here

Update lifecycle [Triggered by Parent]:
  - componentWillReceiveProps(nextProps)
    - Sync state to props. Don't use side effects

  - shouldComponentUpdate(nextProps, nextState)
    - May cancel updating process.
    - Decide whether to continue updating or not. Needs to return true or false
      - if true, then continue to next lifecycle methods:

  - componentWillUpdate(nextProps, nextState)
    - sync state to props

  - render()
    - Prepare and structure JSX code

  - Update child component props
    -may trigger updates for childcomponents

  - componentDidUpdate()
    - Can call side-effects here.
    - Don't update state here, will trigger re-render

Update lifecycle [triggered by state change]:
Basically same, except componentWillReceiveProps() is skipped

  - shouldComponentUpdate(nextProps, nextState)
  - componentWillUpdate()
  - render()
  - Update Child Component Props
  - componentDidUpdate()

Can use shouldComponentUpdate() to check if anything actually changed, prevent
all components from re-rendering for no reason. *OR*, better method:

PureComponent : React component that has built-in check in shouldComponentUpdate() method.
Compares previous props & state with new props & state. If different, shouldComponentUpdate()
auto evaluates to true, otherwise false.

Shouldn't use PureComponents everywhere, only if you know that updates might not be required


render() does not update the DOM.
Compares "virtual" DOMs.
Virtual DOM faster than real DOM.
If differences in old & new VDOMs, then "real" DOM is updated
Accessing DOM is slow, React speeds up by only accessing if needed

Returning Adjacent Elements:
By default, can't render() elements next to each other, have
to be within a 'wrapper'.
Can get around this in React16+ by creating a higher-order-component.
In 'persons' example, 'hoc/auxiliary.js' file. This creates an empty
wrapper, so then Cockpit section doesn't need wrapping div.

This can be useful when you either don't need extra wrapping elements (bloat code),
or when adding extra divs/etc can ruin your styling (like when using flexbox).

Note, can't name file/folder 'aux' since that's a special keyword or something for Windows.

Fragment-
In React 16.2, can use built-in 'Aux' component, called a Fragment.
Instead of wrapping render() code in <Aux>, can just use empty tag <>.
Works behind the scenes same way as manually-code 'hoc/auxiliary.js' file in example.

Higher-order Components,
Can create HOC as a component, i.e. <Aux></Aux> tag
or, can create as a basic JS function, and then wrap individual component exports in function
For this, have to pass props into component via ES6 spread operator

Using 'setState()', should never mutate state directly.
Should pass in function that has prevState as an argument
  i.e. instead of:
  togglePersonsHandler = () => {
    this.setState({
        toggleClicked: prevState.toggleClicked + 1
      });
    }

  instead use a function that returns new state:
  togglePersonsHandler = () => {
    this.setState( (prevState, props) => {
      return {
        toggleClicked: prevState.toggleClicked + 1
      }
    });

First case will work, but second case is best practice. Useful incase state gets altered elsewhere too

Validating Props:
npm install prop-types
Built by react team, just split out into separate library
Especially useful when working with other dev's

--The Context API
For global state items, like login status or user's color theme
Rather than passing down through components, can use new Context API

const AuthContext = React.createContext();
-->creates component you can use in JSX:
<AuthContext.Provider value={this.state.authenticated}>
  {persons}
</Authcontext.Provider>

Provider subcomponent, passes authenticated state to all {persons} components

In Person component, can then access via <AuthContext.Consumer> component.
Don't have to pass through entire 'App -> Persons -> Person' chain
Good to use for GLOBAL settings.

-- React 13+ discourages use of three component lifecycle hooks:
    - componentWillMount()
    - componentWillUpdate()
    - componentWillReceiveProps()
    Discouraged because they were often used incorrectly. Not that useful anyways.

    Two new hooks:
    - getDerivedStateFromProps(nextProps, prevState)
        - Whenever props are updated, lets you update state along with it.
          Usually not needed, state and props should be separate things.

-- React 16.6, React.memo() method
