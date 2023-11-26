function createForm() {
    const formContainer = document.getElementById("my-form");

    const form = document.createElement('form');

    const input = document.createElement('input');
    input.type = "text";
    input.name = "name";
    input.placeholder = "Enter your name here..";

    const submitButton = document.createElement('input');
    submitButton.type = "submit";
    submitButton.id = "submitButton";
    submitButton.value = "Submit";

    form.appendChild(input);
    form.appendChild(submitButton);

    formContainer.appendChild(form);
}

function getSubmitButtonValue() {
    const submitButton = document.getElementById("submitButton");
    const value = submitButton.value;
}

window.onload = function () {
    createForm();
    getSubmitButtonValue();
};

