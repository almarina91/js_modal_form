//modal form
const modal = document.getElementById("modalForm");
const btn = document.getElementById("submit");
const span = document.getElementsByClassName("close")[0];
const send = document.getElementById("send");
const displayBlock = "block";
const displayNone = "none";
const alertMessageInvalid = "alertMessageInvalid";
const alertMessage = "alertMessage";
let answerValid = false;
let fullNameValid = false;
let phoneValid = false;
let emailValid = false;

//display when clicked
btn.onclick = function() {
    modal.style.display = displayBlock;
}

//hide when clicked on close
span.onclick = function() {
    modal.style.display = displayNone;
}

//hide when clicked anywhere else
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = displayNone;
    }
}

//send the data when clicked on send
send.onclick = function () {
    if (send.disabled===false) {
        alert("Your answer has been submitted!");
        modal.style.display = displayNone;
        document.getElementById("answer").value = null;
        document.getElementById("fullName").value = null;
        document.getElementById("email").value = null;
        document.getElementById("phone").value=null;
    }

}

//checking if answer input is valid
function checkIfValidAnswer () {
    let value = parseInt(document.getElementById("answer").value);
    let message = document.getElementById("errorAnswer");

     if (isNaN(value)) {
         message.className = alertMessageInvalid;
         answerValid = false;
         btn.style.backgroundColor="#bab9b8";
     } else {
         message.className = alertMessage;
         answerValid = true;
         btn.style.backgroundColor="#e38546";
     }

     enableSubmit();
}

document.getElementById("answer").addEventListener("keyup",checkIfValidAnswer);

//checking if full name input is valid
function checkIfValidFullName () {
    let value = document.getElementById("fullName").value;
    let re = /^[A-Za-z]+\s([A-Za-z]+\s*)+$/;
    let message = document.getElementById("errorFullName");

    if (re.test(value)) {
        message.className = alertMessage;
        fullNameValid = true;
    } else {
        message.className = alertMessageInvalid;
        fullNameValid = false;
    }

    enableSend();
}

document.getElementById("fullName").addEventListener("keyup",checkIfValidFullName);

//checking if phone input is valid
function checkIfValidPhone () {
    let value = document.getElementById("phone").value;
    let re = /^[0-9]+$/;
    let message = document.getElementById("errorPhone");

    if (re.test(value)) {
        message.className = alertMessage;
        phoneValid = true;
    } else {
        message.className = alertMessageInvalid;
        phoneValid = false;
    }

    enableSend();
}

document.getElementById("phone").addEventListener("keyup",checkIfValidPhone);

//checking if email input is valid
function checkIfValidEmail () {
    let value = document.getElementById("email").value;
    let re = /^[A-Za-z._0-9!#$%&'*+-/=?^`{|}~]+@([A-Za-z]+\.[a-z]+)+$/;
    let message = document.getElementById("errorEmail");

    if (re.test(value)) {
        message.className = alertMessage;
        emailValid = true;
    } else {
        message.className = alertMessageInvalid;
        emailValid = false;
    }

    enableSend();
}

document.getElementById("email").addEventListener("keyup",checkIfValidEmail);

function enableSubmit () {
    btn.disabled= !answerValid;
}

function enableSend () {
    if (fullNameValid === true && emailValid === true && phoneValid === true) {
        send.disabled = false;
        send.style.backgroundColor = "#e38546";
    } else {
        send.disabled = true;
    }
}

