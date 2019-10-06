function Call_Loop() {
    var fives = "Give me this many highfives: ";
    var x = 1
    while (x < 11) {
        fives += "<br>" + x;
        x++
    }
    document.getElementById("loop").innerHTML= fives;

    var n = fives.length;
    document.getElementById("length").innerHTML = n;    
}    




    var instrument = ["Bass", "6 string Bass", "Upright Bass", "Bass is the only Instrument"];
    var texts = ""
    var T;
    function for_Loop() {
        for (T = 0; T < instrument.length; T++) {
            texts += instrument[T] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = texts;
}

function array_Function() {
    var artist = [];
    artist[0] = "Whitney"
    artist[1] = "Michael"
    artist[2] = "Madonna"
    artist[3] = "George"
    // Whitney Houston, Michael Jackson, Madonna and George Michael...Of COURSE. Who else would I listen to?
    document.getElementById("Array").innerHTML = "At any moment of the day Leo could be listening to " + artist[1] + ".";
}
const PC = {brand: "Omen", cpu: "Intel Core i5", gpu: "Nvidia GeForce GTX 1060", ram: "8GB DDR3"};
function constant_function() {
    PC.cpu = "Intel Core i7"
    PC.Chassis_color = "black with LED lights";
    document.getElementById("constant").innerHTML = "I have an " + PC.brand + " PC with an " + PC.cpu + " cpu. And the chassis is " + PC.Chassis_color;
}

var woah = "Woah";
console.log(woah);
{
    let there = "there";
    console.log(there);
}
var woah = "pal";
console.log(woah);

var L = add(5, 5);

function add(f, u) {
    return f + u;
}
document.getElementById("adder").innerHTML = L;


let gamers = {
    brand: "Xbox",
    iteration: " One",
    year: 2013,
    major_exclusive: " Halo? Not much this generation tbh :(",
    describer : function() {
    return "The " + this.brand + this.iteration + " was released in " + this.year + " and it's major exclusive was " + this.major_exclusive;
    }  
}
document.getElementById("games").innerHTML = gamers.describer();

var pop_Punk_Bands = ["New Found Glory", "Blink-182", "Neck Deep", "The Story So Far"];
var wording = ""
var G;
function for_Looping() {
    for (G = 0; G < pop_Punk_Bands.length; G++) {
    if (G === 3) { break; }
        wording += pop_Punk_Bands[G] + "<br>";
    }
    document.getElementById("List_of_bands").innerHTML = wording;
}

var fight_moves = ["punch", "kick", "take-down", "grapple"];
var string = ""
var K;
function for_Looper() {
    for (K = 0; K < fight_moves.length; K++) {
    if (K === 2) { continue; }
        string += fight_moves[K] + "<br>";  
    }
    document.getElementById("moves").innerHTML = string;
}