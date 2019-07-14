/*
Template literals
${}

*/


/*
Destructuring Objects

- gives us ability to extrat data from arrays & objects, and
into their own variable.

- really handy in React, useful because data is often nested deeply
in props & state
*/

const personalInformation = {
    firstName: 'Dan',
    lastName: 'Scott',
    city: 'Boston',
    state: 'MA',
    zipCode: 02134
};

// old way:
const first = personalInformation.firstName;
const last = personalInformation.lastName;

// ES6 solution:
const { first, last } = personalInformation;

/*
    Also really useful when accessing deeply-nested data from
    a JSON API call:
*/

const danAPI = {
    first: 'Dan',
    last: 'Scott',
    links: {
        social: {
            twitter: 'https://twitter.com/dan',
            facebook: 'https://facebook.com/dan',
        }
    }
}

// to access twitter & facebook, old way:
const twitter = danAPI.links.social.twitter;
const facebook = danAPI.links.social.facebook;

// ES6:
const { twitter, facebook } = danAPI.links.social;

/* 
    If we destructure a value that doesn't exist, the variable is
    still created, but undefined
*/

const settings = {
    speed: 150
}

const { speed, width } = settings;
console.log(width); // undefined

/*
    We can set defaults, or fallback values, instead:
    Note that default values only happen if the value is undefined.
    NOT if it's null, false, or 0.
*/

const settings = {
    speed: 150,
    height: null,
    zoom: 0
}

const { speed = 750, width = 500, height = 100, zoom = 7 } = settings;
console.log(speed); // 150 => comes from settings object
console.log(width); // 500 => comes from fallback value
console.log(height); // null => fallback value not triggered
console.log(zoom); // 0 => fallback value not triggered

/*
    Renaming values: sometimes you don't want to use a property name 
    as your variable name, or maybe that name is already taken in the scope
*/

const twitter = 'twitter.com';
const danAPI = {
    first: 'Dan',
    last: 'Scott',
    links: {
        social: {
            twitter: 'https://twitter.com/dan',
            facebook: 'https://facebook.com/dan',
        }
    }
}

// Doesn't work, since const 'twitter' already declared
const { twitter, facebook } = danAPI.links.social; 

//instead, can rename:
const { twitter: tw, facebook: fb } = danAPI.links.social;

/*
    Rename AND set default values:
*/

const person = {
    first: 'Dan', 
    last: 'Scott'
}

const { first, middle: middleName = 'SuperCool', last } = person;
console.log(first, middleName, last); //Dan SuperCool Scott

/* Destructuring arrays
    Goes index-by-index
*/

let names = [ 'Dan', 'SuperCool', 'Scott'];
let [ firstName, middleName, lastName ] = names;
console.log(firstName, middleName, lastName); //DanSuperCoolScott

// ///////////////////////////////////
// Object Literal Syntax 

/* 
    Object literals: can create object just by curly braces with key:value pairs
    ES6 makes declaring these even easier:
        1) shorthand for initializing properties:
*/

//ES5:
function getCarInfo(make, model, year){
    return{
        make: make,
        model: model,
        year: year
    }
}
getCarInfo('Jeep', 'Cherokee', 2000); // {make: 'Jeep', model: 'Cherokee', year: 2000}

//ES6: remove repetition
function getCarInfo(make, model, year){
    return{
        make,
        model,
        year
    }
}

/*
    Within curly braces, checks if property key has corresponding variable with
    same name.
    If there's a non-matching name, will throw error
*/

/* Shorthand for writing methods: */

//ES5:
function getCarInfo(make, model, year){
    return{
        sayModel : function(){
            return model;
        }
    }
}
getCarInfo("Jeep", "Cherokee", 2000).sayModel();    //"Cherokee"

//ES6:
function getCarInfo(make, model, year) {
    return {
        sayModel() {
            return model;
        }
    }
}

let task = {
    name: 'async task',
    start() { console.log("running " + this.name)}
}
task.start() //"running async task"

/* 
Computed properties and object literals: 
    - when accessing an object property, bracket notation lets us evaluate
    expressions
*/

const name = 'make';
const car = {
    [name]: "Jeep"
}
console.log(car.make); //"Jeep"

// Another example:
const name = "make";
let i = 0;
const car = {
    [name + ++i]: "Jeep",
    [name + ++i]: "Toyota",
    [name + ++i]: "Honda",
}

console.log(car.make1); // Jeep
console.log(car.make2); // Toyota
console.log(car.make3); // Honda