function dis(son) {
    var a = document.getElementsByClassName('box');

    var i;
    for (i = 0; i < a.length; i++) {

        if (son == i) {
            a[i].style.display = "block";
        } else {
            a[i].style.display = "none";
        }
    }
}

function f1(harf, son) {
    var b = document.getElementById("nav");
    b.innerHTML += "<li>" + "<b>" + son + " - savolga " + "</b>" + harf + " ni" + " tanladingiz" + "</li>";


}

function f2() {
    document.getElementById("nav").style.display = "block";
}