function deconnexion() {
    localStorage.clear();
}

let boutonDeconnexion = document.getElementById('liBoutonDeconnexion');
boutonDeconnexion.onclick = function() {
    deconnexion();
    location.href = 'index.html';
};