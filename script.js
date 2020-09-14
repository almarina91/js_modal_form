
//modal form

const modal = document.getElementById("modalForm");
const btn = document.getElementById("submit");
const span = document.getElementsByClassName("close")[0];
const send = document.getElementById("send");
const displayBlock = "block";
const displayNone = "none";
const alertMessageInvalid = "alertMessageInvalid";
const alertMessage = "alertMessage";

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
    alert("Your answer has been submitted!");
    modal.style.display = displayNone;

}

//checking if answer input is valid

function checkIfValidAnswer () {
    let value = parseInt(document.getElementById("answer").value);
    let message = document.getElementById("errorAnswer");
    message.className = isNaN(value) ? alertMessageInvalid : alertMessage;
}

document.getElementById("answer").addEventListener("keyup",checkIfValidAnswer);

//checking if full name input is valid

function checkIfValidFullName () {
    let value = document.getElementById("fullName").value;
    let re = /^[A-Za-z]+\s([A-Za-z]+\s*)+$/;
    let message = document.getElementById("errorFullName");
    message.className = re.test(value) ? alertMessage : alertMessageInvalid;
}

document.getElementById("fullName").addEventListener("keyup",checkIfValidFullName);

//checking if phone input is valid

function checkIfValidPhone () {
    let value = document.getElementById("phone").value;
    let re = /^[0-9]+$/;
    let message = document.getElementById("errorPhone");
    message.className = re.test(value) ? alertMessage : alertMessageInvalid;
}

document.getElementById("phone").addEventListener("keyup",checkIfValidPhone);

//checking if email input is valid

function checkIfValidEmail () {
    let value = document.getElementById("email").value;
    let re = /^[A-Za-z._0-9!#$%&'*+-/=?^`{|}~]+@([A-Za-z]+\.[a-z]+)+$/;
    let message = document.getElementById("errorEmail");
    message.className = re.test(value) ? alertMessage : alertMessageInvalid;
}

document.getElementById("email").addEventListener("keyup",checkIfValidEmail);



