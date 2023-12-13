let annonceData;
let submit = document.querySelector('#submit');

async function getPost() {
    try {

        let query = await fetch('https://blabladrar.adrardev.fr/add/all', { method: 'GET' });

        let response = await query.json();

        console.log(response);

        response.forEach(annonce => {
            let img = "image_profil.png";
            let hour = "8h30";
            createCard(img, annonce.localisationId.nameLocalisation, annonce.localisationId.town, hour, annonce.description);
        });

        if (submit == true) {
            let destinationInput = document.get
        }

    } catch (error) {

        console.error(error);

    }
}

function createCard(img, depart, arriv, departTime, descript) {

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

    profile.src = `./img/${img}`;
    profile.alt = 'Image Avatar';
    title.innerText = `Annonce : ${depart}  >>  ${arriv}`;
    departLeave.innerText = `Heure de départ : ${departTime}`;
    localLeave.innerText = `Lieu de départ : ${depart}`;
    desc.innerText = `${descript}`;
    button.innerText = 'Réserver';
}

getPost();