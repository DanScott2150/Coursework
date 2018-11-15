10.25

Covered array.forEach(), array.Map(), array.Filter(), array.Some(), array.Every()
-- All methods take a callback function with (value, index, array) parameters. Parameters are optional but
must be included in that order if they are. Usually only need value, sometimes index

ForEach(function(v, i, a)) - performs callback function on each value in array. Always returns undefined
Map(function(v, i, a)) - returns a copy of an array
Filter(function(v, i, a)) - returns a copy of an array where values meet certain condition
Some(function(v, i, a)) - returns true if any of the values in the array meet a condition
Every(function(v, i, a)) - returns true only if ALL of the values in the array meet a condition.

Examples:
========= forEach() ===========
  var testNumbers = [1,2,3,4];

  //Create new array where each test number is doubled
  function doubleValues(arr){
    var newNumbers = [];
    arr.forEach(function(value, index, array){
      newNumbers.push(value * 2);
    });
    return newNumbers;  //need to explicitly return something, since forEach does not
  }

  //Create new array where only even numbers are included
  function onlyEvenValues(arr){
    var onlyEvens = [];
    arr.forEach(function(val){
      if(val % 2 === 0){
        onlyEvens.push(value);
      }
    });
    return onlyEvens;
  }

========== map() ==========
  var testNumbers = [1,2,3,4];
  var testPeople = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

  //Create new array where each test number is doubled
  function doubleValues(arr){
    return arr.Map(function(value, index, array){
      return value * 2;
    })
  }

  //Create an array of all names
  function namesArray(arr, key){
    return arr.Map(function(val){
      return val[key];    //Need to use bracket notation so JS evaluates variable 'key', rather than looking for an actual property named 'key'
    });
  }
  namesArray(testPeople, 'name');


========== filter() ==========
var peopleData = [
                  {first: 'Elie', last:"Schoppik"},
                  {first: 'Tim', last:"Garcia", isCatOwner: true},
                  {first: 'Matt', last:"Lane"},
                  {first: 'Colt', last:"Steele", isCatOwner: true}
                 ]; // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]

//return new array containing only cat owners
function returnCatOwners(arr, key){
  return arr.Filter(function(value, index, arr){ //need to 'return' new array for returnCatOwners() function
    return value[key] !== undefined;    //if value has key (i.e. not undefined) then return it to new array
  });
}

//Remove all vowels from a string
var testName1 = "Elie", //should print: "l"
    testName2 = "Tim",  //should print: "tm"
    testName3 = "ZZZZZZ"  //should print "zzzzzz"

function removeVowels(str){
  var vowels = "aeiou";
  return str.toLowerCase().split("").filter(function(val){  //Split string into array, each letter its own value, then call filter
    return vowels.indexOf(val) === -1;  //For each value (aka letter in string), compare against 'vowels' string. IndexOf returns -1 if letter isn't found
  })
}

========== some() and every() ==========
var testNumbers1 = [1,2,2,2,2,3,4],
    testNumbers2 = [2,2,2,4,6],
    testNumbers3 = [1,2,3,4,5,6,7];

//Find if array contains at least one odd numbers
function hasOdd(arr){
  return arr.some(function(val){
    return val % 2 !== 0;
  }
}

//Find if array has ONLY even numbers
function allEven(arr){
  return arr.every(function(val){
    return val % 2 === 0;
  })
}

//Check if array has any duplciate values
function noDuplicates(arr){
  return arr.every(function(val){
    return arr.indexOf(val) === arr.lastIndexOf(val);
    //indexOf() finds first matching instance
    //lastIndexOf() finds last matching instance
    //If these two are the same, then the value only appears once in the array
  })
}

-------------------------
arr.Reduce - Take array and turn it into another data structure

array.reduce(function(accumulator, nextValue, index, array), optional second parameter)
--if no second parameter passed: accumulator starts as first value in array, nextValue as second value
--reduce() iterates over each value, accumulator becomes output of each iteration

var arr = [1,2,3,4,5];
arr.reduce(function(accumulator, nextValue){
  return accumulator + nextValue;
});
-- first iteration: a:1, nv: 2, returns 1 + 2 = 3
-- second iteration: a:3, nv: 3, returns 3 + 3 = 6
-- third iteration: a:6, nv: 4, returns 6 + 4 = 10
-- etc.

-- If second parameter passed, then that becomes the starting accumulator value.
-- .. in above example, if '10' passed as second parameter, then first iteration would be a:10, nv:1, returns 10 + 1 = 11


var names = ["Tim", "Matt", "Colt", "Elie"];
names.reduce(function(accumulator, nextValue){
  return accumulator += ' ' + nextValue;
}, 'The instructors for this course are: ')
//The instructors for this course are: Tim Matt Colt Elie

var array = [5, 4, 1, 4, 5];

//Build an object where each number is a key, and the
//count of it is the value. ie {1:1, 4:2, 5:2}
array.reduce(function(accumulator, nextValue){
  if(nextValue in accumulator){ //check if key exists in object via if(key in object)
    accumulator[nextValue]++;
  } else {
    accumulator[nextValue] = 1;
  }
  return accumulator; //return object for next iteration
  }
}, {}); //Pass empty object to second param, to convert array into object

var namesObject = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
function extractValue(arr, key){
    return arr.reduce(function(accumulator, nextValue){
      accumulator.push(nextValue[key]);
      return accumulator
    }, [])
}
var namesArray = extractValue(namesObject, 'name');

//use reduce to count number of vowels in string
function vowelCount(str){
  var vowels = 'aeiou';
  return str.split('').reduce(function(acc, next){  //split string into array of letters
    if(vowels.indexOf(next.toLowerCase()) !== -1){  //if letter matches anything in 'vowels' var
      if(next in acc){  //if key already exits in object
        acc[next]++
      } else {
        acc[next] = 1;
      }
    }
    return acc;
  }, {})
}


var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

function addKeyandValue(array, key, value){
    return array.reduce(function(acc, next){
      next[key] = value;
      return acc;
    }, arr);
}

addKeyandValue(arr, 'Title', 'Instructor');
