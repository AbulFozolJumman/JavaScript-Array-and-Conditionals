// 10(Practice session)

// Task-1: Find the index of Banana and replace Banana with Mango. Then remove Orange and add Watermelon.

var fruits = ["Apple", "Banana", "Orange"];

var bananaIndex = fruits.indexOf("Banana");
// console.log(bananaIndex);

fruits[1] = "Mango"; // or fruits[bananaIndex] = "Mango";
// console.log(fruits);

fruits.pop();
// console.log(fruits);

fruits.push("Watermelon");
// console.log(fruits);

/* Task-2: Your total marks is 85, Tom's 66, Jane's 95, Peter's 56, John's 40. 
Exam grade is: 
80 or above A Grade
60 or above B Grade
50 or above C Grade 
40 or above D Grade
39 or above F Grade
Find the grades using if-else
*/

var jummansMarks = 85;
var tomsMarks =66;
var janesMarks = 95;
var petersMarks = 56;
var johnsMarks = 40;

// Jummans Grade
if (jummansMarks >= 80){
    var jummansGrade = "A";
    console.log(jummansGrade);
}
else if (jummansMarks >= 60){
    jummansGrade = "B";
    console.log(jummansGrade);
}
else if (jummansMarks >= 50){
    jummansGrade = "C";
    console.log(jummansGrade);
}
else if (jummansMarks >= 40){
    jummansGrade = "D";
    console.log(jummansGrade);
}
else{
    jummansGrade = "F";
    console.log(jummansGrade);
}

// Tom's Grade
if (tomsMarks >= 80){
    var tomsGrade = "A";
    console.log(tomsGrade);
}
else if (tomsMarks >= 60){
    tomsGrade = "B";
    console.log(tomsGrade);
}
else if (tomsMarks >= 50){
    tomsGrade = "C";
    console.log(tomsGrade);
}
else if (tomsMarks >= 40){
    tomsGrade = "D";
    console.log(tomsGrade);
}
else{
    tomsGrade = "F";
    console.log(tomsGrade);
}

// Jane's Grade
if (janesMarks >= 80){
    var janesGrade = "A";
    console.log(janesGrade);
}
else if (janesMarks >= 60){
    janesGrade = "B";
    console.log(janesGrade);
}
else if (janesMarks >= 50){
    janesGrade = "C";
    console.log(janesGrade);
}
else if (janesMarks >= 40){
    janesGrade = "D";
    console.log(janesGrade);
}
else{
    janesGrade = "F";
    console.log(janesGrade);
}

// Peter's Grade
if (petersMarks >= 80){
    var petersGrade = "A";
    console.log(petersGrade);
}
else if (petersMarks >= 60){
    petersGrade = "B";
    console.log(petersGrade);
}
else if (petersMarks >= 50){
    petersGrade = "C";
    console.log(petersGrade);
}
else if (petersMarks >= 40){
    petersGrade = "D";
    console.log(petersGrade);
}
else{
    petersGrade = "F";
    console.log(petersGrade);
}

// John's Grade
if (johnsMarks >= 80){
    var johnsGrade = "A";
    console.log(johnsGrade);
}
else if (johnsMarks >= 60){
    johnsGrade = "B";
    console.log(johnsGrade);
}
else if (johnsMarks >= 50){
    johnsGrade = "C";
    console.log(johnsGrade);
}
else if (johnsMarks >= 40){
    johnsGrade = "D";
    console.log(johnsGrade);
}
else{
    johnsGrade = "F";
    console.log(johnsGrade);
}

// Task-3: Find the largest number

var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2 && num1 > num3){
    console.log("The biggest number is: ", num1);
}
else if (num2 > num1 && num2 > num3){
    console.log("The biggest number is: ", num2);
}
else{
    console.log("The biggest number is: ", num3);
}

// Task-3: Check whether the given triangle is Isosceles or not using if-else

var side1 = 9;
var side2 = 9;
var side3 = 9;

if (side1 == side2 || side2 == side3 || side1 == side3){
    console.log("Isosceles")
}
else{
    console.log("Not Isosceles")
}