const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
  "/"
];

let passwordEl1 = document.getElementById("password-el1")
let passwordEl2 = document.getElementById("password-el2")

function genPassword() {
passwordEl1.textContent = ""
passwordEl2.textContent = ""
	generatePassword()
  for (let i = 1; i < 16; i++){
  passwordEl1.textContent += generatePassword()
  passwordEl2.textContent += generatePassword()
  }
}

function generatePassword() {
  let randomNum = Math.floor(Math.random() * characters.length)
  return characters[randomNum]
}