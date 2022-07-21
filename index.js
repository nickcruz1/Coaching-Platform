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
