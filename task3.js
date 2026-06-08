//Employee Salary Calculator

let basic = 25000;
let hra = basic * 0.20;
let bonus = basic * 0.10;
let total = basic + hra + bonus;
let tax = total * 0.05;
let finalSalary = total - tax;

console.log("Basic Salary :", basic);
console.log("HRA :", hra);
console.log("Bonus :", bonus);
console.log("Tax :", tax);
console.log("Final Salary :", finalSalary);

//Student Grade System

let marks = 85;

if (marks >= 90 && marks <= 100) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else {
    console.log("Fail");
}

//Login Authentication System

let username = "admin";
let password = "12345";

let inputUser = "admin";
let inputPass = "12345";

if (inputUser === username) {
    if (inputPass === password) {
        console.log("Login Success");
    } else {
        console.log("Invalid Password");
    }
} else {
    console.log("Invalid Username");
}

//ATM Withdrawal Machine

let balance = 5000;
let withdraw = 2000;

if (withdraw > balance) {
    console.log("Insufficient Balance");
} else {
    balance -= withdraw;
    console.log("Withdrawal Success");
    console.log("Remaining Balance:", balance);
}

//E-Commerce Discount System

let amount = 7000;
let discount = 0;

if (amount >= 10000) {
    discount = amount * 0.20;
} else if (amount >= 5000) {
    discount = amount * 0.10;
} else if (amount >= 2000) {
    discount = amount * 0.05;
}

let finalAmount = amount - discount;

console.log("Original Amount:", amount);
console.log("Discount:", discount);
console.log("Final Amount:", finalAmount);

//Traffic Fine Checker

let helmet = false;
let license = false;

if (!helmet && !license) {
    console.log("Fine: ₹3000");
} else if (!helmet) {
    console.log("Fine: ₹1000");
} else if (!license) {
    console.log("Fine: ₹2000");
} else {
    console.log("No Fine");
}

//Employee Attendance Tracker

let attendance = ["P","P","A","P","A","P","P"];

let present = 0;
let absent = 0;

for (let day of attendance) {
    if (day === "P") {
        present++;
    } else {
        absent++;
    }
}

console.log("Present Days:", present);
console.log("Absent Days:", absent);

//Product Inventory Management

let product = {
    productName: "Laptop",
    price: 50000,
    stock: 10
};

for (let key in product) {
    console.log(key + ":", product[key]);
}

//Cab Fare Calculator

let distance = 12;
let fare = 0;

if (distance <= 5) {
    fare = distance * 20;
} else if (distance <= 10) {
    fare = (5 * 20) + (distance - 5) * 15;
} else {
    fare = (5 * 20) + (5 * 15) + (distance - 10) * 10;
}

console.log("Total Fare: ₹", fare);

//Mini Employee Management System

let employees = [
    {id:1, name:"Rahul", salary:25000},
    {id:2, name:"Kiran", salary:30000},
    {id:3, name:"Navi", salary:40000}
];

// Print all employees
console.log("All Employees:");
employees.forEach(emp => console.log(emp));

// Highest & Lowest salary
let highest = employees[0];
let lowest = employees[0];

let totalSalary = 0;

for (let emp of employees) {
    if (emp.salary > highest.salary) {
        highest = emp;
    }
    if (emp.salary < lowest.salary) {
        lowest = emp;
    }
    totalSalary += emp.salary;
}

console.log("Highest Salary:", highest);
console.log("Lowest Salary:", lowest);
console.log("Total Employees:", employees.length);
console.log("Total Salary Expenditure:", totalSalary);