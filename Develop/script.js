// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "="];

var minLength;
var maxLength;


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
    
    var x;
    var y;
    var z;

    minLength = parseInt(prompt("Please enter a minimum password length."));
    while ((!(minLength >= 8)) || (!(minLength <= 128))){
      minLength = parseInt(prompt("Invalid input. Please enter a length between 8 and 128."));
    }

    maxLength = parseInt(prompt("Please enter a maximum password length."));
    while ((!(maxLength >= minLength)) || (!(maxLength <= 128))){
      maxLength = parseInt(prompt("Invalid input. Please enter a length between " + minLength + " and 128."));
    }
  
    var fixLength = maxLength - minLength + 1;
  
    var passLength = Math.floor((Math.random()*fixLength)+minLength);
    
    for(var i=0; i<lowerChar.length; i++){
      passChar.push(lowerChar[i]);
    }

    for(var j=0; j<upperChar.length; j++){
      passChar.push(upperChar[j]);
    }

    for(var k=0; k<numberChar.length; k++){
      passChar.push(numberChar[k]);
    }

    for(var l=0; l<specialChar.length; l++){
      passChar.push(specialChar[l]);
    }

    tempPass.push(lowerChar[Math.floor(Math.random()*lowerChar.length)])
    tempPass.push(upperChar[Math.floor(Math.random()*upperChar.length)])
    tempPass.push(numberChar[Math.floor(Math.random()*numberChar.length)])
    tempPass.push(specialChar[Math.floor(Math.random()*specialChar.length)])

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
