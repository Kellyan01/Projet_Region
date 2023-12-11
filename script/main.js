const formulaire = document.querySelector("#formulaire");

const title = document.querySelector("#title").value;
const creation_date = document.querySelector("#creation_date").value;
const description = document.querySelector("#description").value;
const place_number = document.querySelector("#place_number").value;
const name_localisation = document.querySelector("#name_localisation").value;
const name_street = document.querySelector("#name_street").value;
const num_street = document.querySelector("#num_street").value;
const town = document.querySelector("#town").value;
const postal_code = document.querySelector("#postal_code").value;

let userData2 = localStorage.getItem('User_CarPool');
let user = JSON.parse(userData2)

const form = document.querySelector("#formulaire");
form.addEventListener("submit", async function(e) {
    e.preventDefault();
    console.log(this);
    const formData = new FormData(this);
    formData.append('token', user['token']);
    formData.append('lat', null);
    formData.append('long', null);
    formData.delete("title");
    formData.delete("creation_date");
    formData.delete("description");
    formData.delete("place_number");
    console.log(formData);
    fetch("https://blabladrar.adrardev.fr/localisation/add", {
            method: "POST",
            body: formData,
        })
        .then(async response => {
            console.log(await response.json());
        })
});

// formulaire.addEventListener("submit", function (e) {
//     console.log("Azerty");
//     let localisation = {
//         name_localisation: title,  
//         name_street: name_street,
//         num_street: num_street,
//         town: town,
//         lat : null,
//         long: null,
//         postal_code : postal_code,
//         token : user['token'],
//     }
//     postJSON(localisation)
// });

// async function postJSON(donnees) {
//     try {
//         const reponse = await fetch("https://blabladrar.adrardev.fr/localisation/add", {
//             method: "POST",
//             body: JSON.stringify(donnees),
//         });
//     } catch (erreur) {
//         console.error("Erreur :", erreur);
//     }
// }