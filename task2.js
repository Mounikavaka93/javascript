console.log("Student Result Checker");

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



console.log("Task 2: Employee Bonus Calculator");

let salary = 25000;
let bonus = salary * 0.10;
let finalSalary = salary + bonus;

console.log("Original Salary :", salary);
console.log("Bonus :", bonus);
console.log("Final Salary :", finalSalary);



console.log("Task 3: User Login Validation");

let email = "admin@gmail.com";
let password = "12345";

if (email === "admin@gmail.com" && password === "12345") {
    console.log("Login Success");
} else {
    console.log("Login Failed");
}



console.log("Task 4: Product Discount Calculator");

let price = 2000;
let finalAmount = price > 1000 ? price - (price * 0.20) : price;

console.log("Final Amount:", finalAmount);




console.log("Task 5: Array Product Management");

let products = ["Laptop","Mobile","Mouse","Keyboard"];

console.log("First Product:", products[0]);
console.log("Last Product:", products[products.length - 1]);
console.log("Total Products:", products.length);



console.log("Task 6: Employee Object");

let employee = {
    name: "Mounika",
    department: "frontend developer",
    salary: 30000
};

console.log("Employee Details:", employee);
console.log("Name:", employee.name);
console.log("Salary:", employee.salary);



console.log("Task 7: Shopping Cart Total"); 

let shirt = 500;
let pant = 1000;
let shoe = 1500;

let total = shirt + pant + shoe;
let discount = total * 0.10;
let finalAmt = total - discount;

console.log("Total Bill:", total);
console.log("Discount:", discount);
console.log("Final Amount after 10% discount:", finalAmt);



console.log("Task 8: Voting Eligibility Checker");

let age = 19;

if (age >= 18) {
    console.log("Eligible for Voting");
} else {
    console.log("Not Eligible");
}



console.log("Task 9: Increment Decrement Practice");

let a = 10;

a++;
console.log("After a++:", a);

++a;
console.log("After ++a:", a);

a--;
console.log("After a--:", a);

--a;
console.log("After --a:", a);



console.log("Task 10: Mini Employee Attendance System");

let isPresent = true;
let completedTask = true;

if (isPresent && completedTask) {
    console.log("Eligible for Salary");
} else {
    console.log("Not Eligible");
}



console.log("Bonus Company-Level Task");

let employeedetails = {
    id:101,
    name:"John",
    department:"Development",
    salary:35000,
    experience:2
}

let empbonus = employeedetails.salary * 0.10;
console.log("Employee ID:", employeedetails.id);
console.log("Employee Name:", employeedetails.name);
console.log("Employee Department:", employeedetails.department);
console.log("Employee Salary:", employeedetails.salary);
console.log("Employee Experience:", employeedetails.experience + " years");
console.log("Bonus:", empbonus);
console.log("Final Salary:", employeedetails.salary + empbonus);
console.log("Performance Status:", empbonus > 0 ? "Good" : "Poor");
