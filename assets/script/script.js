const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const phoneInput = document.querySelector("#phone")
const messageInput = document.querySelector("#message")
const submitButton = document.querySelector("#submit")

const errorBorder = [
                        nameInput,
                        emailInput,
                        phoneInput,
                        messageInput
]

const errorMessage = document.querySelectorAll(".error")
console.log(errorMessage)

submitButton.addEventListener("click", function() {
    console.log(nameInput)
    const nameValue = nameInput.value
    const emailValue = emailInput.value
    const phoneValue = phoneInput.value
    const messageValue = messageInput.value
    console.log(nameValue)

    if (nameValue === "" || emailValue === "" || phoneValue === "" || messageValue === ""){
        errorAlert()
    }
})

function errorAlert() {

    nameInput.style.borderColor = "red"

    errorBorder.forEach(function (item) {
        item.style.borderColor = "#F52E2E"
    })

    errorMessage.forEach(function (item) { 
        item.textContent = "campo obrigatório"
    })
}
