function reproducirAudio() {
    var audio = document.getElementById("audio");

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("envio").addEventListener("submit", function () {
    setTimeout(function () {
        location.reload();
    }, 1000);
});