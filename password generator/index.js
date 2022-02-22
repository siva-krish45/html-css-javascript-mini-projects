const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789>*&!<@()'
let result = []
let firstPassword = document.querySelector(".one")
let secondPassword = document.querySelector(".two")
let thirdPassword = document.querySelector(".three")
let fourthPassword = document.querySelector(".four")







function generatePassword(){
    let password = ""
    for(let i=0; i<4; i++){
        for(let j = 0; j<16; j++){
            password+= characters.charAt(Math.floor(Math.random() * characters.length))
        }
        result.push(password)
        password= " "
    }
    
    displayPassword()

}

function displayPassword(){
   firstPassword.textContent = result[0]
   secondPassword.textContent = result[1]
   thirdPassword.textContent = result[2]
   fourthPassword.textContent = result[3]
   for(let i =0; i<4; i++){
       result.pop()
   }
}