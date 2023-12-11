//      AUTHENTIFICATION        //
const options = {
    method: 'GET',
};

//      REQUETE API     //
fetch('https://blabladrar.adrardev.fr/add/all', options)
    .then(response => {

        //      TRANSFORME L'OBJET EN JSON      //
        return response.json();
    })
    // //      UTILISATION DES DONNEES         //
    .then(resultat => {
        console.log(resultat);
        date.innerHTML = resultat[0].creation_date.substring(0, 10);
        heure.innerHTML = resultat[0].creation_date.substring(11, 13) + "h" + resultat[0].creation_date.substring(14, 16);
        destination.innerHTML = resultat[0].localisationId.town;
        place.innerHTML = resultat[0].placeNumber + " places restantes";
        userName.innerHTML = resultat[0].userId.firstname + " " + resultat[0].userId.name;
        console.log("Utilisateur : " + resultat[0].userId.firstname + " " + resultat[0].userId.name);
    });