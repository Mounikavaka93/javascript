//Traffic Signal Management

let signal = "red";

switch(signal.toLowerCase()) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Get Ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid Signal");
}

//Employee attendance 

for (let i = 1; i <= 30; i++) {
  console.log(`Employee ${i} Present`);
}

//ATM Withdrawal

let balance = 10000;

while (balance > 0) {
  balance -= 500;
  console.log("Remaining Balance:", balance);
}

//Admission Eligibility

let age = 18;
let percentage = 75;
let examPassed = true;

if (age >= 18) {
  if (percentage >= 70) {
    if (examPassed) {
      console.log("Admission Approved");
    } else {
      console.log("Rejected: Entrance Exam not passed");
    }
  } else {
    console.log("Rejected: Percentage below 70");
  }
} else {
  console.log("Rejected: Age below 18");
}

//Food Delivery

function delivery(customerName, foodItem, address) {
  console.log(`Hello ${customerName}, your ${foodItem} will be delivered to ${address}`);
}

delivery("Sudheer", "Pizza", "Hyderabad");

//Salary + Bonus

function calculateSalary(base, hra) {
  return base + hra;
}

function calculateBonus(salary) {
  return salary * 0.1;
}

let salary1 = calculateSalary(20000, 5000);
let bonus = calculateBonus(salary1);

console.log("Salary:", salary1);
console.log("Bonus:", bonus);

//Discount Engine

function applyDiscount(amount, callback) {
  let discounted = amount * 0.9;
  callback(discounted);
}

function generateInvoice(finalAmount) {
  console.log("Final Invoice Amount:", finalAmount);
}

applyDiscount(1000, generateInvoice);

//Generator Function

function* offers() {
  yield "10% OFF";
  yield "20% OFF";
  yield "Free Delivery";
  yield "Buy 1 Get 1";
}

let gen = offers();

console.log(gen.next().value);
console.log(gen.next().value);

//Spread Operator

let scienceStudents = ["A", "B"];
let commerceStudents = ["C", "D"];

let allStudents = [...scienceStudents, ...commerceStudents];

console.log(allStudents);

//Rest Operator

function totalMarks(studentName, ...marks) {
  let total = marks.reduce((a, b) => a + b, 0);
  console.log(`${studentName} Total Marks:`, total);
}

totalMarks("Sudheer", 80, 90, 85);

//Object Destructuring

let employee = {
  name: "Mounika",
  department: "IT",
  salary: 50000,
  experience: 5
};

let { name, department, salary, experience } = employee;

console.log(name, department, salary, experience);

//Filter Method

let products = [
  { name: "Laptop", price: 60000 },
  { name: "Mouse", price: 500 },
  { name: "Phone", price: 15000 }
];

let expensive = products.filter(p => p.price > 5000);
console.log(expensive);

//Find Method

let customers = [
  { name: "A", purchase: 20000 },
  { name: "B", purchase: 60000 },
  { name: "C", purchase: 30000 }
];

let premium = customers.find(c => c.purchase > 50000);
console.log(premium);

//Reduce Method

let expenses = [1000, 2000, 3000];

let total = expenses.reduce((sum, val) => sum + val, 0);

console.log("Total Expenses:", total);

//Every Method

let players = [20, 22, 25];

let allAdults = players.every(age => age > 18);

console.log(allAdults);

//Some Method

let candidates = [
  { name: "A", skills: ["HTML"] },
  { name: "B", skills: ["React"] }
];

let hasReact = candidates.some(c => c.skills.includes("React"));

console.log(hasReact);

//Mobile Validator

let mobile = "9876543210";

if (mobile.length === 10 && ["6","7","8","9"].includes(mobile[0])) {
  console.log("Valid Number");
} else {
  console.log("Invalid Number");
}

//URL Slug

let text = "Learn JavaScript Complete Course";

let slug = text.toLowerCase().split(" ").join("-");

console.log(slug);

//Sort Method

let employees = [
  { name: "A", salary: 30000 },
  { name: "B", salary: 50000 },
  { name: "C", salary: 20000 }
];

// High → Low
employees.sort((a, b) => b.salary - a.salary);
console.log("High to Low:", employees);

// Low → High
employees.sort((a, b) => a.salary - b.salary);
console.log("Low to High:", employees);

//Map Method

let movies = ["Leo", "Jailer", "Pushpa"];

let bookings = movies.map((movie, index) => {
  return { movie, bookingId: `BID${index + 1}` };
});

console.log(bookings);