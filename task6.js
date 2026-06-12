//Employee Bonus Calculator

let empName = "Mounika";
let salary = 20000;
let experience = 6;

let bonus;

if (experience >= 5) {
  bonus = salary * 0.20;
} else if (experience >= 2) {
  bonus = salary * 0.10;
} else {
  bonus = salary * 0.05;
}

let finalSalary = salary + bonus;

console.log("Employee:", empName);
console.log("Final Salary:", finalSalary);

//College Admission System

let name = "Anu";
let age = 18;
let percentage = 65;

if (age >= 17) {
  if (percentage >= 60) {
    console.log("Admission Approved");
  } else {
    console.log("Admission Rejected");
  }
} else {
  console.log("Admission Rejected");
}

//Food Delivery Menu

let choice = 1;

switch (choice) {
  case 1:
    console.log("Order Confirmed: Pizza");
    break;
  case 2:
    console.log("Order Confirmed: Burger");
    break;
  case 3:
    console.log("Order Confirmed: Shawarma");
    break;
  case 4:
    console.log("Order Confirmed: Fried Rice");
    break;
  default:
    console.log("Invalid Choice");
}

//Attendance Tracker

let students = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

for (let student of students) {
  console.log(student);
}

console.log("Total Students:", students.length);

//E-Commerce Cart

let cart = [
  { product: "Mobile", price: 15000 },
  { product: "Headset", price: 2000 },
  { product: "Charger", price: 1000 }
];

// Print products
cart.forEach(item => console.log(item.product));

// Total value
let total = cart.reduce((sum, item) => sum + item.price, 0);
console.log("Total:", total);

// Most expensive
let expensive = cart.reduce((max, item) => item.price > max.price ? item : max);
console.log("Most Expensive:", expensive.product);

//Bank Account Management

let balance = 10000;

function deposit(amount) {
  balance += amount;
  console.log("Deposited:", amount);
}

function withdraw(amount) {
  if (amount <= balance) {
    balance -= amount;
    console.log("Withdrawn:", amount);
  } else {
    console.log("Insufficient Balance");
  }
}

function checkBalance() {
  console.log("Balance:", balance);
}

deposit(2000);
withdraw(3000);
checkBalance();

//Movie Ticket Booking

age = 25;

if (age < 5) {
  console.log("Free Ticket");
} else if (age <= 18) {
  console.log("₹100");
} else if (age <= 60) {
  console.log("₹200");
} else {
  console.log("₹120");
}

//Online Shopping Discount

let purchase = 6000;
let discount;

if (purchase > 5000) {
  discount = purchase * 0.20;
} else if (purchase > 3000) {
  discount = purchase * 0.10;
} else if (purchase > 1000) {
  discount = purchase * 0.05;
} else {
  discount = 0;
}

let finalAmount = purchase - discount;

console.log("Original:", purchase);
console.log("Discount:", discount);
console.log("Final:", finalAmount);

//Food Inventory System

let inventory = ["Rice", "Oil", "Sugar", "Milk", "Egg"];

// Add 2 items
inventory.push("Salt", "Bread");

// Remove first & last
inventory.shift();
inventory.pop();

// Check Milk
console.log("Milk exists:", inventory.includes("Milk"));

// Final inventory
console.log(inventory);

//Hospital Patient Management

let patient = {
  patientName: "Raj",
  age: 40,
  disease: "Fever",
  doctor: "Dr. Kumar"
};

// for-in loop
for (let key in patient) {
  console.log(key + ":", patient[key]);
}

// Destructuring
let { patientName, disease, doctor } = patient;
age = patient;

console.log(patientName, age, disease, doctor);

//Amazon Order Tracker
function sendSMS() {
  console.log("SMS Sent To Customer");
}

function placeOrder(callback) {
  console.log("Order Placed Successfully");
  callback();
}

placeOrder(sendSMS);

//Cashback Offer Generator

function* offers() {
  yield "10% Cashback";
  yield "20% Cashback";
  yield "Free Delivery";
  yield "Buy 1 Get 1";
}

let gen = offers();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

//Employee Database

let employees = [
  { id: 1, name: "Rahul", salary: 25000 },
  { id: 2, name: "Kavin", salary: 30000 },
  { id: 3, name: "John", salary: 40000 }
];

// Names
employees.forEach(emp => console.log(emp.name));

// Total salary
let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Total Salary:", totalSalary);

// Highest salary
let highest = employees.reduce((max, emp) => emp.salary > max.salary ? emp : max);
console.log("Highest Paid:", highest.name);

//Railway Reservation System

let seats = 50;

function bookSeat(count) {
  if (count <= seats) {
    seats -= count;
    console.log(count + " seats booked");
  } else {
    console.log("Not enough seats");
  }
}

bookSeat(10);
bookSeat(45);
console.log("Available Seats:", seats);

//Mobile Store Billing System

let products = {
  Mobile: 15000,
  Laptop: 50000,
  Headphone: 2000,
  Smartwatch: 3000
};

let selected = ["Mobile", "Headphone"];

total = 0;

selected.forEach(item => {
  console.log(item);
  total += products[item];
});

let gst = total * 0.18;
let finalBill = total + gst;

console.log("Total:", total);
console.log("GST:", gst);
console.log("Final Bill:", finalBill);

//