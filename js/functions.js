function reproducirAudio() {
    var audio = document.getElementById("audio");

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

window.onclick = function (event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("envio").addEventListener("submit", function () {
    setTimeout(function () {
        location.href = "index.html";
    }, 1000);
});