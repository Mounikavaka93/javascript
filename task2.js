// Student result checker
let marks = 75;

let result = marks >= 35 ? "Pass" : "Fail";
console.log("Result:", result);

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
}
// Employee bonus calculator

let salary = 25000;

let bonus = salary * 0.10;
let finalSalary = salary + bonus;

console.log("Original Salary :", salary);
console.log("Bonus :", bonus);
console.log("Final Salary :", finalSalary);

//User Login Validation

let email = "admin@gmail.com";
let password = "12345";

if (email === "admin@gmail.com" && password === "12345") {
    console.log("Login Success");
} else {
    console.log("Login Failed");
}

//Product discount calculator

let price = 2000;

let finalAmount = price > 1000 ? price - (price * 0.20) : price;

console.log("Final Amount:", finalAmount);

//Array product management

let products = ["Laptop","Mobile","Mouse","Keyboard"];

console.log("First Product:", products[0]);
console.log("Last Product:", products[products.length - 1]);
console.log("Total Products:", products.length);

//Employee Object

let employee = {
    name: "Mounika",
    department: "frontend developer",
    salary: 30000
};

console.log("Employee Details:", employee);
console.log("Name:", employee.name);
console.log("Salary:", employee.salary);

//E-commerece cart total

let shirt = 500;
let pant = 1000;
let shoe = 1500;

let total = shirt + pant + shoe;
let discount = total * 0.10;
let finalAmount = total - discount;

console.log("Total Bill:", total);
console.log("Final Amount after 10% discount:", finalAmount);

//Age eligibility checker

let age = 19;

if (age >= 18) {
    console.log("Eligible for Voting");
} else {
    console.log("Not Eligible");
}

//Increment decrement operator

let a = 10;

a++;
console.log("After a++:", a);

++a;
console.log("After ++a:", a);

a--;
console.log("After a--:", a);

--a;
console.log("After --a:", a);

//Mini employee attendance system

let isPresent = true;
let completedTask = true;

if (isPresent && completedTask) {
    console.log("Eligible for Salary");
} else {
    console.log("Not Eligible");
}
