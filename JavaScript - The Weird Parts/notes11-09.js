==== Advanced JavaScript // 11.9
By value vs By reference

*by value* setting one value equal to another by creating a copy
Set var a = primitive value --> sets memory chunk pointing at value
var b = a --> sets *new* memory chunk pointing at *new* value

But:

*by reference*
set var a = object --> sets memory equal to object
var b = a --> new var b doesn't get new memory address, points to same object

All objects interact by reference.

//by value
var a = 3;
var b;

b = a;
a = 2;
console.log(a, b);  //2, 3

//by reference (all objects, including functions)
var c = { greeting: 'hi' };
var d;

d = c;
c.greeting = 'hello';

console.log(c);   //{greeting 'hello'}
console.log(d);   //{greeting: 'hello'}
