function changeButtonText() {
var submitButton = document.getElementById("submitButton");
submitButton.value = "Submitting...";
}

document.getElementById("myForm").addEventListener("submit", function (event) {
event.preventDefault();
changeButtonText();
});