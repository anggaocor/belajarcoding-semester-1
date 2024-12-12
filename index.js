let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")

function generatePassword(len){
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUFWXYZ"
    const numeric = "0123456789"
    const symbol = "!@#$%^&*()_+-{}[]':;,.<>/?`~"

    const data = lowerAlphabet + upperAlphabet + numeric + symbol
    let generator = '';
    for (let index = 0; index < len; index++){
        generator += data[~~(Math.random() * data.length)];
    }
    return generator
}

function getPassword(){
   const newPassword = generatePassword(passwordLength.value)
   password.value = newPassword
   setTimeout (() => {
    alert ('password has been genarated!')
   }, 2000)
}

function savePassword(){

}