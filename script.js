document.getElementById("clear").addEventListener("click", function () {
  ["upCase", "lowCase", "numbers", "spec-char"].forEach(function(id) {
    document.getElementById(id).checked = false;
  });
  return false;
})

// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialChar = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".",
"/", ":",";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", "]"];
var char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
"r", "s", "t", "u", "v", "w", "x", "y", "z"];
//var char = ["abcdefghijklmnopqrstuvwxyz"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

window.alert("Welcome to password generator! Press 'Ok' to start.");
let passLength = window.prompt("Enter desired number of characters (length of password); Must be between 8 and 128");


/*if (8<=length && length >= 128) {
  window.alert("Thank you! Select desired password options below & click 'Generate Password' when finished.");
} else {
  window.alert("Password length out of bounds! Please enter a length between 8 and 128");
  let length = window.prompt("Enter desired number of characters (length of password)");
}*/

//var passGen = window.confirm("Choose password options, then click generate password")


// function to generate password based on user inputs
// concatenate variables above based on user choices
// for loop to populate password array based on length
function generatePassword() {
  if(document.getElementById("lowCase").checked && !document.getElementById("numbers").checked
  && !document.getElementById("upCase").checked && !document.getElementById("spec-char").checked) {
    var password = [];
    for (i=0; i<passLength; i++) {
      var index = Math.floor(Math.random() * char.length);
      password[i] = char[index];
    }
    return password.join('');
  } else if (document.getElementById("lowCase").checked && document.getElementById("numbers").checked
  && !document.getElementById("upCase").checked && !document.getElementById("spec-char").checked) {
    var password = [];
    for (i=0; i<passLength; i++) {
      var passOptions = char.concat(num);
      var index = Math.floor(Math.random() * passOptions.length);
      password[i] = passOptions[index];
    }
    return password.join('');
  } else if (document.getElementById("lowCase").checked && document.getElementById("numbers").checked
  && !document.getElementById("upCase").checked && document.getElementById("spec-char").checked) {
    var password = [];
    for (i=0; i<passLength; i++) {
      var passOptions = char.concat(num,specialChar);
      var index = Math.floor(Math.random() * passOptions.length);
      password[i] = passOptions[index];
    }
    return password.join('');
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

