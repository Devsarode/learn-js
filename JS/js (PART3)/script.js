// String Methods
let message = "  Hello, World!  "
console.log(message.toUpperCase()) // Output -> "  HELLO, WORLD!  "
console.log(message.toLowerCase()) // Output -> "  hello, world!  "
console.log(message.trim()) // Output -> "Hello, World!"
console.log(message.indexOf("World")) // Output -> 9
console.log(message.slice(2, 7)) // Output -> "Hello"
console.log(message.slice(-2)) // Output -> "d!"
console.log(message.slice(3)) // Output -> "lo, World!  "
console.log(message.replace("World", "JavaScript")) // Output -> "  Hello, JavaScript!  "
console.log(message.split(", ")) // Output -> ["  Hello", "World!  "]
console.log(message.charAt(7)) // Output -> "W"
console.log(message.includes("Hello")) // Output -> true
console.log(message.concat(" How are you?")) 
console.log(message.repeat(3)) // Output -> "  Hello, World!    Hello, World!    Hello, World!  "

// Method Chaining
  let msg = "  Hello, World!  "
        let result = msg.trim().toUpperCase().replace("WORLD", "JAVASCRIPT")
        console.log(result) // Output -> "HELLO, JAVASCRIPT!"
    

//ARRAY
let fruits = ["apple", "banana", "cherry"]
let num=[1,2,3,4,5]
console.log(fruits.length) // Output -> 3
console.log(fruits[0]) // Output -> "apple"

fruits.push("date") // adds "date" to the end of the array
console.log(fruits) // Output -> ["apple", "banana", "cherry", "date"]

fruits.pop()   // removes the last element ("date") from the array
console.log(fruits) // Output -> ["apple", "banana", "cherry"]

fruits.shift()   // removes the first element ("apple") from the array
console.log(fruits) // Output -> ["banana", "cherry"]   

fruits.unshift("apricot")  // adds "apricot" to the beginning of the array
console.log(fruits) // Output -> ["apricot", "banana", "cherry"]

console.log(fruits.indexOf("banana")) // Output -> 1    
console.log(fruits.length); // Output -> 3 (number of elements in the array)
console.log(fruits[fruits.length - 1]); // Output -> "cherry" (last element in the array)

console.log(num.concat(fruits)); // combines two arrays  
// // Output -> [1, 2, 3, 4, 5, "apricot", "banana", "cherry"]
console.log(fruits.concat(num)); // combines two arrays
// Output -> ["apricot", "banana", "cherry", 1, 2, 3, 4, 5]

console.log(fruits.reverse()); // reverses the array
// Output -> ["cherry", "banana", "apricot"]

console.log(fruits.sort()); // sorts the array alphabetically
// Output -> ["apricot", "banana", "cherry"]

//EMPTY ARRAY
let emptyArray = [];
console.log(emptyArray.length); // Output -> 0

//ARRAY OF OBJECTS
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
console.log(users[0].name[0]); // Output -> "A"  (first letter of the name of the first user)
console.log(users[1].age); // Output -> 30
console.log(users.length); // Output -> 3
console.log(users[users.length - 1].name); // Output -> "Charlie"

//ARRAY CHAINING METHODS // combining multiple array methods
let numbers = [1, 2, 3, 4, 5]
let doubledEvenNumbers = numbers
    .filter(num => num % 2 === 0) // Filter even numbers
    .map(num => num * 2)          // Double each even number
console.log(doubledEvenNumbers) // Output -> [4, 8]


//splice
let arr = ["a", "b", "c", "d", "e"];
arr.splice(2, 1, "x", "y"); // at index 2, remove 1 element and add "x" and "y"
console.log(arr); // Output -> ["a", "b", "x", "y", "d", "e"]

//sort numbers
// for sorting the numbers are converted to strings and compared based on their UTF-16 code unit values by default
// for char sorting the sorting is done based on the Unicode values of the characters
// for string sorting works fine
let num2 =[1,44,5,100,43,2];
num2.sort();
console.log(num2); // Output -> [1, 100, 2, 43, 44, 5] (not numerical order) they are sorted as strings 
// to sort numbers in numerical order we need to provide a compare function
let char=["a","d","c","b","A","D","C","B"];
char.sort();
console.log(char); // Output -> ["A", "B", "C", "D", "a", "b", "c", "d"] (sorted based on Unicode values)
let numArr = [10, 5, 20, 15];
numArr.sort((a, b) => a - b); // Sort in ascending order
console.log(numArr); // Output -> [5, 10, 15, 20]

numArr.sort((a, b) => b - a); // Sort in descending order
console.log(numArr); // Output -> [20, 15, 10, 5]

//CONSTANT ARRAYS
const constantArray = [1, 2, 3];
constantArray.push(4); // This is allowed
console.log(constantArray); // Output -> [1, 2, 3, 4]
// constantArray = [5, 6, 7]; // This will throw an error
// constantArray = constantArray.concat([5, 6, 7]); // This will also throw an error

const g=20;
g=30; //error
console.log(g); //20


// nested arrays
let matrix = [
    [1, 2, 3],  
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[0][0]); // Output -> 1
console.log(matrix[1][2]); // Output -> 6
console.log(matrix[2][1]); // Output -> 8

// looping through nested arrays    
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
// Output -> 1 2 3 4 5 6 7 8 9 (each number on a new line)

