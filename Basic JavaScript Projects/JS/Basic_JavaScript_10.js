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

var l = add(5, 5);

function add(f, u) {
    return f + u;
}
document.getElementById("adder").innerHTML = l;


