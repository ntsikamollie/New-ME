function geekConfirm() {
    var x;
    if (confirm("Press a button!") == true) {
        x = "OK pressed!";
    } else {
        x = "Cancel!";
    }
    document.getElementById("geek").innerHTML = x;
}