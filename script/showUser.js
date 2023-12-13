/*const userData = JSON.parse(localStorage.getItem('User_CarPool'));
console.log(userData);*/

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
        const avatar = document.querySelector(".profilAvatar");
        switch (resultat.id) {
            case 8:
                avatar.setAttribute("src", "./img/avatar/yoann-1.jpg");
                break;
            case 9:
                avatar.setAttribute("src", "./img/avatar/sophie-1.jpg");
                break;
            case 10:
                avatar.setAttribute("src", "./img/avatar/jeff-1.jpg");
                break;
            case 11:
                avatar.setAttribute("src", "./img/avatar/mathieu-1.jpg");
                break;
            case 12:
                avatar.setAttribute("src", "./img/avatar/jerome-1.jpg");
                break;
            default:
                avatar.setAttribute("src", "./img/gerard.jpg");
        }
    });