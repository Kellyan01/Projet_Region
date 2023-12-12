async function getPost() {
    try {

        let query = await fetch('https://blabladrar.adrardev.fr/add/all', { method: 'GET' });

        let response = await query.json();

        return response;

    } catch (error) {

        console.error(error);

    }
}

let annonceData = getPost();

console.log(annonceData);

function createCard() {

    let cardsZone = document.getElementById('cards_zone');
    let cardIndex1 = document.createElement('div');
    let profile = document.createElement('img');
    let travelInfo1 = document.createElement('div');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let destination = document.createElement('img');
    let hours = document.createElement('div');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let travelInfo2 = document.createElement('div');
    let hicon = document.createElement('img');
    let p5 = document.createElement('p');
    let button = document.createElement('button');

    cardIndex1.classList.add('card_index');
    cardsZone.appendChild(cardIndex1);
    profile.classList.add('profil');
    cardIndex1.appendChild(profile);
    travelInfo1.classList.add('travel_info');
    cardIndex1.appendChild(travelInfo1);
    travelInfo1.appendChild(p1);
    destination.classList.add('destination');
    travelInfo1.appendChild(destination);
    travelInfo1.appendChild(p2);
    hours.classList.add('hours');
    cardIndex1.appendChild(hours);
    hours.appendChild(p3);
    hours.appendChild(p4);
    travelInfo2.classList.add('travel_info');
    cardIndex1.appendChild(travelInfo2);
    hicon.classList.add('human_icon');
    travelInfo2.appendChild(hicon);
    travelInfo2.appendChild(p5);
    travelInfo2.appendChild(button);

    profile.src = './img/image_profil.PNG';
    destination.src = './img/trajet.png';
    hicon.src = './img/homme.png';
    p1.innerText = 'Ramonville';
    p2.innerText = 'Borderouge';
    p3.innerText = '8h30';
    p4.innerText = '9h00';
    p5.innerText = '1/3 places';
    button.innerText = 'Voir plus';
}