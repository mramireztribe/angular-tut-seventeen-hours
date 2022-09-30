let Lname: string;
let age: number;
let dob = "25";
let result = parseInt(dob);
let isValid: boolean = false;
let empList: string[];
let numList: Array<number>;


Lname = 'Ramirez';
age = 25;
age = 25.5;
empList = ['Ramirez', 'Cheen-Green', 'Curfman']
numList = [1, 2, 3, 4, 5];

let newNum = numList[6];
let results = numList.filter((num) => num > 2);
let emp = empList.find((emp) => emp === 'Ramirez');

console.log(results);
console.log(emp);

let sum = numList.reduce((acc, num) => acc + num)

console.log(sum);

const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue;

let swapNumbs: [firstNumber: number, secondNumber: number];

function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2, num1]
}

swapNumbs = swapNumbers(10, 20);

swapNumbs[0];
swapNumbs[1];
