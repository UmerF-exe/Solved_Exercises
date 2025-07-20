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



// Chapter 14-16

// Q 01
// var students = [];


// Q 02
// var students = new Array();


// Q 03
// var stringArray = ["apple", "banana", "cherry"];


// Q 04
// var numberArray = [1, 2, 3, 4, 5];


// Q 05
// var booleanArray = [true, false, true];


// Q 06
// var mixedArray = ["apple", 42, true, "banana", 3.14];


// Q 07
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// document.writeln("<h1>Qualifications</h1>");
// document.writeln("<ol><li>" + qualifications[0] + "</li><li>" + qualifications[1] + "</li><li>" + qualifications[2] + "</li><li>" + qualifications[3] + "</li><li>" + qualifications[4] + "</li><li>" + qualifications[5] + "</li><li>" + qualifications[6] + "</li><li>" + qualifications[7] + "</li></ol>");


// Q 08
// var students = ["Michael", "John", "Tony"];
// var scores = [320, 230, 480];
// var totalMarks = 500;
// document.writeln("<p>Score of " + students[0] + " is " + scores[0] + ". Percentage: " + (scores[0] / totalMarks * 100) + "%</p>");
// document.writeln("<p>Score of " + students[1] + " is " + scores[1] + ". Percentage: " + (scores[1] / totalMarks * 100) + "%</p>");
// document.writeln("<p>Score of " + students[2] + " is " + scores[2] + ". Percentage: " + (scores[2] / totalMarks * 100) + "%</p>");


// Q 09
// var colors = ["Red", "Green", "Blue"];
// document.writeln("<h1>Colors</h1>");
// document.writeln("<p>Initial colors: " + colors + "</p>");

// // a)
// var addColorStart = prompt("Enter a color to add at the beginning:");
// if (addColorStart) {
//     colors.unshift(addColorStart);
//     document.writeln("<p>Colors after adding at the beginning: " + colors + "</p>");
// }

// // b)
// var addColorEnd = prompt("Enter a color to add at the end:");
// if (addColorEnd) {
//     colors.push(addColorEnd);
//     document.writeln("<p>Colors after adding at the end: " + colors + "</p>");
// }

// // c)
// colors.unshift("Purple", "Orange");
// document.writeln("<p>Colors after adding two colors at the beginning: " + colors + "</p>");

// // d)
// colors.shift();
// document.writeln("<p>Colors after removing the first color: " + colors + "</p>");

// // e)
// colors.pop();
// document.writeln("<p>Colors after removing the last color: " + colors + "</p>");

// // f)
// var index = +prompt("Enter the index at which you want to add a color:");
// var colorToAdd = prompt("Enter the color to add:");
// colors.splice(index, 0, colorToAdd);
// document.writeln("<p>Colors after adding " + colorToAdd + " at index " + index + ": " + colors + "</p>");

// // g)
// var indexToRemove = +prompt("Enter the index of the color you want to remove:");
// var numberOfColorsToRemove = +prompt("Enter the number of colors to remove:");
// colors.splice(indexToRemove, numberOfColorsToRemove);
// document.writeln("<p>Colors after removing " + numberOfColorsToRemove + " color(s) from index " + indexToRemove + ": " + colors + "</p>");


// Q 10
// var studentScores = [320, 230, 480, 120];
// document.writeln("<p>Scores of students: " + studentScores + " </p>");
// document.writeln("<p>Ordered Scores of students: " + studentScores.sort() + " </p>");


// Q 11
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.writeln("<p>Cities List: " + cities + " </p>");
// document.writeln("<p>Selected Cities List: " + cities.slice(2,5) + " </p>");


// Q 12
// var arr = ["This", "is", "my", "cat"];
// document.writeln("<p>Array: " + arr + "</p>");
// document.writeln("<p>String: " + arr.join(" ") + "</p>");


// Q 13
// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.writeln("<h1>Devices: </h1>" + devices);
// document.writeln("<p>Out: </p>" + devices.shift());
// document.writeln("<p>Out: </p>" + devices.shift());
// document.writeln("<p>Out: </p>" + devices.shift());
// document.writeln("<p>Out: </p>" + devices.shift());


// Q 14
// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.writeln("<h1>Devices: </h1>" + devices);
// document.writeln("<p>Out: </p>" + devices.pop());
// document.writeln("<p>Out: </p>" + devices.pop());
// document.writeln("<p>Out: </p>" + devices.pop());
// document.writeln("<p>Out: </p>" + devices.pop());


