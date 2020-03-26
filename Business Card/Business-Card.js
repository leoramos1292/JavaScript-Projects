function companyName() {
    document.getElementById("companyNameDisplay").innerHTML= companyNameId.value
}

function companyMessage() {
    document.getElementById("messageDisplay").innerHTML= companyMessageId.value
}

function backgroundColor() {
    document.getElementById("card").style.backgroundColor = backgroundColorId.value
}

function textColor() {
    document.getElementById("cardText").style.color = textColorId.value
}

function textLeft() {
    document.getElementById("card").className = "cardDisplay text-left";
}

function textCenter() {
    document.getElementById("card").className = "cardDisplay text-center";
}

function textRight() {
    document.getElementById("card").className = "cardDisplay text-right";
}

function yourName() {
    document.getElementById("nameDisplay").innerHTML= yourNameId.value
}

function jobTitle() {
    document.getElementById("jobDisplay").innerHTML= jobTitleId.value
}

function email() {
    document.getElementById("emailDisplay").innerHTML= "Email: " + emailId.value
}

function phoneNumber() {
    document.getElementById("numberDisplay").innerHTML= "Phone Number: " + phoneNumberId.value
}

function submitButton() {
    if (!yourNameId.value) {
        alert("Please Enter name")
    } else {
        alert("Your card is done!");
    }
}

function reset() {
    window.location.reload();
}