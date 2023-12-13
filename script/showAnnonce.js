// let heureDepart = document.querySelector('#heureDepart');
// let lieuDepart = document.querySelector('#lieuDepart');
let title = document.querySelector('#title');
let utilisateur = document.querySelector('#utilisateur');
let lieuArrivee = document.querySelector('#lieuArrivee');
let infosComplementaires = document.querySelector('#infosComplementaires');
let dateCreation = document.querySelector('#dateCreation');
let nbPlaces = document.querySelector('#nbPlaces');

function showArticle(data) {
    title.innerText = data['title'];
    utilisateur.innerText = data['userId']['name'] + " " + data['userId']['firstname'];
    // heureDepart.innerText = data['placeNumber'];
    nbPlaces.innerText = data['placeNumber'];
    // lieuDepart.innerText = data['localisationId'];
    lieuArrivee.innerText = data['localisationId']['nameLocalisation'] + ", " + data['localisationId']['numStreet'] + " " + data['localisationId']['nameStreet'] + ", " + data['localisationId']['town'] + " " + data['localisationId']['postalCode'];
    infosComplementaires.innerText = data['description'];
    dateCreation.innerText = data['creation_date'].substring(8, 10) + "/" + data['creation_date'].substring(5, 7) + "/" + data['creation_date'].substring(0, 4);
}


async function getArticle(id) {
    try {
        const reponse = await fetch('https://blabladrar.adrardev.fr/add/id/' + id, {
            method: "GET",
        });

        const resultat = await reponse.json();
        showArticle(resultat);
        console.log(resultat);
        let img;
        switch (resultat.userId.id) {
            case 8:
                img = "./img/avatar/yoann-1.jpg";
                break;
            case 9:
                img = "./img/avatar/sophie-1.jpg";
                break;
            case 10:
                img = "./img/avatar/jeff-1.jpg";
                break;
            case 11:
                img = "./img/avatar/mathieu-1.jpg";
                break;
            case 12:
                img = "./img/avatar/jerome-1.jpg";
                break;
            default:
                img = "./img/gerard.jpg";
        }
        const avatar = document.querySelector("#avatar");
        avatar.setAttribute("src", img);
    } catch (erreur) {
        console.error("Erreur :", erreur);
    }
}

async function showReponse(id) {

    fetch('https://blabladrar.adrardev.fr/participate/all/' + id, {
            method: "GET",
        })
        .then(response => {
            return response.json();
        })
        .then(result => {
            console.log("REPONSE :");
            console.log(result);

            result.forEach(reponse => {
                let img;
                switch (reponse.userId.firstname) {
                    case "Yoann":
                        img = "./img/avatar/yoann-1.jpg";
                        break;
                    case "Sophie":
                        img = "./img/avatar/sophie-1.jpg";
                        break;
                    case "Jeff":
                        img = "./img/avatar/jeff-1.jpg";
                        break;
                    case "Mathieu":
                        img = "./img/avatar/mathieu-1.jpg";
                        break;
                    case "Jérôme":
                        img = "./img/avatar/jerome-1.jpg";
                        break;
                    default:
                        img = "./img/gerard.jpg";
                }
                createCard(img, reponse.addId.title, reponse.message);
            });
        })
        .catch(error => {
            console.log(error);
        })
}

function createCard(img, title, message, id = null) {

    let main = document.querySelector('#cards_zone');
    let box = document.createElement('div');
    let titleReponse = document.createElement('h3');
    let profile = document.createElement('img');
    let sbox = document.createElement('div');
    let messageReponse = document.createElement('div');

    box.classList.add('box');
    main.appendChild(box);
    titleReponse.classList.add('one');
    box.appendChild(titleReponse);
    sbox.classList.add('sbox');
    box.appendChild(sbox);
    profile.classList.add('img');
    sbox.appendChild(profile);
    sbox.appendChild(messageReponse);

    titleReponse.innerText = title;
    profile.src = img;
    profile.alt = "Image Avatar";
    messageReponse.innerText = message;
}

getArticle(localStorage.getItem("idAnnonce"));
showReponse(localStorage.getItem("idAnnonce"));