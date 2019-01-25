const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var result = utils.add(33, 11);
      expect(result).toBe(44).toBeA('number');
      // if(result !== 44){
      //   throw new Error(`Expected 44, but got ${result}`);
      // }
    });
    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      })
    });
  })


  it('should square a number', () => {
    var square = utils.square(9);
    expect(square).toBe(81).toBeA('number');
    // if(square !== 81){
    //   throw new Error(`Expected 81, but got ${square}`);
    // }
  })



  it('should async square a number', (done) => {
    utils.asyncSquare(12, (square) => {
      expect(square).toBe(144).toBeA('number');
      done();
    })
  })

});



// it('should expect some values', () => {
//   // expect(12).toNotBe(11);
//   // expect({name: 'Dan'}).toBe({name: 'Dan'});  //test will fail
//   // expect({name: 'Dan'}).toEqual({name: 'Dan'}); // test will pass
//   // expect([2,3,4]).toInclude(5); //will fail
//   // expect([2,3,4]).toExclude(5); //will pass
//   // expect([2,3,4]).toInclude(2); //will pass
//   // expect([2,3,4]).toExclude(2); //will fail
//   expect({
//     name: 'Dan',
//     age: 30,
//     location: "Boston"
//   }).toInclude({
//     age: 30
//   });
// });

//Should verify first & last names are set
//create user objects, pass into setName function, pass in string with first/last
//get result back, make assertions: returning object includes firstName, lastName
//with proper values.

it('should return first & last names', () => {

var dan = {
  // name: "Dan Scott",
  age: 30,
  location: "Boston"
}

  var result = utils.setName(dan, "Dan Scott");
  expect(result).toInclude({
    firstName: "Dan",
    lastName: "Scott"
  });
})

//Async
