const inputs = document.querySelectorAll(".user-input")

let alert = document.querySelectorAll(".alert")

const submitButton = document.querySelector('#submit')

submitButton.addEventListener("click", function(e) {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {
    inputs.forEach(function (item, index) {
        if (item.value === "") {
            errorAlert(item)
            alert[index].className = "alert error"
        } else {
            successAlert(item)
            alert[index].className = "alert success"
        }
    })}

function errorAlert(item) {
    item.style.borderColor = "#F52E2E"
}

function successAlert(item) {
    item.style.borderColor = "#00C22B"
}