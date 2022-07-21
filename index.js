<!-- Create for loop that creates many entries below -->

var userID = {
  one: "User 1",
  two: "User 2",
  three: "User 3"
}

var userName = {
  nick: "Nick",
  dave: "Dave",
  jess: "Jessica"
}

var entryArray = [(userID.one + " " + userName.nick), (userID.two + " " + userName.dave), (userID.three + " " + userName.jess)];

<!-- Testing Purposes -->
console.log(entryArray[0]);
console.log(entryArray[1]);
console.log(entryArray[2]);


function throwArray() {
  let output = document.getElementById("output");
  // entryArray.style.border = "2px solid blue";
  // entryArray.style.backgroundColor = "white";
  output.innerHTML = entryArray;
  output.style.color = "white";
  output.style.backgroundColor = "blue";
  output.style.border = "1px solid white";
  output.style.justifyContent = "center";
  output.style.flexDirection = "column";
 
  
}

// <!-- Edit Function -->
// function editEntry() {}

<!-- Delete Function -->
<!-- Set innerHTML to "" and setLocalStorage so change persists -->
function deleteEntry1() {
  let user1 = document.querySelector(".user1");
 
user1.innerHTML = "";
  
}

function deleteEntry2() {
  let user2 = document.querySelector(".user2");
 
user2.innerHTML = "";
  
}

function deleteEntry3() {
  let user3 = document.querySelector(".user3");
 
user3.innerHTML = "";
  
}

// <!-- Add Function --> 
// <!-- Have function create elements and append to the top?/append to new array -->
function addEntry() {
  let newUser = document.getElementById("newUser");
  
   <!-- Create New Elements -->
let myinput = document.createElement("input");
  let mybtn = document.createElement("p");
  let mybtn2 = document.createElement("p");
  
  mybtn.innerText = "Edit +";
  mybtn2.innerText = "Delete -";
myinput.value = newUser.value;
  myinput.style.display = "block";
  myinput.style.margin = "auto";
  myinput.style.marginTop = "0.5rem";
  
 

// Append to body:
document.body.appendChild(myinput);
document.body.appendChild(mybtn);
document.body.appendChild(mybtn2);

  
  console.log("New Entry Added")
  
}
