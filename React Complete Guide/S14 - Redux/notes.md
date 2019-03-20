

In Burger Builder project: what is state?
    - Ingredients added to burger
    - Is User Authenticated?
    - Is Modal open? (UI-related state)
    - List of blog posts (not in project, just example)

Why do we need an extra library to manage state?
State can be complex. Managing state can be difficult as app grows/scales. Tough if we need certain state info in vastly different areas of app. Can result in large chain of props to link components together just to pass state.

Redux gives us a 'central store' to manage all state. Components don't directly update central store. Component dispatches an 'action', possibly with payload.

Component -> Action -> Reducer -> Updates Central Store

Updated Central Store -> Triggers (Automatic) Subscription -> Passes updated state/props to Component

Action- contains pre-defined information package
Reducer - Receive's action and updates state. Synchronous functions only, no HTTP requests.