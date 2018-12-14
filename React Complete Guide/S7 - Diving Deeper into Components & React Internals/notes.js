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
