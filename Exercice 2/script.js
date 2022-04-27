function tableMultiplication(num) {
    var textArea = document.getElementById("display");
    var textBuff = "";
    for(var i = 1; i <= 10; i++) {
        textBuff += i + " x " + num + " = " + (i * num) + "\n";
    }
    textArea.value = textBuff;
}

function verification() {
    var num = parseInt(document.getElementById("nombre").value);

    if(isNaN(num) || num == 0) {
        document.getElementById("error").style = "display: block;";
        console.log(typeof num + "_" + num);
    } else {
        tableMultiplication(num);
        document.getElementById("error").style = "display: none;";
    }
}

document.getElementById("btn").addEventListener("click", verification);

document.getElementById("nombre").addEventListener("keyup", function(event) {
    if(event.defaultPrevented) {
        return;
    }

    if(event.key == "Enter") {
        verification();
    }

    event.preventDefault();
}, true);