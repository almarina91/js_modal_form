
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
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//send the data when clicked on send
send.onclick = function () {
    alert("Your answer has been submitted!");
    modal.style.display = "none";

}

//checking if input is valid

function checkIfValid () {
    let item = document.getElementById("answer").value;
    let value = parseInt(item);
    let message = document.getElementById("error1");
    message.className = isNaN(value) ? "alertmsgInvalid" : "alertmsg";
}

document.getElementById("answer").addEventListener("keyup",checkIfValid);


