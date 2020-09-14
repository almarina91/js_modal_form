
//modal form

const modal = document.getElementById("myModal");
const btn = document.getElementById("submit");
const span = document.getElementsByClassName("close")[0];
const send = document.getElementById("send");

//display when clicked
btn.onclick = function() {
    modal.style.display = "block";
}

//hide when clicked on close
span.onclick = function() {
    modal.style.display = "none";
}

//hide when clicked anywhere else
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

//send the data when clicked on send
send.onclick = function () {
    alert("Your answer has been submitted!");
    modal.style.display = "none";

}

//checking if answer input is valid

function checkIfValidAnswer () {
    let item = document.getElementById("answer").value;
    let value = parseInt(item);
    let message = document.getElementById("error1");
    message.className = isNaN(value) ? "alertmsgInvalid" : "alertmsg";
}

document.getElementById("answer").addEventListener("keyup",checkIfValidAnswer);

//checking if full name input is valid

function checkIfValidFullName () {
    let item = document.getElementById("fullname").value;
    let re = /^[A-Za-z]+\s([A-Za-z]+\s*)+$/;
    let message = document.getElementById("errorFullName");
    message.className = re.test(item) ? "alertmsg" : "alertmsgInvalid";
}

document.getElementById("fullname").addEventListener("keyup",checkIfValidFullName);

//checking if phone input is valid

function checkIfValidPhone () {
    let item = document.getElementById("phone").value;
    let re = /^[0-9]+$/;
    let message = document.getElementById("errorPhone");
    message.className = re.test(item) ? "alertmsg" : "alertmsgInvalid";
}

document.getElementById("phone").addEventListener("keyup",checkIfValidPhone);

//checking if email input is valid

function checkIfValidEmail () {
    let item = document.getElementById("email").value;
    let re = /^[A-Za-z._0-9!#$%&'*+-/=?^`{|}~]+@([A-Za-z]+\.[a-z]+)+$/;
    let message = document.getElementById("errorEmail");
    message.className = re.test(item) ? "alertmsg" : "alertmsgInvalid";
}

document.getElementById("email").addEventListener("keyup",checkIfValidEmail);



