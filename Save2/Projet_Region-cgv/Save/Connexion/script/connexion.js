document.querySelector("#buttonSubmit").addEventListener('click', apiConnexion)

function apiConnexion() {

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = {
        email: email,
        password: password,
    }

    postJSON(data)

}

// Récupérer les données du formulaire
async function postJSON(donnees) {
    try {
        const reponse = await fetch("https://blabladrar.adrardev.fr/user/token", {
            method: "POST",
            body: JSON.stringify(donnees),
        });

        const resultat = await reponse.json();

        const user = {
            id : resultat['id'], 
            name : resultat['name'], 
            lastname : resultat['lastname'],
            email : resultat['email'],
            token : resultat['token'],
        }
        
        const userJSON = JSON.stringify(user);
        localStorage.setItem('User_CarPool', userJSON);
    
    } catch (erreur) {
        console.error("Erreur :", erreur);
    }
}