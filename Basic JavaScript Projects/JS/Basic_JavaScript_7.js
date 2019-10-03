var x = 100
var b = 100

function add() {
    var f = 17
}

var math = x + b;

console.log(math)

console.log(math + f);

function got_Time() {
    if (new Date().getHours() < 18) {
        document.getElementById("time").innerHTML = "We party tonight. I am the machine."
    }
}

function birthYear() {
    var year = document.getElementById("year").value;
    if (year > 1998) {
        document.getElementById("legal").innerHTML = "Boy you can't drink, get outta here."
    }
    if (year < 1998) {
        document.getElementById("legal").innerHTML = "DRINKS ON ME FOOL!"

    }
}

function drink_Game() {
    drink = document.getElementById("drinks").value;
    if (drink > 17) {
        document.getElementById("drink").innerHTML = "You are respectable. You party with us tonight."
    }
    else {
        document.getElementById("drink").innerHTML = "You are weak."

    }
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is the evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}