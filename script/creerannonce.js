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
        lat : 20,
        long: 50,
        postal_code : postal_code,
        token : user['token'],
    }

	await createAnnonce(await postJSON(localisation, "https://blabladrar.adrardev.fr/localisation/add"));
});

async function createAnnonce(data) {
	console.log(data);
	
	const title = document.querySelector("#title").value;
	const creation_date = document.querySelector("#creation_date").value;
	const description = document.querySelector("#description").value;
	const place_number = document.querySelector("#place_number").value;

	// postJSON(a, "https://blabladrar.adrardev.fr/add/add")
};

async function postJSON(donnees, url) {
    try {
        const reponse = await fetch(url, {
            method: "POST",
            body: JSON.stringify(donnees),
        })
		.then(result => {
            console.log(result);
            return result.json();
        })
		.then(response => {
			console.log(response);
			return response;
		})
    } catch (erreur) {
        console.error("Erreur :", erreur);
    }
}