const submit = document.getElementById("submit");

//input valiables
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const inputArray = [username, email, password, confirmPassword];

//error variables
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

const errorArray = [
  usernameError,
  emailError,
  passwordError,
  confirmPasswordError,
];

//main function
function checkRequired(e, inputF, err) {
  e.preventDefault();
  inputF = inputArray;
  err = errorArray;
  for (let i = 0; i < inputF.length; i++) {
    if (inputF[i].value == "") {
      /* This if block checks required fierlds */
      err[i].innerHTML = "Field is required";
    } else if (
      /* This if block checks fierlds length*/
      inputF[i].value.length < inputF[i].minLength ||
      inputF[i].value.length > inputF[i].maxLength
    ) {
      err[
        i
      ].innerHTML = `Please input  between ${inputF[i].minLength} and ${inputF[i].maxLength} characters`;
    } else if (
      /* This if block validates email format*/
      inputF[i].type == "email" &&
      inputF[i].value.length > inputF[i].minLength
    ) {
      if (!inputF[i].validity.valid) {
        err[i].innerHTML = "invalid email format";
      } else {
        err[i].innerHTML =
          ""; /*If email is correctly populated don't display previous errors*/
      }
    } else if (
      /* This if block checks confirm password to match*/
      inputF[i].id == "confirmPassword" &&
      inputF[i].value.length > inputF[i].minLength
    ) {
      if (inputF[i].value != inputF[i - 1].value) {
        err[i].innerHTML = "Passwords Don't Match";
      } else {
        err[i].innerHTML =
          ""; /*If confirm password match don't display previous errors*/
      }
    } else {
      /* If field is correctly populated don't display previous errors*/
      err[i].innerHTML = "";
    }
  }
}

submit.addEventListener("click", checkRequired);
