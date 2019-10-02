function xbox() {
    var controller = {
        color: "Black",
        shoulder_buttons: "Blue",
        buttons: "Clear with colored letters",
        engraving: "Let's play HARD! Grr!",
    };
    delete controller.engraving
    document.getElementById("Dictionary").innerHTML= controller.engraving;
}