// Q 15
// var phoneBrands = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.writeln("<h1>Phone Brands</h1>");
// document.writeln("<select><option>" + phoneBrands[0] + "</option><option>" + phoneBrands[1] + "</option><option>" + phoneBrands[2] + "</option><option>" + phoneBrands[3] + "</option><option>" + phoneBrands[4] + "</option><option>" + phoneBrands[5] + "</option></select>");


// Palindrome Number
// var number = prompt("Enter a number to check if it is a palindrome:");
// var reversedNumber = "";
// for (var i = number.length - 1; i >= 0; i--){
//     reversedNumber += number[i];
// }
// if(reversedNumber === number) {
//     alert(number + " is palindrome.");
// }
// else {
//     alert(number + " is not palindrome.");
// }



// Chapter 17-20

// Q 01
// var multiArray = [{}, {}, {}];


// Q 02
// var multiArray = [[0, 1, 2, 3],[1, 0, 1, 2],[2, 1, 0, 1]];
// for (var i = 0; i < multiArray.length; i++) {
//     for (var j = 0; j < multiArray[i].length; j++) {
//         document.writeln(multiArray[i][j] + " ");
//     }
//     document.writeln("<br>");
// }


// Q 03
// for (var i = 1; i <= 10; i++) {
//     document.writeln(i + "<br>");
// }


// Q 04
// var tableNumber = +prompt("Enter a number for multiplication table:");
// var tableLength = +prompt("Enter length of table:");
// if (tableNumber && tableLength){
//     document.writeln("<h1>Multiplication Table of " + tableNumber + "</h1>");
//     document.writeln("<h1>Length of Table: " + tableLength + "</h1>");
//     for (var i = 1; i <= tableLength; i++) {
//         document.writeln("<p>" + tableNumber + " x " + i + " = " + (tableNumber * i) + "</p>");
//     }
// }


// Q 05
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.writeln(fruits[i] + "<br>");
// }
// for (var i = 0; i < fruits.length; i++){
//     document.writeln("Element at index " + i + " is " + fruits[i] + "<br>");
// }


// Q 06

// // a)
// document.writeln("<h1>Counting:</h1>");
// for (var i = 1; i <= 15; i++){
//     document.writeln(i + ", ");
// }

// // b)
// document.writeln("<h1>Reverse Counting:</h1>");
// for (var i = 10; i >= 1; i--){
//     document.writeln(i + ", ");
// }

// // c)
// document.writeln("<h1>Even:</h1>");
// for (var i = 0; i <= 20; i+= 2){
//     document.writeln(i + ", ");
// }

// // d)
// document.writeln("<h1>Odd:</h1>");
// for (var i = 1; i <= 19; i+= 2){
//     document.writeln(i + ", ");
// }

// // e)
// document.writeln("<h1>Series:</h1>");
// for (var i = 2; i <= 20; i+= 2){
//     document.writeln(i + "k, ");
// }


// Q 07
// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order?").toLowerCase();
// var flag = false;
// for (var i = 0; i < bakeryItems.length; i++){
//     if (bakeryItems[i] === userInput){
//         flag = true;
//         break;
//     }
//     else {
//         flag = false;
//         continue;
//     }
// }
// if (flag){
//     document.writeln(userInput + " is available at index " + i + " in our bakery.");
// }
// else{
//     document.writeln("We are sorry. " + userInput + " is not available  in our bakery.");
// }


// Q 08
// var numberItems = [24, 53, 78, 91, 12];
// var largestNumber = numberItems[0];
// for (var i = 1; i < numberItems.length; i++) {
//     if (numberItems[i] > largestNumber) {
//         largestNumber = numberItems[i];
//     }
// }
// document.writeln("<p>Array items: " + numberItems + "</p>");
// document.writeln("<p>The largest number is: " + largestNumber + "</p>");


// Q 09
// var numberItems = [24, 53, 78, 91, 12];
// var smallestNumber = numberItems[0];
// for (var i = 1; i < numberItems.length; i++) {
//     if (numberItems[i] < smallestNumber) {
//         smallestNumber = numberItems[i];
//     }
// }
// document.writeln("<p>Array items: " + numberItems + "</p>");
// document.writeln("<p>The largest number is: " + smallestNumber + "</p>");


// Q 10
// for (var i = 5; i <= 100; i += 5) {
//     document.writeln(i + ", ");
// }


// Add missing number in the sorted array
// var numbers = [11, 12, 15, 19, 20];
// document.writeln("<p>Original Array: " + numbers + "</p>");
// for (var i = 0 ; i < numbers.length; i++){
//     var difference = numbers[i + 1] - numbers[i];
//     if (difference > 1){
//         for (var j = 1; j < difference; j++){
//             numbers.splice(i + j, 0, numbers[i] + j)
//         }
//     }
// }
// document.writeln("<p>Array after adding missing numbers: " + numbers + "</p>");


