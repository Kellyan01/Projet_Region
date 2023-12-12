// let heureDepart = document.querySelector('#heureDepart');
// let lieuDepart = document.querySelector('#lieuDepart');
let title = document.querySelector('#title');
let utilisateur = document.querySelector('#utilisateur');
let lieuArrivee = document.querySelector('#lieuArrivee');
let infosComplementaires = document.querySelector('#infosComplementaires');
let dateCreation = document.querySelector('#dateCreation');
let nbPlaces = document.querySelector('#nbPlaces'); 

function showArticle(data) {
    console.log(data);

    title.innerText = data['title'];
    utilisateur.innerText = data['userId']['name']+" "+data['userId']['firstname'];
    // heureDepart.innerText = data['placeNumber'];
    nbPlaces.innerText = data['placeNumber'];
    // lieuDepart.innerText = data['localisationId'];
    lieuArrivee.innerText = data['localisationId']['nameLocalisation']+ ", " +data['localisationId']['numStreet']+  " "+data['localisationId']['nameStreet']+ ", " +data['localisationId']['town']+ " " +data['localisationId']['postalCode'];
    infosComplementaires.innerText = data['description'];
    dateCreation.innerText = data['creation_date'];
    console.log(data['localisationId']['nameStreet']);
}

async function getArticle(id) {
    try {
        const reponse = await fetch('https://blabladrar.adrardev.fr/add/id/' + id, {
            method: "GET",
        });

        const resultat = await reponse.json();
        await showArticle(resultat);
    } catch (erreur) {
        console.error("Erreur :", erreur);
    }
}