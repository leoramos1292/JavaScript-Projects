document.write(typeof 5);

function theFunction() {
    document.getElementById("Test1").innerHTML = 0/0;
}

function theFunction2() {
    document.getElementById("Test2").innerHTML = isNaN('5');
}

function theFunction3() {
    document.getElementById("Test3").innerHTML = isNaN('Betsy');
}

document.write(-2E310);
document.write(3E5246);

document.write(500 > 3000);

console.log(5 + 27);

console.log(10 > 53);

console.log(53 == 53);

console.log(54 == 53);

console.log(15 === 15);

console.log("ten" === 15);

console.log(10 === "ten");

console.log(26 === 27);

document.write("10" + 5)

document.write(5 < 25 && 25 < 68);
document.write(5 > 25 || 25 > 7);

function not_function() {
    document.getElementById("not").innerHTML = !(26 > 25);
}