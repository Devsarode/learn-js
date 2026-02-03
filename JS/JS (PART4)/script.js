// FOR LOOP
for (let i = 1; i <= 10; i++) {
    console.log(i); // Output -> 1 2 3 4 5 6 7 8 9 10 (each number on a new line)
}

// Looping through an array
let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Output -> "apple" "banana" "cherry" (each fruit on a new line)
}   


//print all odd numbers from 1 to 20
for(let i=1;i<=20;i++){
    if(i%2!==0){
        console.log(i); // Output -> 1 3 5 7 9 11 13 15 17 19 (each number on a new line)
    }
}
// print all odd numbers from 20 to 1
for(let i=20;i<=1;i--){
    if(i%2!==0){
        console.log(i); // Output -> 19 17 15 13 11 9 7 5 3 1 (each number on a new line)
}
}

//print multiplication table of 5

for(let i=1;i<=10;i++){
    console.log(`5 x ${i} = ${5*i}`); 
    // Output -> 5 x 1 = 5
    //          5 x 2 = 10
    //          5 x 3 = 15
    //          5 x 4 = 20
    //          5 x 5 = 25
    //          5 x 6 = 30
    //          5 x 7 = 35
    //          5 x 8 = 40
    //          5 x 9 = 45
    //          5 x 10 = 50 (each on a new line)
}   

// from user input
let n= prompt("write num"); // Example user input
n= parseInt(n); // Convert input to an integer
for(let i=1;i<=10;i++){
    console.log(`${n} x ${i} = ${n*i}`);
    // If user input is 7, Output -> 7 x 1 = 7
    //                      7 x 2 = 14
    //                      7 x 3 = 21
    //                      7 x 4 = 28
    //                      7 x 5 = 35
    //                      7 x 6 = 42
    //                      7 x 7 = 49
    //                      7 x 8 = 56
    //                      7 x 9 = 63
    //                      7 x 10 = 70 (each on a new line)
}   


// nested for loop
for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        console.log(`i=${i}, j=${j}`);
        // Output -> i=1, j=1
        //          i=1, j=2
        //          i=1, j=3
        //          i=2, j=1
        //          i=2, j=2
        //          i=2, j=3
        //          i=3, j=1
        //          i=3, j=2
        //          i=3, j=3 (each on a new line)
    }
}  



//WHILE LOOP
let count = 1;
while (count <= 10) {
    console.log(count);
    count++; // Output -> 1 2 3 4 5 6 7 8 9 10 (each number on a new line)
}

//print all even numbers from 1 to 20
let num = 1;
while (num <= 20) {
    if (num % 2 === 0) {    
        console.log(num); // Output -> 2 4 6 8 10 12 14 16 18 20 (each number on a new line)
    }
    num++;
}

// FAVORITE MOVIES
let favorite ="Avatar"
let guess = prompt("Guess my favorite movie: ");
while((guess != favorite) && (guess != "quit")){
    alert("Wrong guess, try again!");
    guess = prompt("Guess my favorite movie: ");
}

if (guess === favorite){
    alert("Correct! My favorite movie is Avatar.");
    console.log("User guessed the favorite movie correctly.");
}
else if (guess === "quit"){
    alert("You chose to quit. Goodbye!");
    console.log("User chose to quit the guessing game.");
}



//Break statement in loop
let m=1
for(let m=1;m<=10;m++){
    if(m==6){
        break; // Exit the loop when i is 6
    }
    console.log(m); // Output -> 1 2 3 4 5 (each number on a new line)
}   



// arrays with loops

let colors = ["red", "green", "blue", "yellow", "purple"];
colors.push("orange"); // Adding an element to the array
for(let i=0;i<colors.length;i++){
    console.log(i, colors[i]); 
    // Output -> 0 "red"
    //          1 "green"
    //          2 "blue"
    //          3 "yellow"
    //          4 "purple"
    //          5 "orange" (each index and color on a new line)
}

// for array in reverse order

for(let i=colors.length - 1;i>=0;i--){
    console.log(i, colors[i]); 
    // Output -> 5 "orange"
    //          4 "purple"
    //          3 "yellow"
    //          2 "blue"
    //          1 "green"
    //          0 "red" (each index and color on a new line)
}

// print odd indexed elements
for(let i=0;i<colors.length;i++){
    if(i%2!==0){
        console.log(i, colors[i]); 
        // Output -> 1 "green"
        //          3 "yellow"
        //          5 "orange" (each index and color on a new line)
    }
}
 
//or 

for(let i=1;i<colors.length;i+=2){
    console.log(i, colors[i]); 
    // Output -> 1 "green"
    //          3 "yellow"
    //          5 "orange" (each index and color on a new line)
}   

//nested loops with arrays

