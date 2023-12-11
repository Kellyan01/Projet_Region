const userData = JSON.parse(localStorage.getItem('User_CarPool'));
console.log(userData);

if (userData == null) {
    document.querySelector("#liBoutonDeconnexion").style.display = "none";
    document.querySelector("#liProfil").style.display = "none";
    document.querySelector("#liMesAnnonces").style.display = "none";
} else {
    document.querySelector("#liConnexion").style.display = "none";
    document.querySelector("#liInscription").style.display = "none";
}