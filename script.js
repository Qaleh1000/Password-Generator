// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
    
    function getPasswordOptions() {
      var passwordLength = parseInt(prompt('Enter the password length (between 8 and 128 characters):'));
      if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert('Please enter a valid password length.');
        return null;
      }
    
      var useLowerCase = prompt('Would you like to use lowercase characters?');
      var useUpperCase = prompt('Would you like to use uppercase characters?');
      var useNumeric = prompt('Would you like to use numeric characters?');
      var useSpecialChars = prompt('Would you like to use special characters?');
    
      if (!useLowerCase && !useUpperCase && !useNumeric && !useSpecialChars) {
        alert('Please select at least one character type.');
        return null;
      }
    
      var passwordOptions = {
        length: passwordLength,
        lowerCasedCharacters: useLowerCase,
        upperCasedCharacters: useUpperCase,
        numericCharacters: useNumeric,
        specialCharacters: useSpecialChars,
      };

    return passwordOptions; 
}


// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}


// Function to generate password with user input
  function generatePassword() {
    var options = getPasswordOptions();
    if (!options) {
      return ""; // Return an empty string if options are invalid
    }
  
    // Create a character pool based on selected options
    var characterPool = [];
    var definitiveCharacters = [];

    if (options.specialCharacters) {
      characterPool = characterPool.concat(specialCharacters);
      definitiveCharacters .push(getRandom(specialCharacters));
    }
    if (options.numericCharacters) {
      characterPool = characterPool.concat(numericCharacters);
      definitiveCharacters .push(getRandom(numericCharacters));
    }
    if (options.lowerCasedCharacters) {
      characterPool = characterPool.concat(lowerCasedCharacters);
      definitiveCharacters .push(getRandom(lowerCasedCharacters));
    }
    if (options.upperCasedCharacters) {
      characterPool = characterPool.concat(upperCasedCharacters);
      definitiveCharacters .push(getRandom(upperCasedCharacters));
    }
  
    // Generate the password
    for (var i = definitiveCharacters .length; i < options.length; i++) {
      var randomCharacter = getRandom(characterPool);
      definitiveCharacters .push(randomCharacter);
    }
  
    return definitiveCharacters .join('');
  }


// Get references to the #generate element
var generateBtn = document.querySelector('#generate'); 

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener('click', writePassword);
