const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const phoneInput = document.querySelector("#phone")
const messageInput = document.querySelector("#message")
const submitButton = document.querySelector("#submit")

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

const errorMessage = document.querySelectorAll(".error")

changeInputBorder()

submitButton.addEventListener("click", function() {

    checkInputValues()
    })

function checkInputValues() {
    inputValues.forEach(function(item){
        if (item === ""){
            errorAlert()
        }
    })
}

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

function errorAlert() {

    inputs.forEach(function (item) {
        item.style.borderColor = "#F52E2E"
    })

    errorMessage.forEach(function (item) { 
        item.textContent = "campo obrigatório"
    })
}