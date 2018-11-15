Adv JS - S4-37

Objects, Functions, and 'this'



S4-38: Arrays

Arrays can hold everything, doesn't have to be just one data type.

var arr = [
  1,
  false,
  {
    name: 'Dan',
    address: '123 Main St'
  },
  function(name){
    var greeting = "Hello ";
    console.log(greeting + name);
  },
  "Hello"
];

console.log(arr); //[1,false,Object,function,"Hello"]
arr[3](arr[2].name);  //Hello Dan
^invoke function from array, pass in data from object in array.
