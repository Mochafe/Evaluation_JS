function verifyForm() {
    let error = false;//bool pour savoir si une erreur a eu lieu

//Vérifie le champ [Votre nom]
    if(!nameFilter.test(document.contact[1].value)) {
        error = true;
        document.getElementById("name-error").style = block;
    } else {
        document.getElementById("name-error").style = none;
    }

//Vérifie le champ [Votre prénom]  
    if(!nameFilter.test(document.contact[2].value)) {
        error = true;
        document.getElementById("first_name-error").style = block;
    } else {
        document.getElementById("first_name-error").style = none;
    }

//Vérifie la radio [Sexe]
    if(!verifyRadio(document.getElementsByName("sex"))) {
        error = true;
        document.getElementById("sex-error").style = block;
    } else {
        document.getElementById("sex-error").style = none;
    }

//Vérifie la date [Date de naissance]
    if(form[5].value.split("-")[0] >= (new Date().getFullYear()) || form[5].value == "") {
        error = true;
        document.getElementById("birth_day-error").style = block;
    } else {
        document.getElementById("birth_day-error").style = none;
    }

//Vérifie le champ [Code postal]
    if(!zipFilter.test(form[6].value)) {
        error = true;
        document.getElementById("zip-error").style = block;
    } else {
        document.getElementById("zip-error").style = none;
    }

//Vérifie le champ [Email]
    if(!mailFilter.test(form[9].value.toLowerCase())) {
        error = true;
        document.getElementById("mail-error").style = block;
    } else {
        document.getElementById("mail-error").style = none;
    }

//Vérifie le champ [Sujet]
    if(form[11].value == "") {
        error = true;
        document.getElementById("object-error").style = block;
    } else {
        document.getElementById("object-error").style = none;
    }

//Vérifie le champ [Votre questions]
    if(!form[12].value.length > 0) {
        error = true;
        document.getElementById("ask-error").style = block;
    } else {
        document.getElementById("ask-error").style = none;
    }

//Vérifie la checkbox [J'accepte le traitement informatique de ce formulaire]
    if(!form[13].checked) {
        error = true;
        document.getElementById("accept-error").style = block;
    } else {
        document.getElementById("accept-error").style = none;
    }

//Si il n'y a pas eu d'erreur envoi le formulaire
    if(!error) {
        form.submit();
    }


}

function verifyRadio(radio) {//Verifie si les radio sont coché
    for(value of radio) {
        if(value.checked) {
            return true;
        }
    }
    return false;
}

function clearForm(){
    for(input of form) {
        if(input.name == "avoid") {//Check pour ne pas prendre le fieldset
            continue;
        } else if(input.type == "radio") {//Décoche les radio
            input.checked = false;
        } else if(input.type == "button") {//Check pour ne pas supprimer la value des boutons
            continue;
        } else if(input.type == "checkbox") {//Dechoce les checkbox
            input.checked = false;
        } else {
            input.value = "";//Vide tous les champs de texte
        }
    }
}

//Style pour les erreurs
let block = "display: block;";
let none = "display: none;";

//Formulaire
let form = document.contact;

//Boutons
let send_btn = document.getElementById("send-btn");//Bouton d'envoye
let cancel_btn = document.getElementById("cancel-btn");//Bouton pour annuler

//Filtre RegEx
let nameFilter = new RegExp(/^([a-zA-Z\u00C0-\u00FF]+( |-)?)+$/);//Filtre pour les noms seulement Lettres, espace et - autorisé
let zipFilter = new RegExp(/^\d{5}$/);//Filtre pour le code postal seulement 5 digit autorisé
let mailFilter = new RegExp(/^(([a-z]+)|(\d+)|(-|_|\.))+@[a-z]+\.[a-z]+$/);//Filtre pour l'e-mail (caractères, digit, - _ .  suivit de @ puis de lettres puis d'un . et de lettres)


//EventListener
send_btn.addEventListener("click", verifyForm);//Quand clic sur le bouton envoyer lance la fonction pour vérifier le formulaire et l'envoye si tous est correct
cancel_btn.addEventListener("click", clearForm);//Qaund clic nettoye le formulaire