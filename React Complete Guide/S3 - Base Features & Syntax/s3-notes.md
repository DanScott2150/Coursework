Github repo for create-react-app
https://github.com/facebook/create-react-app

cd into project folder
npm start >> start development server, launches in browser

Components are the core building blocks of React apps.

Typical react app could be depcited as a component tree,
having one root component ("App"), and then a potentially
infinite amount of nested child Components

Each component needs to return or render some JSX code.

## JSX 
JSX - not HTML, but looks a lot like it. Allows us to write
HTML-ish code, rather than nested 'React.createElement(...)' calls

    render(){
        return ()
            <div className="App">
                <h1>Hi I'm a React App</h1>
            </div>
        )
    }
    ----vs: -----
    return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi I/'m a React App'))

JSX Restrictions:
    - Class: have to use 'className' instead (class reserved JS keyword)
    - JSX return has to have one root element, can't return adjacent elements. (Not always true anymore in React 16, but still typically considered best practice: one root element per component)

## Components:
Core building block of react. At it's base, a Component is just a function that returns some JSX. Typical react app could be thought of as a component tree, having one root component ("App") and then nested child components.

Typically best practice to capitalize component names, for both folders & files. i.e. Person vs person. When using component, need to give it a capitalized name so that JSX recognizes it as a componenet and not as an HTML tag. i.e. you could technically create a component named <Div> that would work, whereas <div> would clash because its and HTML tag.

Two ways to create components: Functional, and class-based.
    - Functional Components: "dumb" or "stateless" components.
    - Class-based Components: "containers" or "stateful" components.
Best practice to use use functional/dumb as often as possible. Will cover more later in the course.

## Props
Attributes passed into component accessed via 'props'.
<Person name="max"> //props: {name: max}
Accessed in component via 'props.name' (for functional components) or by 'this.props.name' for class-based components.

## Props: Children
Any elements within opening/closing component tag. Can be nested HTML or other React components.
<Person name="max">Hobbies: Stuff</Person>
Accessed in component via {props.children}

## State
Can be used in class-based components. i.e. 'class XYZ extends Component {}'

Whereas props are set & passed from outside, state is managed from inside a component. State can be set as a property within a component, separate from the render() method. Since state is used within class-based components, properties can then be accessed via 'this.state.[xyz]'

State can be changed and if it changes, it will have React re-render the DOM.

(In React 16.8, there is new support for state in functional components, will be covered later)

State should be used with care, lots of state makes App more unpredictable and unmanageable as it grows.

## Props & State
CORE concepts of react. Changes to props and/or state are the only things that trigger React to re-render components & DOM.

- Props: Allow you to pass data from a parent component to a child component. i.e:
        const allPosts = () => {
            return(
                <div>
                    <Post title="My first post" />
                </div>
            );
        }

    Here, 'title' is a custom prop attached to the Post component.

        const singlePost = (props) => {
            return(
                <div>
                    <h1>{props.title}</h1>
                </div>
            );
        }

    Here, <Post> component receives the props argument. Could technically name this argument anything you want, but React only passes one argument, which is an object that contains all attributes added to <Post ... /> component.

- State: While props allow you to pass data up/down component tree, state is used to change the component state from within.

        class NewPost extends Component{
            state = {
                counter: 1
            };

            render(){
                return(
                    <div>{this.state.counter}</div>
                );
            }
        }

    Here, NewPost component contains state. HAS TO BE CALLED 'state', reserved keyword. Anytime state changes, component will be re-rendered to reflect the new state.

## Handling Events with Methods
In JSX, 'onClick' needs capitalized C (differs from normal onclick JS)

Best practice: use "-Handler" suffix on methods assigned as an event handler. i.e. buttonClickHandler()

List of react-supported events: https://reactjs.org/docs/events.html#supported-events

State & Props > only two things that lead React to update DOM

## Manipulating State
Don't mutate state directly. Use this.setState() instead
    this.state.name = "Dan";    //bad
    this.setState({name: 'Dan'})

setState() built-in method on Component. Will only update parts of state that are affected, won't overwrite.

## useState() Hook for State Manipulation
Can now also manage state in functional components via React Hooks. 
New in React 16.8. Note that course project will not use this.

Future section will go into more.

## Stateless vs Stateful components
Good practice to create as many stateless components as possible. Easier to maintain/manage, clear flow of data.

## Passing Method References between components
Can pass methods as props, so that you can call a method (which could change state) in a component that does not have direct access to state.
To pass dynamic data into method, need to add .bind() method onto function call.

## Two-way binding

## Styling
Can create .css stylesheet, need to import into .js file. Normally it wouldn't work to import .css into .js, but webpack handles that in the build process.

Can also style via inline-styles. Create variable object with CSS, then add 'style' attribute to Component. i.e:
    const style = {
        backgroundColor: 'black',
        border: '1px solid white'
    }
    <button style={style}>

One restriction, hard to use CSS pseudoclasses like :hover. There are ways to work-around which will be covered later.

Inline styles are beneficial in that styles are scoped to the local elements within the same file. External .css files are global styles, which could cause problems.

## Resources & Links
Useful Resources & Links
Section 3, Lecture 48

create-react-app: https://github.com/facebookincubator/create-react-app
Introducing JSX: https://reactjs.org/docs/introducing-jsx.html
Rendering Elements: https://reactjs.org/docs/rendering-elements.html
Components & Props: https://reactjs.org/docs/components-and-props.html
Listenable Events: https://reactjs.org/docs/events.html
