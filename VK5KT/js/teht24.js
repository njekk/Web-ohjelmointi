"use strict";
nameToBIG();
function nameToBIG(){
    var name = prompt("Syötä nimesi");
    var nameBIG = name.toUpperCase();
    document.getElementById("name").innerHTMLniko = nameBIG;
}
