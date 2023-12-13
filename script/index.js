let annonceData;
let submit = document.querySelector('#submit');

async function getPost() {
    try {

        let query = await fetch('https://blabladrar.adrardev.fr/add/all', { method: 'GET' });

        let response = await query.json();

        console.log(response);

        // let destinationInput = document.getElementById("destinationInput").value;

        // response.forEach(annonce => {
        //     if(destinationInput == annonce.localisationId.town){
        //         let img = "image_profil.png";
        //         let hour = "8h30";
        //         createCard(img, annonce.localisationId.nameLocalisation, annonce.localisationId.town, hour, annonce.description);
        //     }
        // });

        // console.log(submit);

        response.forEach(annonce => {
            if (annonce.userId.id > 7) {
                let img;
                switch (annonce.userId.id) {
                    case 8:
                        img = "avatar/yoann-1.jpg";
                        break;
                    case 9:
                        img = "avatar/sophie-1.jpg";
                        break;
                    case 10:
                        img = "avatar/jeff-1.jpg";
                        break;
                    case 11:
                        img = "avatar/mathieu-1.jpg";
                        break;
                    case 12:
                        img = "avatar/jerome-1.jpg";
                        break;
                    default:
                        img = "gerard.jpg";
                }
                let date = annonce['creation_date'].substring(8, 10) + "/" + annonce['creation_date'].substring(5, 7) + "/" + annonce['creation_date'].substring(0, 4);
                createCard(img, annonce.localisationId.nameLocalisation, annonce.title, date, annonce.description, annonce.id);
            }
        });

        linkAnnonce();

    } catch (error) {

        console.error(error);

    }
}

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
    title.innerText = `${arriv}`;
    departLeave.innerText = `Date : ${departTime}`;
    localLeave.innerText = `Destination : ${depart}`;
    desc.innerText = `${descript}`;
    link.innerText = 'Détails';
    /*link.href = `./annonce_view.html`;*/
    button.setAttribute('annonce', id);
}

getPost();

function linkAnnonce() {
    const buttonAnnonce = document.querySelectorAll("button[annonce]");
    console.log(buttonAnnonce);
    for (let annonce of buttonAnnonce) {
        console.log(annonce.getAttribute("annonce"));
        annonce.addEventListener("click", event => {
            event.preventDefault();
            localStorage.setItem("idAnnonce", annonce.getAttribute("annonce"));
            location.href = "annonce_view.html";
        })
    }
}