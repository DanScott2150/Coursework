## Planning a React App
    1 ) Map out component tree/component structure. Have an idea of what should have its own component.
    2) Application state/data
    3) Components vs. containers. Which components should be stateless vs stateful?

For burger app:
Component Tree:
- App
    - Layout
        - Toolbar
            - Drawer Toggle
            - Logo
            - Navigation Items
        - Side Drawer
            - Logo
            - Navigation Items
        - Backdrop
        - [props.children]
            - Different Pages
                - Burger Builder Page
                    - Build Controls
                        - Build Control [...multiple]
                        - Order Button
                    - Burger Preview
                        - Ingredient [...multiple]
                    - Checkout Modal
                        - {props.children}

State:
    - Ingredients
        {meat: 1, cheese: 3, etc}
    - Purchased: true/false
    - Total Price: $xx.xx
Good idea to manage state within Burger Builder Component, rather than overall App component. Makes App more flexible/scalable if we want to add extra features or functionality later on.
    - Burger Builder should be stateful component. All others can be stateless.


When rendering JSX, can return null. Just means that nothing gets rendered.

props.show ? <div>content</div> : null

^ if props.show is true, render div, otherwise do nothing.