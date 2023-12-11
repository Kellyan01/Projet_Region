function deconnexion() {
    localStorage.clear();
}

let boutonDeconnexion = document.getElementById('boutonDeconnexion');
boutonDeconnexion.onclick = function() {
    deconnexion();
};