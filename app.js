const form = document.getElementById("form");
const submitButton = document.getElementById("submitButton");
const inputFirstName = document.querySelector("#inputFirstName");
const inputLastName = document.querySelector("#inputLastName");
const inputEmail = document.querySelector("#inputEmail");
const inputPassword = document.querySelector("#inputPassword");
const errorTextFirstName = document.querySelector(".error-text-firstname");
const errorTextLastName = document.querySelector(".error-text-lastname");
const errorTextEmail = document.querySelector(".error-text-email");
const errorTextPassword = document.querySelector(".error-text-password");
const warningFirst = document.querySelector("#warningFirst");
const warningLast = document.querySelector("#warningLast");
const warningEmail = document.querySelector("#warningEmail");
const warningPassword = document.querySelector("#warningPassword");
const togglePassword = document.querySelector("#togglePassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstName = inputFirstName.value;
  const lastName = inputLastName.value;
  const email = inputEmail.value;
  const password = inputPassword.value;

  // Check first name
  if (firstName === "") {
    inputFirstName.classList.add("error");
    errorTextFirstName.innerHTML = "First Name cannot be empty";
    warningFirst.style.display = "block";
  } else {
    inputFirstName.classList.remove("error");
    errorTextFirstName.innerHTML = "";
    warningFirst.style.display = "none";
  }

  // Check last name
  if (lastName === "") {
    inputLastName.classList.add("error");
    errorTextLastName.innerHTML = "Last Name cannot be empty";
    warningLast.style.display = "block";
  } else {
    inputLastName.classList.remove("error");
    errorTextLastName.innerHTML = "";
    warningLast.style.display = "none";
  }

  // Check email
  if (!validateEmail(email) || email === "") {
    inputEmail.classList.add("error");
    errorTextEmail.innerHTML = "Looks like this is not an email";
    warningEmail.style.display = "block";
  } else {
    inputEmail.classList.remove("error");
    errorTextEmail.innerHTML = "";
    warningEmail.style.display = "none";
  }

  // Check password
  if (password === "") {
    inputPassword.classList.add("error");
    errorTextPassword.innerHTML = "Password cannot be empty";
    togglePassword.style.display = "none";
    warningPassword.style.display = "block";
  } else {
    inputPassword.classList.remove("error");
    errorTextPassword.innerHTML = "";
    togglePassword.style.display = "block";
    warningPassword.style.display = "none";
  }
});

// Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

togglePassword.addEventListener("click", () => {
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    togglePassword.src = "./images/Eye.svg";
  } else {
    inputPassword.type = "password";
    togglePassword.src = "./images/EyeSlash.svg";
  }
});