// Capitalize first letter of each word in a string
// var str = "the quick brown fox jumps over the lazy dog";
// var result = "";
// var flag = false;
// for (var i = 0; i < str.length; i++) {
//     if(i === 0){
//         result += str[i].toUpperCase();
//     }
//     else if (str[i] === " ") {
//         result += str[i];
//         flag = true;
//     } else {
//         if (flag) {
//             result += str[i].toUpperCase();
//             flag = false;
//         } else {
//             result += str[i];
//         }
//     }
// }
// console.log(result);


// Head & Tail Game
// var enteredChoise = prompt("Enter your choice (Heads or Tails):").toLowerCase();
// var randomNumber = Math.round(Math.random() * 2);
// if (enteredChoise === "heads" || enteredChoise === "head") {
//     enteredChoise = 1;
//     if(enteredChoise === randomNumber){
//     alert("Congrats! It's Heads. You won the toss.");
//     }
//     else{
//         alert("Oops! It's Tail.")
//     }
// }
// else if(enteredChoise === "tails" || enteredChoise === "tail"){
//     enteredChoise = 2;
//     if(enteredChoise === randomNumber){
//     alert("Congrats! It's Tail. You won the toss.");
//     }
//     else{
//         alert("Oops! It's Head.")
//     }
// }
// else{
//     alert("Kindly enter correct choice.")

// }


// Chapters 21 - 25

// Q 01
// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");
// var fullName = firstName + " " + lastName;
// alert(fullName + ", Welcome to my site.!");


// Q 02
// var favoritePhone = prompt("Enter the name of your favorite mobile phone model:");
// document.writeln("<p>My favorite phone is: " + favoritePhone + "</p>");
// document.writeln("<p>Length of String: " + favoritePhone.length + "</p>");


// Q 03
// var str = "Pakistani";
// document.writeln("<p>String: " + str + "</p>");
// document.writeln("<p>Index of 'n' is: " + str.indexOf("n"));


// Q 04
// var str = "Hello World";
// document.writeln("<p>String: " + str + "</p>");
// document.writeln("<p>Last Index of 'l' is: " + str.lastIndexOf("l"));

// Q 05
// var str = "Pakistani";
// document.writeln("<p>String: " + str + "</p>");
// document.writeln("<p>Character at index 3 is: " + str.charAt(3));


// Q 06
// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");
// var fullName = firstName.concat(" ", lastName);
// alert(fullName + ", Welcome to my site.!");


// Q 07
// var str = "Hyderabad";
// document.writeln("<p>String: " + str + "</p>");
// document.writeln("<p>After replacement: " + str.replace("Hyder", "Islam"));


// Q 08
// var message = "Ali and Sami are best friends. They play cricket and football together";
// document.writeln("<p>Message: " + message + "</p>");
// document.writeln("<p>After replacement: " + message.replaceAll("and","&"));


// Q 09
// var str = "472";
// document.writeln("<p>Value: " + str + "</p>");
// document.writeln("<p>Type: " + typeof(str));
// document.writeln("<p>Value: " + str + "</p>");
// document.writeln("<p>Type: " + typeof(Number(str)));


// Q 10
// var userInput = prompt("Enter any word / sentence");
// document.writeln("<p>User Input: " + userInput + "</p>");
// document.writeln("<p>Upper Case: " + userInput.toUpperCase());


// Q 11
// var userInput = prompt("Enter any word / sentence");
// document.writeln("<p>User Input: " + userInput + "</p>");
// var result = "";
// var flag = true;
// for (var i = 0; i < userInput.length; i++){
//     if(flag){
//         result += userInput[i].toUpperCase();
//         flag = false;
//     }
//     else if(userInput[i] === " "){
//         result += userInput[i];
//         flag = true;
//     }
//     else{
//         result += userInput[i].toLowerCase();
//     }
// }
// document.writeln("<p>Title Case: " + result);


// Q 12
// var num = 35.36;
// document.writeln("<p>Number: " + num + "</p>");
// var str = String(num);
// str = str.slice(0,2) + str.slice(3)
// document.writeln("<p>Result: " + str);

// Q 13
var userName = prompt("Enter the username: ");
for (var i = 0; i < userName.length; i++){
    if(userName[i] === "!" || userName[i] === "," || userName[i] === "." || userName[i] === "@"){
        alert("Please enter the correct username");
    }
}


