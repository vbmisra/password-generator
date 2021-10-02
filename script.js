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
var upChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
"R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
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

  //all cases chosen
  if (document.getElementById("lowCase").checked && document.getElementById("numbers").checked
  && document.getElementById("upCase").checked && document.getElementById("spec-char").checked) {
    var password = [];
    for (i=0; i<passLength; i++) {
      var passOptions = char.concat(num,specialChar,upChar);
      var index = Math.floor(Math.random() * passOptions.length);
      password[i] = passOptions[index];
    }
    return password.join('');
    //lower case and numbers chosen
  } else if (document.getElementById("lowCase").checked && document.getElementById("numbers").checked
  && !document.getElementById("upCase").checked && !document.getElementById("spec-char").checked) {
    var password = [];
    for (i=0; i<passLength; i++) {
      var passOptions = char.concat(num);
      var index = Math.floor(Math.random() * passOptions.length);
      password[i] = passOptions[index];
    }
    return password.join('');
    //lower case, number and special character chosen
  } else if (document.getElementById("lowCase").checked && document.getElementById("numbers").checked
  && !document.getElementById("upCase").checked && document.getElementById("spec-char").checked) {
    var password = [];
    for (i=0; i<passLength; i++) {
      var passOptions = char.concat(num,specialChar);
      var index = Math.floor(Math.random() * passOptions.length);
      password[i] = passOptions[index];
    }
    return password.join('');
    // only lower case chosen
  } else if(document.getElementById("lowCase").checked && !document.getElementById("numbers").checked
  && !document.getElementById("upCase").checked && !document.getElementById("spec-char").checked) {
    var password = [];
    for (i=0; i<passLength; i++) {
      var index = Math.floor(Math.random() * char.length);
      password[i] = char[index];
    }
    return password.join('');
    //only numbers chosen
   } else if(!document.getElementById("lowCase").checked && document.getElementById("numbers").checked
   && !document.getElementById("upCase").checked && !document.getElementById("spec-char").checked) {
     var password = [];
     for (i=0; i<passLength; i++) {
       var index = Math.floor(Math.random() * num.length);
       password[i] = num[index];
     }
     return password.join('');
     //only uppercase chosen
   } else if(!document.getElementById("lowCase").checked && !document.getElementById("numbers").checked
   && document.getElementById("upCase").checked && !document.getElementById("spec-char").checked) {
     var password = [];
     for (i=0; i<passLength; i++) {
       var index = Math.floor(Math.random() * upChar.length);
       password[i] = upChar[index];
     }
     return password.join('');
     //only special characters chosen
   } else if(!document.getElementById("lowCase").checked && !document.getElementById("numbers").checked
   && !document.getElementById("upCase").checked && document.getElementById("spec-char").checked) {
     var password = [];
     for (i=0; i<passLength; i++) {
       var index = Math.floor(Math.random() * specialChar.length);
       password[i] = specialChar[index];
     }
     return password.join('');
     //lower case and upper case chosen
   } else if (document.getElementById("lowCase").checked && !document.getElementById("numbers").checked
   && document.getElementById("upCase").checked && !document.getElementById("spec-char").checked) {
     var password = [];
     for (i=0; i<passLength; i++) {
       var passOptions = char.concat(upChar);
       var index = Math.floor(Math.random() * passOptions.length);
       password[i] = passOptions[index];
     }
     return password.join('');
     //lower case and special characters chosen
   } else if (document.getElementById("lowCase").checked && !document.getElementById("numbers").checked
   && !document.getElementById("upCase").checked && document.getElementById("spec-char").checked) {
     var password = [];
     for (i=0; i<passLength; i++) {
       var passOptions = char.concat(specialChar);
       var index = Math.floor(Math.random() * passOptions.length);
       password[i] = passOptions[index];
     }
     return password.join('');
     //lower case, upper case, and numbers chosen
   } else if (document.getElementById("lowCase").checked && document.getElementById("numbers").checked
   && document.getElementById("upCase").checked && !document.getElementById("spec-char").checked) {
     var password = [];
     for (i=0; i<passLength; i++) {
       var passOptions = char.concat(upChar,num);
       var index = Math.floor(Math.random() * passOptions.length);
       password[i] = passOptions[index];
     }
     return password.join('');
     //lower case, upper case and special characters chosen
   } else if (document.getElementById("lowCase").checked && !document.getElementById("numbers").checked
   && document.getElementById("upCase").checked && document.getElementById("spec-char").checked) {
     var password = [];
     for (i=0; i<passLength; i++) {
       var passOptions = char.concat(upChar,specialChar);
       var index = Math.floor(Math.random() * passOptions.length);
       password[i] = passOptions[index];
     }
     return password.join('');
     //lower case, numbers and special characters
   } else if (document.getElementById("lowCase").checked && document.getElementById("numbers").checked
   && !document.getElementById("upCase").checked && document.getElementById("spec-char").checked) {
     var password = [];
     for (i=0; i<passLength; i++) {
       var passOptions = char.concat(num,specialChar);
       var index = Math.floor(Math.random() * passOptions.length);
       password[i] = passOptions[index];
     }
     return password.join('');
     //upper case and numbers chosen
   } else if (!document.getElementById("lowCase").checked && document.getElementById("numbers").checked
   && document.getElementById("upCase").checked && !document.getElementById("spec-char").checked) {
     var password = [];
     for (i=0; i<passLength; i++) {
       var passOptions = upChar.concat(num);
       var index = Math.floor(Math.random() * passOptions.length);
       password[i] = passOptions[index];
     }
     return password.join('');
     //upper case and special characters chosen
   } else if (!document.getElementById("lowCase").checked && !document.getElementById("numbers").checked
   && document.getElementById("upCase").checked && document.getElementById("spec-char").checked) {
     var password = [];
     for (i=0; i<passLength; i++) {
       var passOptions = upChar.concat(specialChar);
       var index = Math.floor(Math.random() * passOptions.length);
       password[i] = passOptions[index];
     }
     return password.join('');
     //upper case, numbers, and special characters chosen
   } else if (!document.getElementById("lowCase").checked && document.getElementById("numbers").checked
   && document.getElementById("upCase").checked && document.getElementById("spec-char").checked) {
     var password = [];
     for (i=0; i<passLength; i++) {
       var passOptions = upChar.concat(num,specialChar);
       var index = Math.floor(Math.random() * passOptions.length);
       password[i] = passOptions[index];
     }
     return password.join('');
     //special characters and numbers chosen
   } else if (!document.getElementById("lowCase").checked && document.getElementById("numbers").checked
   && !document.getElementById("upCase").checked && document.getElementById("spec-char").checked) {
     var password = [];
     for (i=0; i<passLength; i++) {
       var passOptions = num.concat(specialChar);
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

