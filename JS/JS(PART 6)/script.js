 function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Outputs: Hello, Alice!


function sayHello() {
    console.log("Hello, World!");
    }
     sayHello(); // Calling the function



//fuction to print 1 to 10 
function printNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
printNumbers(); // Calling the function to print numbers from 1 to 10


// is adult or not
function isAdult() {
    let age = 20;
    if (age >= 18) {
        return true;
    } else {
        return false;
    }   
}

console.log(isAdult());

// or 
function isadult(ages) {
    if (ages >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(isadult(20)); // true
console.log(isadult(16)); // false



//create a function that prints a poem
function printppoem(){
    console.log("Roses are red, violets are blue,");
    console.log("Sugar is sweet, and so are you.");
}
printppoem();



//create a function to roll a dice and always display the value of dice from 1 to 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log("Dice rolled:", rollDice());



//print both name and age using function
function printNameAndAge(name, age) {   // parameters
    console.log("Name: " + name + ", Age: " + age);
}
printNameAndAge("John", 25); // arguments



//create a function that gived us the average of 3 numbers
function averageOfThreeNumbers(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}   
console.log("Average:", averageOfThreeNumbers(10, 20, 30));



//print multiplication table of a number using function
function printTable(n){
    for(let i=n; i<=n*20; i+=n){
        console.log(i);
    }
}
printTable(5); // prints multiplication table of 5


//return sum of numbers form  1 to n
function sum1toN(N){
    let sum=0;
    for(let i=1 ; i<=N; i++){
        sum+=i;
        
    }
    console.log("Sum from 1 to N is:", sum);
}
sum1toN(5);


//create a function that returns the concatenation of all the strings in an array
let arrayOfStrings = ["Hello", " ", "World", "!"]
function concatenateStrings(arrayofStrings) {
    let result="";
    for(let i=0;i<arrayofStrings.length;i++){
        result+=arrayofStrings[i];
    }
     console.log(result);// print the concatenated string
}
concatenateStrings(arrayOfStrings);// Outputs: Hello World!


// FUNCTION EXPRESSION
let square = function(num) { //function expression to calculate square store in a variable
    return num * num;
};
console.log(square(5)); // Outputs: 25

let hello = function() { //function expression to print hello
    console.log("Hello!");
}
hello(); // Outputs: Hello!

hello = function() { //redefining the function expression
    console.log("Namaste!");
}
hello(); // Outputs: Namaste!


//higher order function

// A higher-order function that takes another function as an argument
function applyOperation(a, b, operation) { // `operation` is a function passed as an argument
    return operation(a, b); // Call the passed function
}
function add(x, y) {
    return x + y;
}   
function multiply(x, y) {
    return x * y;
}
console.log(applyOperation(5, 3, add)); // Outputs: 8
console.log(applyOperation(5, 3, multiply)); // Outputs: 15 


// 
function multigreet (funct , count){
    for(let i=0; i<=count; i++){
        funct();
    }
}

function greet(){
    console.log("Hello!");
}

multigreet(greet, 3); // Outputs "Hello!" 3 times

multigreet(function(){ 
    console.log("namaste!")}, 2); // Outputs "Namaste!" 2 times


// A higher-order function that returns another function
function createMultiplier(factor) { // `factor` is a parameter for the outer function
    return function(number) { // The inner function that uses `factor`
        return number * factor;  // Multiply the input `number` by `factor`
    };
}
const double = createMultiplier(2);
console.log(double(5)); // Outputs: 10

const triple = createMultiplier(3);
console.log(triple(5)); // Outputs: 15


//METHODS
//example of an object with a method 
// this is known as key value pair , where key is firstName , lastName and fullName
const person = {  // Object representing a person
    firstName: "John", // Property for first name
    lastName: "Doe",    // Property for last name
    fullName: function() { // Method to get full name
        return this.firstName + " " + this.lastName; // `this` refers to the current object , concatenating first and last name
    }
};
console.log(person.fullName()); // Outputs: John Doe

// Another example of methods
const calculator = {
    add: function(a, b) { // Method to add two numbers
        return a + b;
    },

    subtract: function(a, b) { // Method to subtract two numbers
        return a - b;
    }
};
console.log(calculator.add(5, 3));  
console.log(calculator.subtract(5, 3));

// shorthand method syntax
//here area is a method of rectangle object
// and it calculates the area of the rectangle using its length and width properties
// where we have used shorthand method syntax to define the area method
// where we don't need to use the function keyword and colon , just the method name followed by parentheses and curly braces
// 'this'keyword is used to refer to the current object
const rectangle = {
    length: 10,
    width: 5,   
    area() { // Shorthand method syntax
        return this.length * this.width; // Calculate area using object properties
    }
};
console.log(rectangle.area()); // Outputs: 50



// q1 Write a JavaScript function that returns array elements larger than a number 
function getLargerElements(arr, num) {
    let largerElements = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            largerElements.push(arr[i]);
        }
    }
    return largerElements;
}
console.log(getLargerElements([1, 2, 3, 4, 5], 3)); // Outputs: [4, 5] 