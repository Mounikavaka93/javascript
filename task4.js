

// Task 1: Age Category Finder
let age = prompt("Enter age:");
if (age <= 12) console.log("Child");
else if (age <= 19) console.log("Teenager");
else if (age <= 59) console.log("Adult");
else console.log("Senior Citizen");


// Task 2: Salary Hike Calculator
let salary = parseFloat(prompt("Enter salary: "));
let hike;
if (salary < 20000) hike = salary * 0.20;
else if (salary <= 50000) hike = salary * 0.10;
else hike = salary * 0.05;

console.log("Old Salary:", salary);
console.log("New Salary:", salary + hike);


// Task 3: Electricity Bill
let units = parseInt(prompt("Enter units: "));
let bill;
if (units <= 100) bill = units * 5;
else if (units <= 200) bill = units * 7;
else bill = units * 10;

console.log("Total Bill:", bill);


// Task 4: ATM
let balance = 10000;
let withdraw = parseFloat(prompt("Enter withdrawal amount: "));
if (withdraw <= balance) {
    balance -= withdraw;
    console.log("Withdrawal Successful");
    console.log("Remaining Balance:", balance);
} else {
    console.log("Insufficient Funds");
}


// Task 5: Login Validation
let username = prompt("Enter username: ");
let password = prompt("Enter password: ");

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}


// Task 6: Mobile Recharge Offer
let recharge = parseInt(prompt("Enter recharge amount: "));
if (recharge >= 499) console.log("Netflix Offer");
else if (recharge >= 299) console.log("2GB Extra Data");
else console.log("No Offer");


// Task 7: Traffic Signal (switch)
let color = prompt("Enter signal color: ").toLowerCase();

switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Signal");
}


// Task 8: Attendance
let workingDays = parseInt(prompt("Enter working days: "));
let presentDays = parseInt(prompt("Enter present days: "));
let attendance = (presentDays / workingDays) * 100;

console.log("Attendance %:", attendance);

if (attendance >= 75) console.log("Eligible");
else console.log("Not Eligible");


// Task 9: Bus Ticket Booking
let tickets = parseInt(prompt("Enter number of tickets: "));
let total = tickets * 500;
let gst = total * 0.05;
let finalAmount = total + gst;

console.log("Total:", total);
console.log("GST:", gst);
console.log("Final Amount:", finalAmount);


// Task 10: Restaurant Bill
let foodCost = parseFloat(prompt("Enter food cost: "));
let discount = (foodCost > 2000) ? foodCost * 0.10 : 0;

console.log("Final Bill:", foodCost - discount);


// Task 11: Police Recruitment
age = parseInt(prompt("Enter age: "));
let height = parseInt(prompt("Enter height: "));
let weight = parseInt(prompt("Enter weight: "));

if (age >= 18) {
    if (height >= 160) {
        if (weight >= 55) {
            console.log("Selected");
        } else {
            console.log("Rejected: Weight too low");
        }
    } else {
        console.log("Rejected: Height too low");
    }
} else {
    console.log("Rejected: Age too low");
}


// Task 12: Student Result
let marks = [];
for (let i = 0; i < 5; i++) {
    marks.push(parseInt(prompt(`Enter subject ${i + 1} marks: `)));
}

let sum = marks.reduce((a, b) => a + b, 0);
let percentage = sum / 5;

console.log("Total:", sum);
console.log("Percentage:", percentage);

if (percentage >= 90) console.log("Grade A+");
else if (percentage >= 80) console.log("Grade A");
else if (percentage >= 70) console.log("Grade B");
else if (percentage >= 60) console.log("Grade C");
else console.log("Fail");


// Task 13: Employee Shift
let time = parseInt(prompt("Enter hour (0-23): "));
if (time >= 6 && time < 14) console.log("Morning Shift");
else if (time >= 14 && time < 22) console.log("Afternoon Shift");
else console.log("Night Shift");


// Task 14: Loan Eligibility
age = parseInt(prompt("Enter age: "));
salary = parseInt(prompt("Enter salary: "));
let exp = parseInt(prompt("Enter experience: "));

if (age >= 21 && salary >= 25000 && exp >= 2) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


// Task 15: Cab Fare
let distance = parseFloat(prompt("Enter distance: "));
let fare;

if (distance <= 5) fare = distance * 20;
else fare = (5 * 20) + ((distance - 5) * 15);

console.log("Total Fare:", fare);


// Task 16: Multiplication Table
let num = parseInt(prompt("Enter number: "));
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}


// Task 17: Password Strength
let length = parseInt(prompt("Enter password length: "));
if (length < 6) console.log("Weak");
else if (length <= 10) console.log("Medium");
else console.log("Strong");


// Task 18: Bonus System
exp = parseInt(prompt("Enter experience: "));
salary = parseFloat(prompt("Enter salary: "));
let bonus;

if (exp <= 2) bonus = salary * 0.05;
else if (exp <= 5) bonus = salary * 0.10;
else bonus = salary * 0.20;

console.log("Bonus:", bonus);


// Task 19: Countdown Timer
let i = 10;
while (i > 0) {
    console.log(i);
    i--;
}
console.log("Happy New Year");


// Task 20: Interview Selection
let degree = prompt("Degree completed (yes/no): ");
let communication = prompt("Communication (good/bad): ");
let tech = parseInt(prompt("Technical score: "));

if (degree === "yes") {
    if (communication === "good") {
        if (tech >= 70) {
            console.log("Selected");
        } else {
            console.log("Rejected: Low Technical Score");
        }
    } else {
        console.log("Rejected: Poor Communication");
    }
} else {
    console.log("Rejected: Degree not completed");
}