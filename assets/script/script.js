const inputs = document.querySelectorAll(".input")

let error = document.querySelectorAll(".error")

const submitButton = document.querySelector('#submit')

submitButton.addEventListener("click", function(e) {
    e.preventDefault()

    errorAlert ()
})

function errorAlert() {
    inputs.forEach(function (item) {
        if (item.value === "") {
            item.style.borderColor = "red"
            errorMessage()
        } else {
            item.style.borderColor = "green"
        }
    })}

function errorMessage() {
    error.forEach(function (item) {
        item.textContent = "Campo obrigatório"
    })
}