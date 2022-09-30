"use strict";
let Lname;
let age;
let dob = "25";
let result = parseInt(dob);
let isValid = false;
let empList;
let numList;
Lname = 'Ramirez';
age = 25;
age = 25.5;
empList = ['Ramirez', 'Cheen-Green', 'Curfman'];
numList = [1, 2, 3, 4, 5];
let newNum = numList[6];
let results = numList.filter((num) => num > 2);
let emp = empList.find((emp) => emp === 'Ramirez');
console.log(results);
console.log(emp);
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
let c = 2 /* Color.Blue */;
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
swapNumbs[1];
