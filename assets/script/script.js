const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const phoneInput = document.querySelector("#phone")
const messageInput = document.querySelector("#message")
const submitButton = document.querySelector("#submit")
const errorMessage = document.querySelectorAll(".error")

const inputValues = [
                    nameInput.value,
                    emailInput.value,
                    phoneInput.value,
                    messageInput.value
]

const inputs = [
                        nameInput,
                        emailInput,
                        phoneInput,
                        messageInput
]

changeInputBorder()

submitButton.addEventListener("click", function(e) {

    checkInputValues()
    })

//Check if inputs are empty
function checkInputValues() {
    inputValues.forEach(function(item){
        if (item === ""){
            errorAlert()
        }
    })
}

//Sets the border color according to the situation.
//If filled = green. Else = keep the color black.
function changeInputBorder() {
    inputs.forEach (function (item){
        item.addEventListener('input', event => {
            if (item.value) {
                item.style.borderColor = "lime"
            } else {
                item.style.borderColor = "black"
                console.log(inputs)
            }
        })
    })
}


//If the inputs are empty displays an error message.
//The divs in errorMessage[] receive the error text.
function errorAlert() {

    inputs.forEach(function (item) {
        item.style.borderColor = "#F52E2E"
    })

    errorMessage.forEach(function (item) { 
        item.textContent = "campo obrigatório"
    })
}