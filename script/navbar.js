const userData = JSON.parse(localStorage.getItem('User_CarPool'));
console.log(userData);

if (userData == null) {
    // Profil
    document.querySelector("#liBoutonDeconnexion").style.display = "none";
    document.querySelector("#liProfil").style.display = "none";

    // Burger
    document.querySelector("#liMesAnnonces").style.display = "none";
    document.querySelector("#liCreerAnnonce").style.display = "none";
} else {
    // Profil
    document.querySelector("#liConnexion").style.display = "none";
    document.querySelector("#liInscription").style.display = "none";
}