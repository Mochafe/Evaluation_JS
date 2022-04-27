

function calculate(price, quantity) {
    let tot = price * quantity;
    let rem; //remise en %

    if(tot >= 100 && tot <= 200) {
        rem = 5;
    } else if(tot > 200) {
        rem = 10;
    } else {
        rem = 0;
    }

    let pay = tot * -((rem / 100) - 1);
    let remNum = tot - pay;//remise en €
    let portNum = (pay > 500) ? 0 : (pay * 0.02);//frais de port

    if(portNum > 0 && portNum < 6)
        portNum = 6;
    
    displayResult(rem, remNum, pay, portNum)
}

function displayResult(rem, remNum, pay, port){
    display.value = `remise ${rem}% (-${remNum.toFixed(1)}€) soit ${pay.toFixed(1)}€ et frais de port ${port}€ , à payer ${(pay + port)}€`;
}

function verify() {
    let error = false;
    let _price = parseFloat(price.value);
    let _quantity = parseFloat(quantity.value);
    if(isNaN(_price)) {
        document.getElementById("error-price").style = "display: block;";
        error = true;
    } else {
        document.getElementById("error-price").style = "display: none;";
    }
    if(isNaN(_quantity)) {
        document.getElementById("error-quantity").style = "display: block;";
        error = true;
    } else {
        document.getElementById("error-quantity").style = "display: none;";
    }
    if(!error) {
        calculate(_price, _quantity);
    }
}

let display = document.getElementById("display");
let price = document.getElementById("price");
let quantity = document.getElementById("quantity");
let button = document.getElementById("btn");

btn.addEventListener("click", verify);