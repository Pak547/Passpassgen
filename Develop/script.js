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
//

/*
if (specChar === true){
  specChar.length(math.random (math.floor))
  console.log("they want special char true")
} else {
  console.log("they dont want spec char false")
}
*/
char = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]
specChar = ['!',`"`,"#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]
nums = ["0","1","2","3","4","5","6","7","8","9"]
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordText = {
  char: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"],
  specChar: ['!',`"`,"#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"],
  nums: ["0","1","2","3","4","5","6","7","8","9"]
}


// Write password to the #password input  
function writePassword(generatePassword) {
  var password = generatePassword(passwordText);
  passwordText.value = password;

  var passwordText = document.querySelector("#password");

  var passwordText = {
    char: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"],
    specChar: ['!',`"`,"#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"],
    nums: ["0","1","2","3","4","5","6","7","8","9"]
  }
  
  for (i=0; passwordText.length;i++) {
    var generatePassword = passwordText [Math.floor(Math.random)]
  }
  return ; 
}
//generatePassword is a variable that holds the password after its generated 
console.log()
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,char, specChar, nums)

