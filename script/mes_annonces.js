// FONCTION CREATION CARDS //
function createCard(img, depart, arriv, departTime, descript, id = null) {

    let main = document.querySelector('#cards_zone');
    let box = document.createElement('div');
    let title = document.createElement('h3');
    let profile = document.createElement('img');
    let sbox = document.createElement('div');
    let div = document.createElement('div');
    let departLeave = document.createElement('p');
    let localLeave = document.createElement('p');
    let desc = document.createElement('p');
    let buttonDiv = document.createElement('div');
    let button = document.createElement('button');
    let link = document.createElement('a');

    box.classList.add('box');
    main.appendChild(box);
    title.classList.add('one');
    box.appendChild(title);
    sbox.classList.add('sbox');
    box.appendChild(sbox);
    profile.classList.add('img');
    sbox.appendChild(profile);
    sbox.appendChild(div);
    div.appendChild(departLeave);
    div.appendChild(localLeave);
    div.appendChild(desc);
    div.appendChild(buttonDiv);
    buttonDiv.appendChild(button);
    button.appendChild(link);

    profile.src = `./img/${img}`;
    profile.alt = 'Image Avatar';
    title.innerText = `Annonce : ${depart}  >>  ${arriv}`;
    departLeave.innerText = `Heure de départ : ${departTime}`;
    localLeave.innerText = `Lieu de départ : ${depart}`;
    desc.innerText = `${descript}`;
    link.innerText = 'Réserver';
    link.href = `./annonce_view.html`;
}

//    VARIABLE POUR INFOS MANQUANTES      // 
let img = "image_profil.png";
let hour = "8h30";

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
        //      Trouve l'id utilisateur local      //
        let userId = localStorage.getItem('User_CarPool');
        let user = JSON.parse(userId);
  
        const userLocal = user["id"];
        //      Trouve l'id utilisateur d'une annonce      //
        resultat.forEach((element) => {
            if(userLocal==element["userId"]["id"]){
                createCard(img, element.localisationId.nameLocalisation, element.localisationId.town, hour, element.description);
            }
    });
});