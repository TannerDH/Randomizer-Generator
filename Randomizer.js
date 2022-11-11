let x;

document.getElementById("generateButton").onclick = function() {
    x = Math.floor(Math.random() * 906) + 1;

    document.getElementById("xlabel").innerHTML = x;
}