// updateLocalStorage('2')

//Afficher/Cacher Modif Form
function openForm() {
    document.getElementById("hideform").style.display = "block";
}

function closeForm() {
    document.getElementById("hideform").style.display = "none";
}


const inputName = document.querySelector('#name');
const inputFirstname = document.querySelector('#firstname');
const inputEmail = document.querySelector('#emailUpdate');

let userData2 = localStorage.getItem('User_CarPool');
let user = JSON.parse(userData2);

const id = user['id'];

inputName.value = user["name"];
inputFirstname.value = user["firstname"];
inputEmail.value = user["email"];

inputName.placeholder = user["name"];
inputFirstname.placeholder = user["firstname"];
inputEmail.placeholder = user["email"];

function updateUserInfo() {
    user["name"] = inputName.value;
    user["firstname"] = inputFirstname.value;
    user["email"] = inputEmail.value;
    /*delete user['id'];*/ //-> pas besoin de delete cet id !
    postJSON(user);
}

async function postJSON(donnees) {
    try {
        const reponse = await fetch("https://blabladrar.adrardev.fr/user/update", {
            method: "POST",
            body: JSON.stringify(donnees),
        });
        updateLocalStorage(id);
    } catch (erreur) {
        console.error("Erreur :", erreur);
    }
}

//CORRECTION : pas besoin de Fetch pour mettre à jour le Local Storage. Il suffit de réinjecter les informations entrés en Input dans le Local Storage
async function updateLocalStorage(id) {
    try {
        const reponse = await fetch('https://blabladrar.adrardev.fr/user/id/' + id, {
            method: "GET",
        });

        const resultat = await reponse.json();
        responseJSON = JSON.stringify(resultat);
        localStorage.setItem('User_CarPool', responseJSON);
    } catch (erreur) {
        console.error("Erreur :", erreur);
    }
}

const modifButton = document.querySelector("#modifButton");
modifButton.addEventListener("click", event => {
    event.preventDefault();
    updateUserInfo();
})