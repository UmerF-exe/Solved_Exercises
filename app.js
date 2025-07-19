// Chapter 01

// Q 01
// alert("Welcome to my site!");


// Q 02
// alert("Error! Please enter the correct password");


// Q 03
// alert("Welcome to JS Land... \n Happy Coding!");


// Q 04
// alert("Welcome to JS Land...");
// alert("Happy Coding.!");


// Q 05
// alert("Hello... I can run JS through my web browser's console.");



// Chapter 02

// Q 01
// var username;


// Q 02
// var myName = "Umer Farooque";


// Q 03
// var message;
// message = "Hello World";
// alert(message);


// Q 04
// var name = "John Doe";
// var age = "15 years old";
// var course = "Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(course);


// Q 05
// var pizza = "PIZZA \nPIZZ \nPIZ \nPI \nP";
// alert(pizza);


// Q 06
// var email = "example@gmail.com";
// alert("My email address is " + email);


// Q 07
// var book = "A smarter way to learn JavaScript";
// alert(book);


// Q 08
// document.writeln("<h1>Yah! I can write HTML content through JavaScript</h1>");


// Q 09
// var text = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(text);



// Chapter 03

// Q 01
// var age = 22;
// alert("I am " + age + " years old.");


// Q 02
// var n = 14;
// alert("You have visited this site " + n + " times.");


// Q 03
// var birthYear = 2003;
// document.writeln("<p>My birth year is " + birthYear + "</p>");
// document.writeln("<p>Data type of my declared variable is number</p>");


// Q 04
// var visitorName = "John Doe";
// var productTitle = "T-Shirt";
// var quantity = 5;
// document.writeln("<p><b>" + visitorName + "</b> ordered <b>" + quantity + " " + productTitle + "</b>(s) on XYZ Clothng Store.</p>");



// Chapter 04

// Q 01
// var var1, var2, var3;


// Q 02
// Legal variable names:
// var name, age, $price, _isValid, firstName;
// Illegal variable names:
// var 1name, @age, first-name, my name, var#1;


// Q 03
// document.writeln("<h1>Rules for naming JS variables</h1>");
// document.writeln("<p>Variable names can only contain letters, numbers, dollar signs, and underscores. \nFor example $my_1stVariable</p>");
// document.writeln("<p>Variable names must begin with a letter, dollar sign, or underscore. \nFor example $name, _name or name</p>");
// document.writeln("<p>Variable names are case sensitive.</p>");
// document.writeln("<p>Variable names should not be JS keywords.</p>");
// document.writeln("<p>Variable names should not contain spaces.</p>");



// Chapter 05

// Q 01
// var num1 = 3;
// var num2 = 5;
// var sum = num1 + num2;
// document.writeln("<p>Sum of " + num1 + " and " + num2 + " is " + sum + "</p>");


// Q 02
// var num1 = 5;
// var num2 = 3;
// var difference = num1 - num2;
// var product = num1 * num2;
// var quotient = num1 / num2;
// var modulus = num1 % num2;
// document.writeln("<p>Difference of " + num1 + " and " + num2 + " is " + difference + "</p>");
// document.writeln("<p>Product of " + num1 + " and " + num2 + " is " + product + "</p>");
// document.writeln("<p>Quotient of " + num1 + " and " + num2 + " is " + quotient + "</p>");
// document.writeln("<p>Modulus of " + num1 + " and " + num2 + " is " + modulus + "</p>");  


// Q 03
// var variable;
// document.writeln("<p>Value after variable declaration is: " + variable + "</p>");
// variable = 5;
// document.writeln("<p>Initial value: " + variable + "</p>");
// variable++;
// document.writeln("<p>Value after increment is: " + variable + "</p>");
// variable += 7;
// document.writeln("<p>Value after addition is: " + variable + "</p>");
// variable--;
// document.writeln("<p>Value after decrement is: " + variable + "</p>");
// variable %= 3;
// document.writeln("<p>The remainder is: " + variable + "</p>");


// Q 04
// var ticketPrice = 600;
// var numberOfTickets = 5;
// var totalCost = ticketPrice * numberOfTickets;
// document.writeln("<p>Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR</p>");


