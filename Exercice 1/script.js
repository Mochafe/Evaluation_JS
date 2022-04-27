function verification() {
    if(isNaN(parseInt(nombre.value))) {
        displayStr("Valeur incorrect");
    } else {
        compte();
    }
}

function displayStr(str) {
    display.value += str + "\n";
}

function displayClear() {
    display.value = "";
}

function compte() {
    var input = parseInt(nombre.value);
    nombre.value = "";
    if(input < 100) {
        if(input < 20) {
            ages.jeune++;
            displayStr("- de 20 ans ajouter");
        } else if(input >= 20 && input <= 40) {
            ages.adulte++;
            displayStr("20-40 ans ajouter");
        } else if(input > 40) {
            ages.agee++;
            displayStr("+ de 40 ans ajouter");
        }
    } 
    else {
        ages.agee++;
        displayStr("+ de 40 ans ajouter");
        displayStr("Il y a " + ages.jeune + " personnes âgées de moins de 20 ans,\n " + ages.adulte +
        " âgées entre 20 et 40 ans,\naisni que " +
         ages.agee + " âgées de plus de 40 ans");

         bouton.value = "Recommencer";
    }
}

function clearAll(){
    nombre.value = "";
    displayClear();
}

function recommencer() {
    ages.jeune = 0;
    ages.adulte = 0;
    ages.agee = 0;

    displayClear();
    bouton.value = "Ajouter"
}

var ages = {
    jeune: 0,
    adulte: 0,
    agee: 0
};

var display = document.getElementById("display");
var nombre = document.getElementById("nombre");
var bouton = document.getElementById("bouton");


bouton.addEventListener("click", function() {
    if (bouton.value == "Recommencer") {
        recommencer();
    } else {
        verification();
    }
}, true)

nombre.addEventListener("keyup", function(event) {
    if(event.defaultPrevented) {
        return;
    }

    if(event.key == "Enter"){
        if (bouton.value == "Recommencer") {
            recommencer();
        } else {
            verification();
        }
    }
})

window.onload = clearAll;