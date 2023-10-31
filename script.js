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
        return;
      }
    
      var useLowerCase = prompt('Does this include lowercase characters?');
      var useUpperCase = prompt('Does this include uppercase characters?');
      var useNumeric = prompt('Does this include numeric characters?');
      var useSpecialChars = prompt('Does this include special characters?');
    
      if (!useLowerCase && !useUpperCase && !useNumeric && !useSpecialChars) {
        alert('Please select at least one character type.');
        return;
      }
    
      return {
        length: passwordLength,
        useLowerCase: useLowerCase,
        useUpperCase: useUpperCase,
        useNumeric: useNumeric,
        useSpecialChars: useSpecialChars,
      };
}

// Function for getting a random element from an array
  

// Function to generate password with user input
function generatePassword() {

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