// Q 05
// var tableNumber = 4;
// var num = 1;
// document.writeln("<h1>Multiplication Table of " + tableNumber + "</h1>");
// document.writeln("<p>" + tableNumber + " x " + num + " = " + (tableNumber * num++) + "</p>");
// document.writeln("<p>" + tableNumber + " x " + num + " = " + (tableNumber * num++) + "</p>");
// document.writeln("<p>" + tableNumber + " x " + num + " = " + (tableNumber * num++) + "</p>");
// document.writeln("<p>" + tableNumber + " x " + num + " = " + (tableNumber * num++) + "</p>");
// document.writeln("<p>" + tableNumber + " x " + num + " = " + (tableNumber * num++) + "</p>");
// document.writeln("<p>" + tableNumber + " x " + num + " = " + (tableNumber * num++) + "</p>");
// document.writeln("<p>" + tableNumber + " x " + num + " = " + (tableNumber * num++) + "</p>");
// document.writeln("<p>" + tableNumber + " x " + num + " = " + (tableNumber * num++) + "</p>");
// document.writeln("<p>" + tableNumber + " x " + num + " = " + (tableNumber * num++) + "</p>");
// document.writeln("<p>" + tableNumber + " x " + num + " = " + (tableNumber * num) + "</p>");


// Q 06
// var celsius = 25;
// var fahrenheitScale = (celsius * 9/5) + 32;
// document.writeln("<p>" + celsius + "°C is " + fahrenheitScale + "°F</p>");
// var fahrenheit = 70;
// var celsiusScale = (fahrenheit - 32) * 5/9;
// document.writeln("<p>" + fahrenheit + "°F is " + celsiusScale + "°C</p>");


// Q 07
// var item1Price = 650;
// var item2Price = 100;
// var item1Quantity = 3;
// var item2Quantity = 7;
// var shippingCharges = 100;
// var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
// document.writeln("<h1>Shopping Cart</h1>");
// document.writeln("<p>Price of item 1 is " + item1Price + "</p>");
// document.writeln("<p>Quantity of item 1 is " + item1Quantity + "</p>");
// document.writeln("<p>Price of item 2 is " + item2Price + "</p>");
// document.writeln("<p>Quantity of item 2 is " + item2Quantity + "</p>");
// document.writeln("<p>Shipping Charges " + shippingCharges + "</p>");
// document.writeln("<p>Total cost of your order is " + totalCost + "</p>");


// Q 08
// var totalMarks = 980;
// var obtainedMarks = 804;
// var percentage = (obtainedMarks / totalMarks) * 100;
// document.writeln("<h1>Marks Sheet</h1>");
// document.writeln("<p>Total Marks: " + totalMarks + "</p>");
// document.writeln("<p>Marks Obtained: " + obtainedMarks + "</p>");
// document.writeln("<p>Percentage: " + percentage + "%</p>");


// Q 09
// var usDollar = 104.80;
// var saudiRiyal = 28;
// var totalCurrency = (10 * usDollar) + (25 * saudiRiyal);
// document.writeln("<h1>Currency in PKR</h1>");
// document.writeln("<p>Total Currency in PKR: " + totalCurrency + "</p>");


// Q 10
// var num = 5;
// var result = ((num + 5) * 10) / 2;
// document.writeln("<p>Result: " + result + "</p>");


// Q 11
// var currentYear = 2025;
// var birthYear = 2003;
// var age = currentYear - birthYear;
// document.writeln("<h1>Age Calculator</h1>");
// document.writeln("<p>Current Year: " + currentYear + "</p>");
// document.writeln("<p>Birth Year: " + birthYear + "</p>");
// document.writeln("<p>Your Age: " + age + "</p>");


// Q 12
// var radius = 20;
// var pi = 3.142;
// document.writeln("<h1>Geometrizer</h1>");
// document.writeln("<p>Radius of circle is: " + radius + " </p>");
// document.writeln("<p>Circumference is: " + 2 * pi * radius + " </p>");
// document.writeln("<p>Area is: " + pi * radius * radius + " </p>");


// Q 13
// var favoriteSnap = "Chocolate Chip";
// var currentAge = 22;
// var maximumAge = 63;
// var snapsPerDay = 5;
// document.writeln("<h1>The Lifetime Supply Calculator</h1>");
// document.writeln("<p>Favorite Snap: " + favoriteSnap + " </p>");
// document.writeln("<p>Current Age: " + currentAge + " </p>");
// document.writeln("<p>Estimated Maximum Age: " + maximumAge + " </p>");
// document.writeln("<p>Amount of snacks per day: " + snapsPerDay + " </p>");
// document.writeln("<p>You will need " + (maximumAge - currentAge) * snapsPerDay + " " + favoriteSnap + " to last you until the ripe old age of " + maximumAge + " </p>");



// Chapter 06-09

// Q 01
// var a = 10;
// document.writeln("<h1>Result: </h1>");
// document.writeln("<p>The value of a is: " + a + " </p>");
// document.writeln("<p>The value of ++a is: " + ++a + " </p>");
// document.writeln("<p>Now the value of a is: " + a + " </p>");
// document.writeln("<p>The value of a++ is: " + a++ + " </p>");
// document.writeln("<p>Now the value of a is: " + a + " </p>");
// document.writeln("<p>The value of --a is: " + --a + " </p>");
// document.writeln("<p>Now the value of a is: " + a + " </p>");
// document.writeln("<p>The value of a-- is: " + a-- + " </p>");
// document.writeln("<p>Now the value of a is: " + a + " </p>");


