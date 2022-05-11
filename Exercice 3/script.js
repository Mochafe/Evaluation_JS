function displayTab() {
    let strBuff = "[";

    for(cell in tab) {
        strBuff += `\"${tab[cell]}\"`;
        if(cell == tab.length - 1) {
            strBuff += "];";
            break;
        }
        else {
            strBuff += ", ";
        }          
    }

    display.value = strBuff;
}

function searchName() {
    let i = tab.indexOf(input.value);

    if(i == -1) {
        alert("Nom introuvable");
    } else {
        deleteName(i);
        displayTab();
    }
}

function deleteName(index) {
    tab.splice(index, 1);
    tab.push("");

    input.value = "";
}

let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

let display = document.getElementById("display");
let input = document.getElementById("input");
let button = document.getElementById("search-btn");

button.addEventListener("click", searchName);
displayTab();

