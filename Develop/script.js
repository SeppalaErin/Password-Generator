// Assignment Code
// Variables
var generateBtn = document.querySelector("#generate");

var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "="];

var confirmUpperChar;
var confirmLowerChar;
var confirmNumber;
var confirmSpecialChar;

var x;
var y;
var z;
var passLength;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){
    var passChar = [];
    var tempPass = [];
    var lastPass = "";
    
// Prompt password length between 8-128 characters
    passLength = parseInt(prompt("Please enter a password length between 8 and 128."));
    while ((!(passLength >= 8)) || (!(passLength <= 128))){
      passLength = parseInt(prompt("Invalid input. Please enter a length between 8 and 128."));
    }

// Prompt if user wants uppercase characters generated in password
  do{
    confirmUpperChar = confirm("Do you want uppercase characters?");
    if (confirmUpperChar){
      for(var i=0; i<upperChar.length; i++){
        passChar.push(upperChar[i]);
      }
      tempPass.push(upperChar[Math.floor(Math.random()*upperChar.length)])
    }

// Prompt if user wants lowercase characters generated in password
    confirmLowerChar = confirm("Do you want lowercase characters?");
    if (confirmLowerChar){
      for(var j=0; j<lowerChar.length; j++){
        passChar.push(lowerChar[j]);
      }
      tempPass.push(lowerChar[Math.floor(Math.random()*lowerChar.length)])
    }

// Prompt if user wants numbers generated in password
    confirmNumber = confirm("Do you want numbers?");
    if (confirmNumber){  
      for(var k=0; k<number.length; k++){
        passChar.push(number[k]);
      }
      tempPass.push(number[Math.floor(Math.random()*number.length)])
    }

// Prompt if user wants special characters generated in password
    confirmSpecialChar = confirm("Do you want special characters?");
    if (confirmSpecialChar){
      for(var l=0; l<specialChar.length; l++){
        passChar.push(specialChar[l]);
      }
      tempPass.push(specialChar[Math.floor(Math.random()*specialChar.length)])
    }

// if user didn't chose any character types, alert them that at least one character type must be used
    if (confirmUpperChar != true && confirmLowerChar != true && confirmNumber != true && confirmSpecialChar != true){
      alert("You must select at least one character type!");
    }
  }

  while(!confirmLowerChar && !confirmUpperChar && !confirmNumber && !confirmSpecialChar);

    for(var m=tempPass.length; m<passLength; m++){
    tempPass.push(passChar[Math.floor(Math.random()*passChar.length)]);
    }

    for (x = tempPass.length -1; x > 0; x--) {
        y = Math.floor(Math.random() * x)
        z = tempPass[x]
        tempPass[x] = tempPass[y]
        tempPass[y] = z
    }

    for(var n=0; n<tempPass.length; n++) {
        lastPass = lastPass + tempPass[n];
    }

    return lastPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
