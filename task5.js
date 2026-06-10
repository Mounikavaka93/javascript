//Student Management System

var students = [
  { id: 1, name: "Sruthi", department: "CSE", mark: 85 },
  { id: 2, name: "Mounika", department: "ECE", mark: 92 },
  { id: 3, name: "Leela", department: "EEE", mark: 48 },
  { id: 4, name: "Meena", department: "CSE", mark: 76 },
  { id: 5, name: "Sudheer", department: "IT", mark: 66 }
];

// Display names
for (var s of students) {
  console.log(s.name);
}

// Total marks
var total = 0;
for (var s of students) {
  total += s.mark;
}
console.log("Total Marks:", total);

// Above 80
for (var s of students) {
  if (s.mark > 80) console.log("Above 80:", s.name);
}

// Grades
for (var s of students) {
  if (s.mark >= 90) console.log(s.name, "A");
  else if (s.mark >= 75) console.log(s.name, "B");
  else if (s.mark >= 50) console.log(s.name, "C");
  else console.log(s.name, "Fail");
}

// Function
function printStudent(stu) {
  console.log(stu.id, stu.name, stu.department, stu.mark);
}

//Employee Payroll System

var employees = [
  { id: 1, name: "Adi", salary: 25000, department: "HR" },
  { id: 2, name: "Anu", salary: 40000, department: "IT" },
  { id: 3, name: "Kruthwik", salary: 32000, department: "Finance" }
];

// Names
for (var e of employees) console.log(e.name);

// Total salary
var totalSalary = 0;
for (var e of employees) totalSalary += e.salary;
console.log("Total Salary:", totalSalary);

// Above 30000
for (var e of employees) {
  if (e.salary > 30000) console.log(e.name);
}

// Switch department
for (var e of employees) {
  switch (e.department) {
    case "HR": console.log("Human Resources"); break;
    case "IT": console.log("Tech Department"); break;
    case "Finance": console.log("Accounts"); break;
  }
}

// Callback
function payrollReport(callback) {
  callback();
}
payrollReport(function () {
  console.log("Payroll Generated");
});

//Food order system

var foods = [
  { id: 1, foodName: "Pizza", price: 250, category: "FastFood" },
  { id: 2, foodName: "Rice", price: 120, category: "Main" },
  { id: 3, foodName: "Burger", price: 180, category: "FastFood" }
];

// Names
for (var f of foods) console.log(f.foodName);

// Total
var total = 0;
for (var f of foods) total += f.price;
console.log("Total Menu:", total);

// Above 200
for (var f of foods) {
  if (f.price > 200) console.log(f.foodName);
}

// Switch
for (var f of foods) {
  switch (f.category) {
    case "FastFood": console.log("Quick Meal"); break;
    case "Main": console.log("Full Meal"); break;
  }
}

// Callback
function confirmOrder(cb) {
  cb();
}
confirmOrder(function () {
  console.log("Order Confirmed");
});

//Movie booking system

var movies = [
  { movieName: "Pedhi", ticketPrice: 200, availableSeats: 50, lang: "Tamil" },
  { movieName: "RRR", ticketPrice: 250, availableSeats: 0, lang: "Telugu" }
];

// Names
for (var m of movies) console.log(m.movieName);

// Total seats
var seats = 0;
for (var m of movies) seats += m.availableSeats;
console.log("Total Seats:", seats);

// Booking
for (var m of movies) {
  if (m.availableSeats > 0) console.log("Booking Available:", m.movieName);
  else console.log("Housefull:", m.movieName);
}

// Switch
for (var m of movies) {
  switch (m.lang) {
    case "Tamil": console.log("Kollywood"); break;
    case "Telugu": console.log("Tollywood"); break;
  }
}

// Callback
function book(cb) {
  cb();
}
book(function () {
  console.log("Ticket Booked");
});

//Hospital records

var patients = [
  { patientId: 1, patientName: "Subbaraidu", age: 65, disease: "Heart" },
  { patientId: 2, patientName: "Radha", age: 45, disease: "Diabetes" }
];

// Names
for (var p of patients) console.log(p.patientName);

// Count
console.log("Total Patients:", patients.length);

