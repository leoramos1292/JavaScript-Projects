function Whitney() {
    var uno = "I believe the children are our are future. ";
    var dos = "Teach them well and let them lead the way. ";
    var tres = "Show them all the beauty they possess inside. ";
    var quatro = "RIP - Whitney 1963 - 2012";
    var whole = uno.concat(dos, tres, quatro);
    document.getElementById("concatenate").innerHTML = whole;
}

function slicer() {
    var phrase = "Dont, make be close one more door. I don't wanna hurt anymore";
    var piece = phrase.slice(37, 62);
    document.getElementById("I_Have_Nothing").innerHTML = piece;
}

function whitney2() {
    var str = "no whitney! come back!";
    var caps = str.toUpperCase();
    document.getElementById("why_Whitney").innerHTML = caps;
}

function searching() {
    var words = "Why you gotta go Whitney!?"
    var find = words.search("Whitney!?");
    document.getElementById("demo").innerHTML = find;
}

function string_stuff() {
    var x = 1738;
    document.getElementById("number_2_string").innerHTML = x.toString();
}

function whit_words() {
    var whit = 1345413.6843646165454354313213235435135354354;
    document.getElementById("whitney_lyrics").innerHTML = whit.toPrecision(15)
}

function fixing() {
    var boo = 25.2354
    document.getElementById("demonstration").innerHTML = boo.toFixed(3)
}

function issue() {
    var band = "Issues"
    var t = band.valueOf();
    document.getElementById("tapping_out_goodsong").innerHTML = t;
}
