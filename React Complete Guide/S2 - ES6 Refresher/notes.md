# ES6 / Next Gen JS Quick Refresher

## let & const to replace var
use let for var that is actually a variable, const for something that's a constant

Trying to change the value of a const will throw an error

## arrow functions

        function myFunc(args){
            //old way
        }

        const myFunc = (args) => {
            //new way
        }

With arrow function, keyword 'this' will keep its context

If only one argument, can omit parens:
    const myFunc = arg => {
        //etc
    }

If function body only returns something, can omit curly braces and write all in one line, AND can omit 'return' keyword

    const multiply = number => number * 2

## Exports & Imports (modules)

Can export single function, or multiple things.

-person.js:
    const person = {name: 'Max' }
    export default person

-utility.js:
    export const clean = () => {...}
    export const baseData = 10;

-app.js:
    import prs from './person.js';
    import { baseData } from './utility.js';
    import { clean } from './utility.js';

Since person is exported as 'default', we can name it whatever we want in the importing file. Anything we import from person.js will import the exported person object.

For utility.js, since we're exporting multiple things, the import function needs to specifiy in curly brackets what we're importing. Other options:
    import { baseData as ExampleName} from './utility.js';
^ Imports baseData, but assigns it a new name alias (ExampleName) to be used in the import file.
    import * as ExampleBundle from './utility.js';
^ Imports everything that's been exported from utility.js, assigns alias name ExampleBundle as an object:
    ExampleBundle.baseData;
    ExampleBundle.clean();

## Classes

Classes used by react to create components. Just blueprints for javascript objects.

    class Human{
        constructor(){
            this.gender = 'male;
        }
        printGender(){
            console.log(this.gender);
        }
    }

    class Person extends Human{
        constructor(){
            super();
            this.name = 'Max';
        }
        printMyName(){
            console.log(this.name);
        }
    }

If one class extends another, have to include super() function within constructor function. This reaches up to parent class and pulls in methods & properties.

## Classes, properties, methods
More modern syntax (ES7) can assign properties by skipping the constructor function call. Methods can use arrow functions

    constructor(){
        this.myProperty = 'value';
    }

    my

    ==

    myProperty = 'value';

## Spread & Rest operator
Three dots. Called Spread or Rest depending on where it's used.
Spread: Used to split up array elements or object properties
    const oldArray = [1,2,3]
    const newArray = [...oldArray, 4,5];
    console.log(newArray);  // [1,2,3,4,5]

    const oldObject = {prop1: "value 1"};
    const newObject = {...oldObject, prop2: "value 2"};

Rest: Used to merge a list of function arguments into an array
    const filterFunc = (...args) => {
        return args.filter(el => el === 1);
    }

    filterFunc(1,2,3,1);    // [1, 1]

^ Converts arguments into an array, can then use array methods like filter() on them. 

## Destructuring
Easily extract array elements or object properties and store them in variables. Different from spread operator in that spread pulls out everything, destructuring lets you pull out single properties or methods.

Array Destructuring:
    const [a, b] = ['Hello', 'Max']
    console.log(a); //Hello
    console.log(b); //Max

Object Destructuring:
    const {name} = {name: 'Max', age: 28}
    console.log(name);  //Max
    console.log(age);   //undefined

For array destructuring, variable assignment based on order. For object destructuring, variable assignment based on property name.

    const numbers = [1,2,3];
    const [num1, num2] = numbers;
    console.log(num1, num2);    //1,2
    const [num1, ,num3] = numbers;
    console.log(num1, num3);    //1,3

## Reference and Primitive Types
Objects by reference, assigning one object to another creates a pointer to same object rather than creating a copy. (familiar with this thru JavaScript Weird Parts course)

Important to keep in mind for React, might be instances where you manipulate one object but then unknowingly affect other objects as well.

Can successfully copy an object via the spread operator.

    const person = {
        name: 'Max'
    }

    const secondPerson = {
        ...person
    };

## Refreshing Array Functions
map, filter, sort, etc.

    map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
    concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
    slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
