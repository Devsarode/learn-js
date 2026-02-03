let aa=1;
let bb=4;

console.log("sum is :",aa+bb);

//template literals
let pencilprice =10;
let eraserprice =5;

//normal way
//let output= "total price : "+(pencilprice + eraserprice) + "rupees";

//template literals way
let output =`total price : ${pencilprice + eraserprice} rupees`;
console.log(output);
// or 
// without using output 
//console.log(`total price : ${pencilprice + eraserprice} rupees`);


//Arithmetic operations
let a=4;
let b=6;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b); 
console.log(a++);//4
console.log(++a);//6

 b = a;
console.log(b);//4

let c=5;
let d=6;
console.log(c>d);//false
console.log(c>=d);//false
console.log(c<d);//true
console.log(c<=d);//t
console.log(c!=d);//t

console.log(b==d);//t compares value not type
console.log("123"===123); //f compares type and value

//uni code to compare
// 'a' =61 , 'b'=62 ...
// 'A' =41 ,'B' =42 ...
console.log('a'>'A');//t
console.log('a'>'b');//f
console.log('*'>'&');//f


// if else loop 
let age=34;
if(age>=18){
    console.log("you can vote");
}
else{
    console.log("you can not vote");
}


//traffic light  loop
let signal="red";

if(signal==="red"){
    console.log("stop");
}else if (signal==="yellow"){
    console.log("slow down");
}else if(signal==="green"){
    console.log("go");
}else {
    console.log("Traffic light is not working");
}



// popcorn prices
let size="XL";

if(size==="S"){
    console.log("popcorn price is 50");
}else if(size==="M"){
    console.log("popcorn price is 100");
}else if(size==="L"){
    console.log("popcorn price is 100");
}else if(size==="XL"){   // OR else{
    console.log("popcorn price for is 250");
}



//nested if else
let username="admin";
let password="12345";
if(username==="admin"){
    if(password==="12345"){
        console.log("login successful");
    }   
    else{
        console.log("incorrect password");
    }
}else{
    console.log("invalid user");
}

//logical operators
let x=5;
let y=10;
console.log(x>0 && y>0);//t
console.log(x>0 && y<0);//f
console.log(x<0 && y<0);//f
console.log(x<0 && y>0);//f

console.log(x>0 || y>0);//t
console.log(x>0 || y<0);//t     
console.log(x<0 || y<0);//f
console.log(x<0 || y>0);//t

console.log(!(x>0));//f
console.log(!(x<0));//t 
console.log(!!(x>0));//t
console.log(!!(x<0));//f
//double not operator converts any value to boolean value
console.log(!!"hello");//t
console.log(!!"");//f
console.log(!!123); //t
console.log(!!0);//f
console.log(!!null);//f
console.log(!!undefined);//f
console.log(!!{});//t
console.log(!![]);//t   


// good string practice

let str="apple";

if(str[0]===a && str.length>3 ){
    console.log("good string");
}else{
    console.log("bad string");
}   


//switch case
let day=3;

switch(day){
    case 1:
        console.log("monday");
        break;  
    case 2:
        console.log("tuesday");
        break;  
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;  
    case 6:
        console.log("saturday");
        break;      
    case 7:
        console.log("sunday");
        break;  
    default:
        console.log("invalid day");                    
}


//alert 

alert("hello world");

//prompt   dialog box to take input from user
let age1=prompt("enter your age");
console.log("your age is :",age1); // printing in console

//confirm   confirmation dialog box
let deletepost=confirm("are you sure you want to delete this post?");
console.log(deletepost); // true or false

//ERROR MESSAGES
console.error("this is an error message");

//WARNING MESSAGE
console.warn("this is a warning message");
