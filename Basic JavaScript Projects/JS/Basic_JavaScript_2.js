function myFirstFunction() {
    var words = " WHAT DID I JUST SAY!?";
    var result = words.fontcolor("red")
    document.getElementById("Red_Text").innerHTML = result;
}

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("concatenate").innerHTML = sentence;
}

var a = adder(5, 5)
document.getElementById("add").innerHTML = a

function adder(x, y) {
    return x + y;
}

