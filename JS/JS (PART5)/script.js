// object literal for a student
const student = {   
    name: "John Doe",
    age: 20,
    major: "Computer Science",
    gpa: 3.8,   
    isGraduated: false
};
// function to display student information
function displayStudentInfo(student) {
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`Major: ${student.major}`);
    console.log(`GPA: ${student.gpa}`);
    console.log(`Graduated: ${student.isGraduated}`);   
}

// calling the function to display student information
displayStudentInfo(student);    

// updating student information
student.gpa = 3.9;
student.isGraduated = true;

// displaying updated student information
console.log("\nUpdated Student Information:");

displayStudentInfo(student);

// adding a new property to the student object
student.minor = "Mathematics";
console.log(`Minor: ${student.minor}`); // displaying the new property

// deleting a property from the student object
delete student.age;
console.log("\nAfter deleting age property:");
displayStudentInfo(student);

// checking if a property exists in the student object
console.log("\nChecking if 'major' property exists:", 'major' in student);
console.log("Checking if 'age' property exists:", 'age' in student);

// iterating over the properties of the student object
console.log("\nIterating over student properties:");
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

/*
Output:
Name: John Doe
Age: 20
Major: Computer Science
GPA: 3.8
Graduated: false

Updated Student Information:
Name: John Doe
Age: 20
Major: Computer Science
GPA: 3.9
Graduated: true

Minor: Mathematics

After deleting age property:
Name: John Doe
Major: Computer Science
GPA: 3.9
Graduated: true

Checking if 'major' property exists: true
Checking if 'age' property exists: false

Iterating over student properties:
name: John Doe
major: Computer Science
gpa: 3.9
isGraduated: true
minor: Mathematics
*/


// nestesd object example
const university = {
    name: "Tech University",
    location: {
        city: "San Francisco",
        state: "California"
    },
    departments: [
        {
            name: "Computer Science",
            head: "Dr. Smith"
        },
        {
            name: "Mathematics",
            head: "Dr. Johnson"
        }
    ]
};
console.log("\nUniversity Information:");
console.log(`Name: ${university.name}`);
console.log(`Location: ${university.location.city}, ${university.location.state}`);
console.log("Departments:");
university.departments.forEach(dept => {
    console.log(`name: ${dept.name}, Head: ${dept.head}`);
});

/*
Output:
University Information:
Name: Tech University
Location: San Francisco, California
Departments:
- Computer Science, Head: Dr. Smith
- Mathematics, Head: Dr. Johnson
*/


// nested object access example for class information
const ClassINFO={
    dev : {
        grade: 'A',
        subjects: {
            math: 95,
            science: 90
        },
        address: {
            city: 'New York',
            zip: '10001'
        }
    },

    Bharat: {
        grade: 'A+',
        subjects: {
            math: 85,
            science: 80
        },
        address: {
            city: 'Los Angeles',
            zip: '90001'
        }      
    }
};

console.log("\nClass Information:");
for (let student in ClassINFO) {
    console.log(`Student: ${student}`); 
    console.log(`Grade: ${ClassINFO[student].grade}`);
    console.log(`Math Score: ${ClassINFO[student].subjects.math}`);
    console.log(`Science Score: ${ClassINFO[student].subjects.science}`);
    console.log(`City: ${ClassINFO[student].address.city}`);
    console.log(`ZIP: ${ClassINFO[student].address.zip}`);
    console.log('---');
}   
/*
Output:
Class Information:
Student: dev    
Grade: A
Math Score: 95
Science Score: 90
City: New York
ZIP: 10001
---
Student: Bharat
Grade: A+
Math Score: 85
Science Score: 80
City: Los Angeles
ZIP: 90001
---
*/



//Array of Object

const students = [
    { name: "Alice", age: 20, grade: "A" },
    { name: "Bob", age: 22, grade: "B" },
    { name: "Charlie", age: 19, grade: "C" }
];         

console.log(students[0].name); // Outputs: Alice
console.log(students[1].age); // Outputs: 22
students.forEach(student => {
console.log(student.name + " is " + student.age + " years old and has a grade of " + student.grade);
});
/*
Output:
Alice is 20 years old and has a grade of A  
Bob is 22 years old and has a grade of B
Charlie is 19 years old and has a grade of C
*/




// generate random interger

let numss = Math.random(); // generates a random number between 0 (inclusive) and 1 (exclusive)
numss = numss * 100; // scales the number to be between 0 and 100 , will never generate 100
numss = Math.floor(numss); // rounds down to the nearest integer
console.log("Random Integer between 0 and 99:", numss); 
// Output: Random Integer between 0 and 99: <some integer between 0 and 99>

numss= numss + 1; // to make it between 1 and 100
console.log("Random Integer between 1 and 100:", numss); 
// Output: Random Integer between 1 and 100: <some integer between 1 and 100>
Math.floor(Math.random() * 100) + 1; // one liner to generate random integer between 1 and 100




// guessung game 
// users enters a max number and then tries to guess a random number between 1 to max number

const maxNumber = prompt("Enter the maximum number for the guessing game:");
console.log("Maximum Number is:", maxNumber);

const randomNumber = Math.floor(Math.random() * maxNumber) + 1;

let userGuess = prompt("Guess a number between 1 and " + maxNumber + ":");

while(true){
    if(userGuess == quit)
    {
        console.log("Game exited.");
        break;
    }

    if(userGuess == randomNumber){
        console.log("Congratulations! You guessed the correct number:", randomNumber);
        break;
    }
    else if(userGuess < randomNumber){
        console.log("Too low! Try again.");
    }
    else{
        console.log("Too high! Try again.");
    }
}