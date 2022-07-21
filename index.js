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
