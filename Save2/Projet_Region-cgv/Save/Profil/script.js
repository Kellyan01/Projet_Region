const userData = JSON.parse(localStorage.getItem('id'));
console.log(userData);

//      AUTHENTIFICATION        //
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    }
};

//      REQUETE API     //
fetch('https://blabladrar.adrardev.fr/user/id/1', options)
    .then(response => {

    //      TRANSFORME L'OBJET EN JSON      //
        return response.json();
    })
    // //      UTILISATION DES DONNEES         //
    .then(resultat => {
        nom.innerText = resultat.firstname+" "+resultat.name;
        email.innerText = resultat.email;
        console.log(resultat.email);
    });

    