// This declares the variable myVar
var myVar;
// This sets the value of myVar variable
myVar = 0.7;
// This declares the myName variable
var myName = 'Brandon';
// A double quoted string cannot contain double quotes within unless they are escaped using a \, same applies for single quoted strings
var mySentence = 'What\s up';
var thing ="and he said \"What's up\" to me";
// Strings cannot break lines by default.
var myLongString = "This actually isn't too long.";

var myBoolean = false;

var numA = 14;
var numB = 27;
// Addition in js is done with the + symbol
var sumOfAandB = numA + numB;
// This reassigns the value of the numA variable
numA = 32;
// Subtraction in js is done with the - symbol
var numAMinusNumB = numA - numB;
// Multiplication in js is done with the * symbol
var numC = 3 * 3;
// Division in js is done with the / symbol
var numD = 4 / 2;
// Exponents in js are done with **
var myExponent = 2 ** 4;

// Modulus is done with a % returning the remainder after division 5 % 2 = 1
var myModulus = 5 % 2;

var myFullName = myName + " " + " Mathura";

var me = {
  name: "Brandon Mathura",
  age: 21,
  isAwesome: true,
  head: {
    eys: 2,
    hairColor: 'dark brown',
    brain: false,
  }
};
// Properties on the me object would generally be accessed using dot notation
//me.name would return Brandon Mathura, me.head.eyes would return 2

console.log(me.age);
// This sets the age property on the me object to the value of 22
me.age = 22;

console.log(me.age);

//Arrays are key value pairs where the key is a number, arrays are created [], each element within an array is separated by a ,
var myArr = [55, "Tiger", true, me];

// Arrays in JavaScript start with a 0 index, to access elements within an array use [] with the index number, myArr[0] would be 55, my Arr [1] would be Tiger
console.log(myArr[0]);

var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday'];

// Objects can hold arrays as the value for Properties
// This adds a hobbies property to the me object and sets it to be an array
me.hobbies = ['Code', 'Music', 'Food', 'Games'];

console.log(me.hobbies[0]);

var something;
// Something is undefined the variable has been declared but a value has been set, that's okay
console.log(something);
var somethingElse;
// If js encounters a variable that does not exist it will throw an error and stop executing any further script by default
console.log(somethingElse);
// null is nothing
var nothing =  null;

// This is a function declaration that creates a function called sayHello
function sayHello(){
  console.log("Welcome to JavaScript City");
}
//function declarations do not end in a ;
//This calls or invokes the sayHello function
sayHello();

// Variables created within a function are only avaialable within the function, this is called the function scope
function sayHelloTo(name) {
    var message = "Welcome to JavaScript City " + name + "!";
    console.log(message);
}
//sayHelloTo("Sean Kim");
//sayHelloTo("Paul Newman");
//This will throw an error, functions should be defined before they are called
//sumNums();
//This works because the function declarations are hoisted to the top of the document when read by the browser
sayHelloTo("meeeee");
// This is a function expression that creates a function called sumNums
var sumNums = function(firstNum, secondNum) {
  var sum = firstNum + secondNum;
  // This will return the value of the sum variable to where the function is called, once a return statement is triggered no further code within the function is executed
  return sum;
};

sumNums(2,2);

//console.log(sumNums(2,2));

var mySum = sumNums(923, 13454);

var apollo = {
  isDog: true,
  breed: 'mutt',
  legs: 4,
  age: 2,
  toys: ['Mrs.Moose', 'Bone', 'Half a Giraffe'],
  // This is a speak method on the dog object, in JS methods are functions that are the property of an object
  speak: function() {
    console.log('woof woof');
  },
  sayHiTo: function(name, age) {
    console.log("Hi" + name + "woof woof! You're " + age);
  }
};
// This calls the speak method on the apollo Object
apollo.speak();
// With functions that use multiple parameters the order matters, supply the parameters in the same order in which the arguments are listed where the function is defined
apollo.sayHiTo("Stella", 5);

// The console object is a global object created within the browser, log is a method on that object.
console.log(console);
