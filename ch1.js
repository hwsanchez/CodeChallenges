// Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.

// If the username is valid then your program should return the string true, otherwise return the string false.

const { stringify } = require("querystring");
const readline = require("readline");

function CodeUsernameValidation(str) {
  // code goes here
  const pattern = /^[a-zA-Z][a-zA-Z0-9_]{2,23}[a-zA-Z0-9]$/;
  console.log(str);
  console.log(pattern.test(str));

  return pattern.test(str);
}

// keep this function call here
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter username: ", function (username) {
  const isValid = CodeUsernameValidation(username);
  console.log(isValid ? "User name valid!" : "User name not valid!");
  rl.close();
});
