Github repo for create-react-app
https://github.com/facebook/create-react-app

cd into project folder
npm start >> start development server, launches in browser
**This takes a long time? Look into


Components are the core building blocks of React apps.

Typical react app could be depcited as a component tree,
having one root component ("App"), and then a potentially
infinite amount of nested child Components

Each component needs to return or render some JSX code.

JSX - not HTML, but looks a lot like it. Allows us to write
HTML-ish code, rather than nested 'React.createElement(...)' calls

State & Props > only two things that lead React to update DOM

When creating a component as a function, we don't have state,
since we're just returning JSX. i.e. Person in example.
Person is not a class-extending component, it's a function

Should use function-form of components as often as possible. Because
functions receiving (props) are very clear about what they do. Only render
something to the DOM, are dynamic because of props, and you can add additional
code prior to calling return(). BUT they don't alter app state. Important
because most parts of App shouldn't change App state.

State should only be changed and handled in a few certain components, aka "Containers"
In example, class App extends Component{} is a container, because it contians part
of our app state.
