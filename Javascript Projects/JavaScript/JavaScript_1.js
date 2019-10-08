// Pg 203 drill
var sound_type;
function sounds_Function() {
    var sound = document.getElementById("sound-string").value;
    var latter_text = "huh, that's a good sound! I'm not gonna play that sound, but it's a good one nonetheless";
    switch(sound) {
        case "Bell":
            sound_type = "Bells " + latter_text;
        break;
        case "Ring":
            sound_type = "Ringing " + latter_text;
        break;
        case "Bark":
            sound_type = "Barks " + latter_text;
        break;
        case "Meow":
            sound_type = "Meows " + latter_text;
        break;
        default: 
        sound_type = "Dog, just write one of the options. Don't be doing other stuff okay. This isn't that complex of a program."
    }
    document.getElementById("result").innerHTML = sound_type;
}

// Pg 212 drill
function change_Text() {
    var text = document.getElementsByClassName("change");
    text[0].innerHTML = "I have changed";
}

// Pg. 214 - 215 drill
var line = document.getElementById("box");
var line_tx = line.getContext("2d");
line_tx.moveTo(0,0);
line_tx.lineTo(250,250);
line_tx.strokeStyle = "purple";
line_tx.stroke();

//pg 216 drill
var grade = document.getElementById("box2");
var ctx = grade.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 300, 0);
grd.addColorStop(0.7, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 400, 250);