// Q 02
// var a = 2, b = 1;
// document.writeln("<p>a is: " + a + " </p>");
// document.writeln("<p>b is: " + b + " </p>");
// var result = --a - --b + ++b + b--;
// document.writeln("<p>Result is: " + result + " </p>");


// Q 03
// var userName = prompt("Enter your name:");
// alert("Welcome " + userName + "!");


// Q 04
// var tableNumber = prompt("Enter a number for multiplication table:", 5);
// var num = 1;
// if (tableNumber) {
//     document.writeln("<h1>Multiplication Table of " + tableNumber + "</h1>");
//     document.writeln("<p>" + tableNumber + " x " + num + " = " + (tableNumber * num++) + "</p>");
//     document.writeln("<p>" + tableNumber + " x " + num + " = " + (tableNumber * num++) + "</p>");
//     document.writeln("<p>" + tableNumber + " x " + num + " = " + (tableNumber * num++) + "</p>");
//     document.writeln("<p>" + tableNumber + " x " + num + " = " + (tableNumber * num++) + "</p>");
//     document.writeln("<p>" + tableNumber + " x " + num + " = " + (tableNumber * num++) + "</p>");
//     document.writeln("<p>" + tableNumber + " x " + num + " = " + (tableNumber * num++) + "</p>");
//     document.writeln("<p>" + tableNumber + " x " + num + " = " + (tableNumber * num++) + "</p>");
//     document.writeln("<p>" + tableNumber + " x " + num + " = " + (tableNumber * num++) + "</p>");
//     document.writeln("<p>" + tableNumber + " x " + num + " = " + (tableNumber * num++) + "</p>");
//     document.writeln("<p>" + tableNumber + " x " + num + " = " + (tableNumber * num) + "</p>");
// }


// Q 05
// var sub1 = prompt("Enter first subject name:");
// var sub2 = prompt("Enter second subject name:");
// var sub3 = prompt("Enter third subject name:");
// var totalMarks = 100;
// var marks1 = +prompt("Enter marks obtained in " + sub1 + ":");
// var marks2 = +prompt("Enter marks obtained in " + sub2 + ":");
// var marks3 = +prompt("Enter marks obtained in " + sub3 + ":");
// var totalMarksObtained = marks1 + marks2 + marks3;
// var percentage = (totalMarksObtained / (totalMarks * 3)) * 100;
// document.writeln("<table>");
// document.writeln("<tr><th>Subject</th><th>Total Marks</th><th>Marks Obtained</th><th>Percentage</th></tr>");
// document.writeln("<tr><td>" + sub1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td><td>" + (marks1 / totalMarks * 100) + "%</td></tr>");
// document.writeln("<tr><td>" + sub2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td><td>" + (marks2 / totalMarks * 100) + "%</td></tr>");
// document.writeln("<tr><td>" + sub3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td><td>" + (marks3 / totalMarks * 100) + "%</td></tr>");
// document.writeln("<tr><td></d><td>" + totalMarks * 3 + "</td><td>" + totalMarksObtained + "</td><td>" + percentage + "%</td></tr>");
// document.writeln("</table>");



// Chapter 09-11

// Q 01
// var city = prompt("Enter your city name:");
// if (city.toLowerCase() === "karachi"){
//     alert("Welcome to the city of lights!");
// }


// Q 02
// var gender = prompt("Enter your gender");
// if(gender.toLowerCase() === "male") {
//     alert("Good Morning Sir");
// }
// if(gender.toLowerCase() === "female") {
//     alert("Good Morning Ma'am");
// }


// Q 03
// var signalColor = prompt("Enter traffic signal color (red, yellow, green):");
// if (signalColor.toLowerCase() === "red") {
//     alert("Must Stop");
// }
// if (signalColor.toLowerCase() === "yellow") {
//     alert("Ready to move");
// }
// if (signalColor.toLowerCase() === "green") {
//     alert("Move now");
// }


// Q 04
// var fuel = +prompt("Enter remaining fuel in liters:");
// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }


// Q 05

// // a)
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// // b)
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// // c)
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }

// // d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }

// // e)
// if (true) {
//     alert("True");
// }
// if (false){
//     alert("False");
// }

// // f)
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }


