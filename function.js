function program1() {
  var num1 = parseInt(prompt("Enter number 1"));
  var num2 = parseInt(prompt("Enter number 2"));
  if (num1 > num2) {
    console.log("Greater is", num1);
  } else if (num2 > num1) {
    console.log("Greater is ", num2);
  }
}

function program2(){
var num1 = parseInt(prompt("Enter number 1"));
var num2 = parseInt(prompt("Enter number 2"));
var num3 = parseInt(prompt("Enter number 3"));
if (num1 >= num2 && num1 >= num3) {
  console.log(num1);
} else if (num2 >= num1 && num2 >= num3) {
  console.log(num2);
} else {
  console.log(num3);
}
}

function program3(){
var num = parseInt(prompt("Enter number"));
if (num > 0) {
  console.log(num, "is positive");
} else if (num < 0) {
  console.log(num, "is negative");
} else {
  console.log(num, "is zero");
}
}

function program4(){
var num = parseInt(prompt("Enter number"));
if (num % 5 == 0) {
  console.log(num, "is dividible by 5");
} else if (num % 11 == 0) {
  console.log(num, "is divisible by 11");
} else {
  console.log(num, "is not divisible by 5 and 11");
}
}

function program5(){
var num = parseInt(prompt("Enter number"));
if (num % 2 == 0) {
  console.log(num, "is even");
} else {
  console.log(num, "is odd");
}
}
function program6(){
var year = parseInt(prompt("Enter year"));
if (year % 4 == 0) {
  console.log(year, "is leap");
} else {
  console.log(year, "is not leap year");
}
}

function program7(){
var char = prompt("Enter character");
if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
  console.log(char, "is an alphabet");
} else {
  console.log(char, "is not an alphabet");
}
}
function program8(){
var char = prompt("Enter character");
if (char >= "a" && char <= "z")
  if ("aeiou".includes(char)) {
    console.log(char, "is an vowel");
  } else {
    console.log(char, "is a constant");
  }
}
function program9(){
var char = prompt("Enter character");
if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
  console.log(char, "is an alphabet");
} else if (char >= 0 && char <= 9) {
  console.log(char, "is a number");
} else {
  console.log(char, "is a special character");
}
}
function program10(){
var char = prompt("Enter character");
if (char >= "A" && char <= "Z") {
  console.log(char, " is uppercase");
} else if (char >= "a" && char <= "z") {
  console.log(char, "is lowercase");
} else {
  console.log(char, "is not an alphabet");
}
}
function program11(){
var side1 = parseFloat(prompt("Enter side 1"));
var side2 = parseFloat(prompt("Enter side 2"));
var side3 = parseFloat(prompt("Enter side 3"));
if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
  console.log("Triangle is valid");
} else {
  console.log("triangle is not valid");
}
}
function program12(){
var total = parseInt(prompt("Enter total marks"));
var obt = parseInt(prompt("Enter obt marks"));
// var percent=parseInt(prompt("Enter your percentage"))
percent = (obt / total) * 100;
console.log("percentage is", percent);
if (percent >= 90) {
  console.log("Grade A");
} else if (percent >= 80) {
  console.log("Grade B");
} else if (percent >= 70) {
  console.log("Grade C");
} else if (percent >= 60) {
  console.log("Grade D");
} else if (percent >= 40) {
  console.log("Grade E");
} else if (percent < 40) {
  console.log("Grade F");
} else {
  console.log("please enter a valid percentage");
}
}

program1();
program2();
program3();
program4();
program5();
program6();
program7();
program8();
program9();
program10();
program11();
program12();
