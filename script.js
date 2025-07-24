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
var count = document.getElementById("count");
var countValue = 0;
function increaseCount(){
    count.textContent = ++countValue;
}
function decreaseCount(){
    count.textContent = --countValue;
}

