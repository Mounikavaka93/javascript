//Employee Salary Management

const employees = [
  { id: 1, name: "Rahul", salary: 25000 },
  { id: 2, name: "Kavin", salary: 50000 },
  { id: 3, name: "John", salary: 75000 }
];

// Above ₹40,000
const highSalary = employees.filter(emp => emp.salary > 40000);

// First above ₹60,000
const firstHigh = employees.find(emp => emp.salary > 60000);

// Total salary
const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);

// Names array
const names = employees.map(emp => emp.name);

console.log(highSalary, firstHigh, totalSalary, names);

//College Admission Form

function checkAdmission(name, age, percentage) {
  if (age >= 18 && percentage >= 60) {
    return `${name} is Eligible for Admission`;
  } else {
    return `${name} is Not Eligible`;
  }
}

console.log(checkAdmission("Rahul", 19, 75));

//E-Commerce Cart

const cart = [
  { product: "Shoes", price: 2000, qty: 2 },
  { product: "Watch", price: 1500, qty: 1 },
  { product: "Bag", price: 1000, qty: 3 }
];

// Total bill
const totalBill = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

// Most expensive product
const expensive = cart.reduce((max, item) => item.price > max.price ? item : max);

// Product names
const productNames = cart.map(item => item.product);

console.log(totalBill, expensive, productNames);

//Traffic Fine System

function trafficSignal(signal) {
  let fine = 0;

  switch(signal) {
    case "red":
      fine = 1000;
      return `Stop! Fine: ₹${fine}`;
    case "yellow":
      fine = 500;
      return `Get Ready. Fine: ₹${fine}`;
    case "green":
      return "Go!";
    default:
      return "Invalid signal";
  }
}

console.log(trafficSignal("red"));

//Student Result Processing

const students = [
  { name: "A", mark: 95 },
  { name: "B", mark: 45 },
  { name: "C", mark: 80 },
  { name: "D", mark: 30 }
];

// Passed
const passed = students.filter(s => s.mark >= 50);

// Failed
const failed = students.filter(s => s.mark < 50);

// Grades
const grades = students.map(s => ({
  name: s.name,
  grade: s.mark >= 90 ? "A" :
         s.mark >= 75 ? "B" :
         s.mark >= 50 ? "C" : "F"
}));

console.log(passed, failed, grades);

//Online Food Delivery

function placeOrder(customerName, ...items) {
  console.log("Customer:", customerName);
  console.log("Items:", items);
  console.log("Total Items:", items.length);
}

placeOrder("Rahul", "Pizza", "Burger", "Coke");

//Bank Account System

let balance = 0;

function deposit(amount) {
  balance += amount;
  return balance;
}

function withdraw(amount) {
  balance -= amount;
  return balance;
}

function checkBalance() {
  return balance;
}

console.log(deposit(1000));
console.log(withdraw(300));
console.log(checkBalance());

//Movie Ticket Booking

let bookedSeats = [];

function bookSeat(seat) {
  if (!bookedSeats.includes(seat)) {
    bookedSeats.push(seat);
    console.log("Seat booked:", seat);
  } else {
    console.log("Seat already booked");
  }
}

bookSeat("A1");
bookSeat("A2");
bookSeat("A1");

console.log("Booked Seats:", bookedSeats);

//User Login Validation

function validate(username, password, email) {
  if (username.includes(" ")) {
    return "Username should not contain spaces";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters";
  }
  if (!email.includes("@")) {
    return "Invalid email";
  }
  return "Login Successful";
}

console.log(validate("rahul123", "password1", "test@gmail.com"));

//Product API Dashboard

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    // Titles
    data.forEach(p => console.log(p.title));

    // Above ₹1000 (~$12)
    const costly = data.filter(p => p.price > 12);

    // Count
    console.log("Total:", data.length);
    console.log("Costly:", costly);
  });

  //Birthday Day Finder

  function getDOBDetails(dob) {
  const date = new Date(dob);

  console.log("Day:", date.getDate());
  console.log("Month:", date.getMonth() + 1);
  console.log("Year:", date.getFullYear());
  console.log("Weekday:", date.toLocaleString("en-US", { weekday: "long" }));
}

getDOBDetails("2000-05-15");

//Netflix Subscription System

function netflixPlan(plan) {
  return plan === "Mobile" ? "480p, 1 device" :
         plan === "Basic" ? "720p, 1 device" :
         plan === "Standard" ? "1080p, 2 devices" :
         plan === "Premium" ? "4K, 4 devices" :
         "Invalid Plan";
}

console.log(netflixPlan("Premium"));

//Hospital Patient Management

const patients = [
  { id: 1, name: "A", critical: true },
  { id: 2, name: "B", critical: false },
  { id: 3, name: "C", critical: true }
];

// Critical
const criticalPatients = patients.filter(p => p.critical);

// Find by ID
const patient = patients.find(p => p.id === 2);

// Count
const totalPatients = patients.length;

console.log(criticalPatients, patient, totalPatients);

//Inventory Management System

const inv1 = [{ name: "Item1", qty: 10 }];
const inv2 = [{ name: "Item2", qty: 5 }];

// Merge
const merged = [...inv1, ...inv2];

// Destructuring
const [firstItem] = merged;
const { name, qty } = firstItem;

// Add new
const updated = [...merged, { name: "Item3", qty: 7 }];

console.log(merged, name, qty, updated);

//WhatsApp Group Management

let group = ["A", "B", "C"];

// Add
group.push("D");

// Remove last
group.pop();

// Add at beginning
group.unshift("Z");

// Remove first
group.shift();

// Insert at position
group.splice(1, 0, "X");

console.log(group);