let heros =[["Ironman", "Captain America", "Thor"],["Batman", "Superman", 'Wonderwoman']];
for(let i=0;i<heros.length;i++){    // outer loop for each team
    console.log("total no oh hero are" ,heros[i].length ,`Hero team ${i+1}:`);      // printing team number
    for(let j=0;j<heros[i].length;j++){     // inner loop for each hero in the team
        console.log(i,j,heros[i][j]);       // printing each hero with team and hero index
        // Output -> Hero team 1:
        //          0 0 "Ironman"
        //          0 1 "Captain America"
        //          0 2 "Thor"
        //          Hero team 2:
        //          1 0 "Batman"
        //          1 1 "Superman"
        //          1 2 "Wonderwoman" (each on a new line)
    }   
}


// another example of nested array

let students = [["Alice", 85], ["Bob", 92], ["Charlie", 78]];
for(let i=0;i<students.length;i++){
    let name = students[i][0];
    let score = students[i][1];
    console.log(`Student: ${name}, Score: ${score}`);
    // Output -> Student: Alice, Score: 85
    //          Student: Bob, Score: 92
    //          Student: Charlie, Score: 78 (each on a new line)
}

//or
for(let i=0;i<students.length;i++){ // outer loop for each student
    console.log("Details of student", i+1 +":"); // printing student number
    for(let j=0;j<students[i].length;j++){ // inner loop for each detail of the student
    console.log(students[i][j]); // printing each detail of the student
    }   
}
// Output -> Details of student 1:
//          "Alice"
//          85              
//          Details of student 2:
//          "Bob"
//          92
//          Details of student 3:
//          "Charlie"
//          78 (each on a new line) 



//for of loop

let animals = ["dog", "cat", "elephant", "tiger"];
for (let animal of animals) {
    console.log(animal); // Output -> "dog" "cat" "elephant" "tiger" (each animal on a new line)
}   

let message = "Hello, World!";
for (let char of message) {
    console.log(char); // Output -> H e l l o ,   W o r l d ! (each character on a new line)
 }   

//NESTED FOR OF LOOP
let heroes = [["Ironman", "Captain America", "Thor"], ["Batman", "Superman", "Wonderwoman"]];
for(list of heroes){
    console.log(list); // Output -> ["Ironman", "Captain America", "Thor"]
    //          ["Batman", "Superman", "Wonderwoman"] (each team on a new line) 1
}
for (let team of heroes) { // outer loop for each team
    console.log("Hero team:"); // printing team header
    for (let hero of team) { // inner loop for each hero in the team
        console.log(hero); // printing each hero
        // Output -> Hero team:
        //          "Ironman"
        //
        //          "Captain America"
        //
        //          "Thor"
        //
        //          Hero team:
        //          "Batman"
        //
        //          "Superman"
        //
        //          "Wonderwoman" (each on a new line)
   
   
    }
    }   




    // TO OD LIST APP

let todoList = [];

alert("Welcome to the To-Do List App!");
let request = prompt("Enter a your request:");

while (true) {
if (request == "quit") {
console.log("quitting app");
break;
}

if (request == "list") {
    console.log("______________");
        for(let i=0; i<todoList.length; i++){
            console.log(i, todoList[i]);
        }
    console.log("______________");

}else if(request == "add"){
    let newTask = prompt("Enter the task you want to add:");
    todoList.push(newTask);
    console.log(`${newTask} has been added to your to-do list.`);

}else if(request == "delete")  {
    let index= prompt("Enter the index of the task you want to delete:");
    todoList.splice(index, 1);
    console.log(`Task at index ${index} has been deleted from your to-do list.`);
} else{
    console.log("Unknown request. Please use 'list', 'add', 'delete', or 'quit'.");
}

 request = prompt("Enter a your request:");
}



// questions


//Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example: Input: [1, 2, 3, 4, 2, 5, 6] num = 2

let arr = [1, 2, 3, 4, 2, 5, 6];
let nums = 2;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == nums) {
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr); // Output: [1, 3, 4, 5, 6]



//Write a JS program to count total number of digits in a number.
// Example:if number=287152,count=6  

let number = 287152;
let Count = 0;
while (number != 0) {
    number = Math.floor(number / 10); // Remove the last digit  , math.floor to get integer value
    Count++;
}
console.log(Count); // Output: 6


//Write a JS program to find the sum of digits in a number.
let NUmber = 287152;
let sum = 0;
let copy = NUmber;
while (copy != 0) {
    sum += copy % 10; // Add the last digit to sum
    copy = Math.floor(NUmber / 10); // Remove the last digit
}
console.log(sum); // Output: 25


//Print the factorial of a numbern.
let numFactorial = Number(prompt("Enter a number for FACTORIAL:"));

let factorial = 1;
for (let i = 1; i <= numFactorial; i++) {
    factorial *= i; // Multiply factorial by i
}
console.log(factorial); // Output: 120 (5! = 5 x 4 x 3 x 2 x 1 = 120)


//Find the largest number in an array with only positive numbers
let numbersArray = [34, 67, 23, 89, 12, 90, 45];
let largest = numbersArray[0]; // Assume the first number is the largest
for (let i = 1; i < numbersArray.length; i++) {
    if (numbersArray[i] > largest) {
        largest = numbersArray[i]; // Update largest if current number is greater
    }
}
console.log(largest); // Output: 90