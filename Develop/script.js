// Assignment code here
// Maybe create an array with the alphabet inside and special characters?
// use a method so you only have to use one array
// maybe start first by making the button work in console.log
// input 
// how many variables? 
// boolean where
// for loop to keep generating password(interating this array) until desired input (variable for the input)
// scope... which variables will need a global and which dont
// math.random and math.floor to create a RNG to select randomly in the array
// work up from console.log problems 
// instead of using two arrays one for upper and lower use RNG to pick toupper and tolower
//GIVEN I need a new, secure password

/*WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/

// step 1: set up user input
// step 2: then we add user selection
// step 3: customizable length and characters
// step 4: validate user input
// step 5: generate and test password to display

/*
if (specChar === true){
  specChar.length(math.random (math.floor))
  console.log("they want special char true")
} else {
  console.log("they dont want spec char false")
}
*/

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var length = prompt("Password Length 8-128")
var specChar = prompt("Special Characters? yes/no")
var lowerCase = prompt("Include Lowercase? yes/no")
var upperCase = prompt("Include Uppercase? yes/no")
var numeric = prompt("Include Numbers? yes/no")
var yes = true;
var no = false;
function userInput(){
  if(specChar === true){
    specChar(Math.random(Math.floor))
  }
}

// to do next time, write out booleans and learn math random syntax
// Write password to the #password input  
// make a function for password length
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;

  var passwordText = document.querySelector("#password");

    char = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"],
    specChar = ['!',`"`,"#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"],
    nums = ["0","1","2","3","4","5","6","7","8","9"]

  
  for (i=0; passwordText.length;i++) {
    var generatePassword[] = passwordText [Math.floor(Math.random)]
  }
  return ; 
}
//generatePassword is a variable that holds the password after its generated 
console.log()
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,char, specChar, nums) 

