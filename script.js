// Chapters 43 - 48

// Q 01
// function linkAlert(){
//     alert("This is an alert on link click");
// }


// Q 02
// function linkAlert(){
//     alert("Thanks for purchasing mobile phones with us.");
// }


// Q 03
// var students = [[1, "Ali", "CS"],[2, "Sara", "SE"],[3, "Ahmed", "IT"],[4, "Zara", "CS"],[5, "Hassan", "CE"],[6, "Fatima", "EE"],[7, "Bilal", "CS"],[8, "Ayesha", "SE"],[9, "Usman", "CE"],[10, "Maria", "IT"]];
// var table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
//   for (var i = 0; i < students.length; i++) {
//     var row = table.insertRow();
//     for (var j = 0; j < 3; j++) {
//       var cell = row.insertCell();
//       cell.innerHTML = students[i][j];
//     }
//     var cellDelete = row.insertCell();
//     var btn = document.createElement("button");
//     btn.innerHTML = "Delete";
//     btn.onclick = function() {
//       var r = this.parentNode.parentNode;
//       r.parentNode.removeChild(r);
//     };
//     cellDelete.appendChild(btn);
// }


// Q 04
// function swapImage(event){
//     if(event.type === "mouseover"){
//         event.target.src = "Images/redme13.jpeg";
//     }
//     else{
//         event.target.src = "Images/samsung_galaxy_s24.jpeg";
//     }
// }


// Q 05
// var count = document.getElementById("count");
// var countValue = 0;
// function increaseCount(){
//     count.textContent = ++countValue;
// }
// function decreaseCount(){
//     count.textContent = --countValue;
// }


// Chapters 49 -52

// Q 01
// var form = document.getElementById("form");
// var body = document.getElementById("body");
// var table = document.getElementById("formRecords");

// function addrow(){
//     var firstName = document.getElementById("firstName").value;
//     var lastName = document.getElementById("lastName").value;
//     var email = document.getElementById("email").value;
//     var contact = document.getElementById("contact").value;
//     var birthDate = document.getElementById("birthDate").value;
//     var gender = document.getElementById("gender").value;
//     var password = document.getElementById("password").value;
//     var confirmPassword = document.getElementById("confirmPassword").value;

//     form.style.display = "none";
//     table.style.visibility = "visible";
//     body.innerHTML = "<tr><td>" + firstName + "</td><td>" + lastName + "</td><td>" + email + "</td><td>" + contact + "</td><td>" + birthDate + "</td><td>" + gender + "</td><td>" + password + "</td><td>" + confirmPassword + "</td></tr>";
// }


// Q 02
// var p = "In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which takes student’s details and show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row."
// var para = document.getElementById("para");
// para.innerText = p.slice(0,91) + "....";
// function expand(){
//     para.innerText = p;
// }


// Q 03
// var form = document.getElementById("form");
// var table = document.getElementById("table");
// var body = document.getElementById("body");

// function addRow(){
//     var name = document.getElementById("name").value;
//     var rollNo = document.getElementById("roll").value;
//     var cgpa = document.getElementById("cgpa").value;
    
//     form.style.display = "none";
//     table.style.display = "block";
//     body.innerHTML = "<tr><td>" + name + "</td><td>" + rollNo + "</td><td>" + cgpa + "</td><td><button onclick = 'displayForm()'>Edit</button><button onclick='deleteRow()'>Delete</button></td></tr>";
// }
// function displayForm(){
//     form.style.display = "block";
//     table.style.display = "none";
// }
// function deleteRow(){
//     body.style.display = "none";
// }



// Bracket Balanced

// function bracketsBalanced(){
//     var input  = "({[}]})";
// // var input = prompt("Enter the set of any brackets:");
// var arr = [];
// for (var i = 0; i < input.length; i++){
//     var x = input[i];
//     if (x === "(" || x === "{" || x === "["){
//         arr.push(x);
//         continue;
//     }
//     if(arr.length === 0){
//         return "Not Balanced";
//     }
//     var check ;
//     switch(x){
//         case ")":
//             check = arr.pop();
//             if(check == "}" || check == "]"){
//                 return false;
//             }
//         break;
//         case "}":
//             check = arr.pop();
//             if(check == ")" || check == "]"){
//                 return false;
//             }
//         break;
//         case "]":
//             check = arr.pop();
//             if(check == ")" || check == "}"){
//                 return false;
                
//             }
//         break;
//     }
// }
// if(arr.length){
//     return "Not Balanced";
// }
// else{
//     return "Balanced";
// }
// }

// console.log(bracketsBalanced());


// Objects Practice

// var cars = {
//     Honda: {
//         Civic: {
//             model: "ABC 2012",
//             type: "hybrid",
//             price: "1200$"
//         },
//         City: {
//             model: "ABC 2012",
//             type: "manual",
//             price: "1150$"
//         }
//     },
//     Toyota: {
//         Corolla: {
//             model: "XYZ 2016",
//             type: "manual",
//             price: "800$"
//         },
//         Alto: {
//             model: "XYZ 2021",
//             type: "hybrid",
//             price: "850$"
//         }
//     }
// }

// console.log(cars);
// cars.Toyota.Mehran = {
//     model: "PQR 123",
//     type: "manual",
//     price: "600$"
// }

// console.log(cars);

// Object Constructor

// Hosting Plans

// function HostingPlans(name, price, space, transferRate, pages){
//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.transferRate = transferRate;
//     this.pages = pages;
// }

// console.log(new HostingPlans("Basic", "3.99$", "100GB", "1000GB/Month", "10"));
// console.log(new HostingPlans("Professional", "5.99$", "500GB", "5000GB/Month", "50"));
// console.log(new HostingPlans("Ultimate", "9.99$", "2000GB", "20000GB/Month", "200"));