// Q 06
// var totalMarks = +prompt("Enter total marks:");
// var obtainedMarks = +prompt("Enter obtained marks:");
// var percentage = (obtainedMarks / totalMarks) * 100;
// document.writeln("<h1>Marks Sheet</h1>");
// document.writeln("<p>Total Marks: " + totalMarks + "</p>");
// document.writeln("<p>Marks Obtained: " + obtainedMarks + "</p>");
// document.writeln("<p>Percentage: " + percentage + "%</p>");
// if (percentage >= 80) {
//     document.writeln("<p>Grade: A-one</p>");
//     document.writeln("<p>Remarks: Excellent</p>");
// }
// if (percentage >= 70 && percentage < 80) {
//     document.writeln("<p>Grade: A</p>");
//     document.writeln("<p>Remarks: Good</p>");
// }
// if (percentage >= 60 && percentage < 70) {
//     document.writeln("<p>Grade: B</p>");
//     document.writeln("<p>Remarks: You need to improve</p>");
// }
// if (percentage < 60) {
//     document.writeln("<p>Grade: Fail</p>");
//     document.writeln("<p>Remarks: Sorry</p>");
// }


// Q 07
// var secretNumber = 7;
// var userGuess = +prompt("Guess the secret number (between 1 and 10):");
// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer.");
// }
// if (userGuess === secretNumber + 1) {
//     alert("Close enough to the correct answer.");
// }


// Q 08
// var number = +prompt("Enter a number to check if it is divisible by 3:");
// if (number % 3 === 0) {
//     alert("The number " + number + " is divisible by 3.");
// }


// Q 09
// var number = +prompt("Enter a number to check if it is even or odd:");
// if (number % 2 === 0) {
//     alert("The number " + number + " is even.");
// }
// if (number % 2 !== 0) {
//     alert("The number " + number + " is odd.");
// }


// Q 10
// var temperature = +prompt("Enter the temperature in Celsius:");
// if (temperature > 40) {
//     alert("It is too hot outside.");
// }
// if (temperature > 30 && temperature <= 40) {
//     alert("The weather today is normal.");
// }
// if (temperature > 20 && temperature <= 30) {
//     alert("Today's weather is cool.");
// }
// if (temperature > 10 && temperature <= 20) {
//     alert("“OMG! Today’s weather is so Cool.”.");
// }   


// Q 11
// var num1 = +prompt("Enter first number:");
// var num2 = +prompt("Enter second number:");
// var operator = prompt("Enter operator (+, -, *, /, %):");
// var result;
// if (operator === "+") {
//     result = num1 + num2;
// }
// if (operator === "-") {
//     result = num1 - num2;
// }
// if (operator === "*") {
//     result = num1 * num2;
// }
// if (operator === "/"){
//     result = num1 / num2;
// }
// if (operator === "%"){
//     result = num1 % num2;
// }
// alert("Result: " + result);


// Chapter 12-13

// Q 01
// var char = prompt("Enter a character:");
// if (char >= 'A' && char <= 'Z') {
//     alert("You entered an uppercase letter. " + char);
// }
// else if (char >= 'a' && char <= 'z') {
//     alert("You entered a lowercase letter. " + char);
// } 
// else if (Number(char) >= 0) {
//     alert("You entered a digit. " + char);
// } else {
//     alert("You entered a special character. " + char);
// }


// Q 02
// var num1 = +prompt("Enter first number:");
// var num2 = +prompt("Enter second number:");
// if (num1 > num2) {
//     alert(num1 + " is greater than " + num2);
// }
// else if (num1 < num2) {
//     alert(num2 + " is greater than " + num1);
// } else {
//     alert("Both numbers are equal.");
// }


// Q 03
// var number = +prompt("Enter a number:");
// if (number > 0) {
//     console.log("The entered number " + number + " is positive number.");
// }
// else if (number < 0) {
//     console.log("The entered number " + number + " is negative number.");
// }
// else {
//     console.log("The number is zero.");
// }


// Q 04
// var char = prompt("Enter a character to check whether it is vowel or not:");
// if (char.length === 1 && (char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' || char.toLowerCase() === 'o' || char.toLowerCase === 'u')){
//     console.log("True");
// }
// else {
//     console.log("False");
// }


// Q 05
// var password = "password123";
// var userInput = prompt("Enter your password:");
// if (userInput === "") {
//     alert("Please enter your password.");
// }
// else if (userInput === password) {
//     alert("Correct! The password you entered matches the original password.");
// } else {
//     alert("Incorrect password.");
// }


// Q 06
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// }
// else{
//     greeting = "Good evening";
// }
// alert(greeting);


// Q 07
// var currentTime = prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");
// if (currentTime >= "0000" && currentTime < 1200) {
//     alert("Good Morning!");
// }
// else if (currentTime >= 1200 && currentTime < 1700) {
//     alert("Good Afternoon!");
// }
// else if (currentTime >= 1700 && currentTime < 2100) {
//     alert("Good Evening!");
// }
// else if (currentTime >= 2100 && currentTime <= 2359) {
//     alert("Good Night!");
// }
// else {
//     alert("Invalid time format. Please enter a valid time in 24-hour format.");
// }



