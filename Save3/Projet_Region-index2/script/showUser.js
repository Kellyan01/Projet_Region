const userData = JSON.parse(localStorage.getItem('User_CarPool'));
console.log(userData);

//      AUTHENTIFICATION        //
const options = {
    method: 'GET',
};

//      REQUETE API     //
fetch('https://blabladrar.adrardev.fr/user/id/' + userData.id, options)
    .then(response => {

        //      TRANSFORME L'OBJET EN JSON      //
        return response.json();
    })
    // //      UTILISATION DES DONNEES         //
    .then(resultat => {
        nom.innerText = resultat.firstname + " " + resultat.name;
        email.innerText = resultat.email;
        console.log(resultat.email);
    });