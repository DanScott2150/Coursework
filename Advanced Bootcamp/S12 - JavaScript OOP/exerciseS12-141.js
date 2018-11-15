Create constructor fucntion for a Vehicle;
every object created from this constructor should have
a make, model, and year property. Each object should
also have a property called isRunning, which should be set
to false

Every object created via constructor should have a function
called turnOn, which changes isRunning to true

Every object should also have turnOff

Every object should have a method called honk, which returns
the string 'beep' but only if the vehicle isRunning

function Vehicle(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
  }
}

Vehicle.prototype.turnOn = function(){
  this.isRunning = true;
}

Vehicle.prototype.turnOff = function(){
  this.isRunning = false;
}

Vehicle.prototype.honk = function(){
  if(this.isRunning){
    return "BEEP!";
  }