// Above 60
for (var p of patients) {
  if (p.age > 60) console.log(p.patientName);
}

// Switch
for (var p of patients) {
  switch (p.disease) {
    case "Heart": console.log("Cardiology"); break;
    case "Diabetes": console.log("Endocrinology"); break;
  }
}

// Callback
function appointment(cb) {
  cb();
}
appointment(function () {
  console.log("Appointment Confirmed");
});

//Library system

var books = [
  { bookId: 1, bookName: "JS Basics", author: "Raj", price: 600 },
  { bookId: 2, bookName: "Python", author: "Ravi", price: 400 }
];

// Names
for (var b of books) console.log(b.bookName);

// Total
var total = 0;
for (var b of books) total += b.price;
console.log("Total Value:", total);

// Above 500
for (var b of books) {
  if (b.price > 500) console.log(b.bookName);
}

// Switch
for (var b of books) {
  switch (b.bookName) {
    case "JS Basics": console.log("Programming"); break;
    case "Python": console.log("Programming"); break;
  }
}

// Issue function
function issueBook(name) {
  console.log(name + " issued");
}

//E-commerce system

var products = [
  { productId: 1, productName: "Laptop", price: 50000, stock: 5 },
  { productId: 2, productName: "Keyboard", price: 500, stock: 20 }
];

// Display
for (var p of products) console.log(p.productName);

// Inventory
var total = 0;
for (var p of products) total += p.price * p.stock;
console.log("Inventory:", total);

// Low stock
for (var p of products) {
  if (p.stock < 10) console.log(p.productName);
}

// Status
for (var p of products) {
  if (p.stock > 0) console.log("In Stock");
  else console.log("Out of Stock");
}

// Callback
function report(cb) {
  cb();
}
report(function () {
  console.log("Report Generated");
});

//college admission

var applicants = [
  { name: "Rakshitha", age: 18, percentage: 70, department: "CSE" },
  { name: "Jaidev", age: 17, percentage: 80, department: "ECE" }
];

// Names
for (var a of applicants) console.log(a.name);

// Eligibility
var count = 0;
for (var a of applicants) {
  if (a.age >= 18 && a.percentage >= 60) {
    count++;
    console.log(a.name, "Eligible");
  }
}
console.log("Total Eligible:", count);

// Switch
for (var a of applicants) {
  switch (a.department) {
    case "CSE": console.log("Computer Science"); break;
    case "ECE": console.log("Electronics"); break;
  }
}

// Callback
function admission(cb) {
  cb();
}
admission(function () {
  console.log("Admission Result Generated");
});

//Bus reservation

var passengers = [
  { passengerId: 1, name: "Sudiksha", seatNumber: 1, ticketPrice: 500 },
  { passengerId: 2, name: "Suvyuha", seatNumber: 2, ticketPrice: 500 }
];

// Names
for (var p of passengers) console.log(p.name);

// Total
var total = 0;
for (var p of passengers) total += p.ticketPrice;
console.log("Total Collection:", total);

// Seats
for (var p of passengers) console.log("Seat:", p.seatNumber);

// Switch
var busType = "AC";
switch (busType) {
  case "AC": console.log("Air Conditioned"); break;
  case "Non-AC": console.log("Normal"); break;
}

// Callback
function ticket(cb) {
  cb();
}
ticket(function () {
  console.log("Ticket Confirmed");
});

//mobile store

var mobiles = [
  { brand: "Oneplus", model: "Node", price: 30000, stock: 10 },
  { brand: "Redmi", model: "Note10", price: 15000, stock: 20 }
];

// Names
for (var m of mobiles) console.log(m.brand, m.model);

// Total
var total = 0;
for (var m of mobiles) total += m.price * m.stock;
console.log("Total Stock Value:", total);

// Above 20000
for (var m of mobiles) {
  if (m.price > 20000) console.log(m.model);
}

// Switch
for (var m of mobiles) {
  switch (m.brand) {
    case "Samsung": console.log("Premium"); break;
    case "Redmi": console.log("Budget"); break;
  }
}

// Callback
function sales(cb) {
  cb();
}
sales(function () {
  console.log("Sales Report Generated");
});






