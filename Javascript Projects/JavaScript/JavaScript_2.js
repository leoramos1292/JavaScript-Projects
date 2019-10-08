function validator(){
    var x = document.forms["contact_form"]["first name"].value;
    var y = document.forms["contact_form"]["last name"].value;
    var z = document.forms["contact_form"]["last name"].value;
    if (x == "") {
        alert("Don't leave me hangin! Gimmie some info!");
        return false;
    }
    if (y == "") {
        alert("Don't leave me hangin! Gimmie some info!");
        return false;
    }
    if (z == "") {
        alert("Don't leave me hangin! Gimmie some info!")
    }
}

