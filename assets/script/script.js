const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const phoneInput = document.querySelector("#phone")
const messageInput = document.querySelector("#message")
const submitButton = document.querySelector("#submit")

const inputs = [
                    nameInput.value,
                    emailInput.value,
                    phoneInput.value,
                    messageInput.value
]

const errorBorder = [
                        nameInput,
                        emailInput,
                        phoneInput,
                        messageInput
]

const errorMessage = document.querySelectorAll(".error")

submitButton.addEventListener("click", function() {
    checkInputs()
    })

function checkInputs() {
    inputs.forEach(function(item){
        if (item === ""){
            errorAlert()
        }
    })
}

function errorAlert() {

    errorBorder.forEach(function (item) {
        item.style.borderColor = "#F52E2E"
    })

    errorMessage.forEach(function (item) { 
        item.textContent = "campo obrigatório"
    })
}

inputs.forEach(function(item) {
    item.addEventListener("input", function() {
        console.log(preencheu)
    })
})