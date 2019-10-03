function vote_poll() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "Sorry kid, you're too young to pick our country's leader. Why don't you grow up a bit first then come back. You already knew this, why are you even trying?":"Go vote!";
    document.getElementById("vote").innerHTML = can_vote;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle(" Dodge", " Viper", 2020, "Red");
var Emily = new Vehicle(" Jeep", " Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle(" Ford", " Pinto", 1971, "Mustard"); 
function myFunction() {
    document.getElementById("Keywords_and_Constructions").innerHTML=
    "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Make + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Playstation(Iteration, Model, Game, Year) {
    this.PS_Iteration = Iteration;
    this.PS_Model = Model;
    this.PS_Game = Game;
    this.PS_Year = Year;
}
var Randy = new Playstation(" PS2", "Base", "GTA 3", 2002);
var Leo = new Playstation("PS4", "Slim", "Uncharted", 2018);
var Marcos = new Playstation("PS1", "base", "Resident Evil 3", 1999);
function psHave() {
    document.getElementById("New_and_This").innerHTML =
    "Randy got the " + Randy.PS_Model + Randy.PS_Iteration + " in " + Randy.PS_Year + ". The first game he got with it was " + Randy.PS_Game + ".";

}
function Concert(Band, City, Venue, Day) {
    this.Band = Band;
    this.City = City;
    this.Venue = Venue;
    this.Day = Day;
}

function math_Time() {
    document.getElementById("nested_Function").innerHTML = up_by_six();
    function up_by_six() {
        var upper = 15;
        function add() {upper += 6;}
        add();
        return upper;
    }
}
