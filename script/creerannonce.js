const formulaire1 = document.querySelector("#formulaire");
const publier = document.querySelector("#publier");

let userData1 = localStorage.getItem('User_CarPool');
let user = JSON.parse(userData1);

publier.addEventListener("click", async function(event) {
    event.preventDefault();
    const name_localisation = document.querySelector("#name_localisation").value;
    const name_street = document.querySelector("#name_street").value;
    const num_street = document.querySelector("#num_street").value;
    const town = document.querySelector("#town").value;
    const postal_code = document.querySelector("#postal_code").value;

    let localisation = {
        name_localisation: name_localisation,
        name_street: name_street,
        num_street: num_street,
        town: town,
        lat: 20,
        long: 50,
        postal_code: postal_code,
        token: user['token'],
    }

    postLocalisation(localisation);
});

async function postLocalisation(donnees) {
    try {
        const reponse = await fetch("https://blabladrar.adrardev.fr/localisation/add", {
                method: "POST",
                body: JSON.stringify(donnees),
            })
            .then(result => {
                return result.json();
            })
            .then(response => {
                console.log(response);
                postAnnonce(response)
                return response;
            })
    } catch (erreur) {
        console.error("Erreur :", erreur);
    }
}

async function postAnnonce(dataLocalisation) {

    let data = {
        title: document.querySelector("#title").value,
        creation_date: document.querySelector("#creation_date").value,
        description: document.querySelector("#description").value,
        place_number: document.querySelector("#place_number").value,
        localisation_id: dataLocalisation['localisation']['id'],
        token: user['token'],
    }

    try {
        const reponse = await fetch("https://blabladrar.adrardev.fr/add/add", {
                method: "POST",
                body: JSON.stringify(data),
            })
            .then(result => {
                return result.json();
            })
            .then(response => {
                location.href = "mesannonces.html";
                return response;
            })
    } catch (erreur) {
        console.error("Erreur :", erreur);
    }
}