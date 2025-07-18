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



