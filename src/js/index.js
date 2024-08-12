const signUp = document.getElementById("sign-up");
const success = document.getElementById("success");

const form = document.querySelector("form");
const email = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const emailAddress = document.getElementById("email-address");

const submitBtn = document.getElementById("submit");
const dismissBtn = document.getElementById("dismiss");

//confirming email syntax using regex
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//showing error message only if the field is incorrect
email.addEventListener("input", () => {
    const isValid = email.value.length === 0 || emailRegExp.test(email.value);

    if (!isValid) {
        displayError();
    } else {
        hideError();
    }
});

//preventing the browser's default behaviour and only submitting if the email is valid and not empty
form.addEventListener("submit", (event) => {
    event.preventDefault();

    validateEmail();
});

//button submission option
submitBtn.addEventListener("click", () => {
    validateEmail();
});

//reset page
dismissBtn.addEventListener("click", () => {
    goToSignUp();
});

function displayError() {
    errorMessage.textContent = "Valid email required";
    email.classList.add("email-error");
}

function hideError() {
    errorMessage.textContent = "";
    email.classList.remove("email-error");
}

function goToSuccess() {
    signUp.classList.add("hidden");
    success.classList.remove("hidden");
}

function goToSignUp() {
    success.classList.add("hidden");
    signUp.classList.remove("hidden");
    email.value = "";
}

function validateEmail() {
    const isValid = email.value.length !== 0 && emailRegExp.test(email.value);

    if (!isValid) {
        displayError();
    } else {
        emailAddress.textContent  = email.value;
        goToSuccess();
    }
}