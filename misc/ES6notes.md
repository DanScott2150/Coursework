

### Destructuring
Makes it easy to extract data from arrays or objects into their own variables. Shorthand to make life simpler. Really useful in React (data often deeply nested in state or props) or when dealing with JSON that has multiple levels to it.

When destructuring, can rename variable names. Can be necessary if a given property name is already used as a variable name elsewhere in the scope.

Can also set 'default' or 'fallback' values. If a given property doesn't exist on the object being destructured, you can initialize it to a certain value.

Project use-cases:
    - PolicyBytes: React SPA, check if props/state could benefit from destructuring 
    - Updater: Check OpenStates API calls
    - Fishing dashboard: API calls?

### Object Literal Notation
Shorthand for creating objects, if object's name/value pairs are named the same. Also shorthand for assigning methods to objects, don't need to explicity write 'keyName: function(){...};, instead just 'keyName(){...}

Computed properties: can use bracket notation to evaluate expressions for an object's property names. 

