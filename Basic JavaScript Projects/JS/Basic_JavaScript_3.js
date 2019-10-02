function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtract() {
    var Subtraction = 5 - 4;
    document.getElementById("tag").innerHTML = "5 - 4 = " + Subtraction;
}

function multiply() {
    var Multiplication = 3 * 4;
    document.getElementById("multi").innerHTML = "3 * 4 = " + Multiplication;
}

function divide() {
    var Division = 8 / 2;
    document.getElementById("div").innerHTML = "8 / 2 = " + Division;
}

function getWrecked() {
    var allMath = (5 + 7) * 4 / 2 - 8;
    document.getElementById("theMath").innerHTML = "5 plus 7, multiplied by 10. divided in half minus 8 is " + allMath;
}

function modulus_operator() {
    var left_over = 100 % 23;
    document.getElementById("remainder").innerHTML = "When you divide 100 by 23 you have a remainder of "  + left_over;
}

function negation_operator() {
    var x = 69;
    document.getElementById("opposite").innerHTML = -x
}

var a = 100;
a++;
document.write(a);

var b = 100
b--;
document.write(b);

window.alert(Math.random()* 100);

function rounding() {
    var c= 4.4
    document.getElementById("demo").innerHTML = Math.round(c);
}

