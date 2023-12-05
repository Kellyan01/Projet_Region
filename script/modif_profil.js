// updateLocalStorage('2')

const inputName = document.querySelector('#name');
const inputFirstname = document.querySelector('#firstname');
const inputEmail = document.querySelector('#email');

let userData = localStorage.getItem('User_CarPool');
let user = JSON.parse(userData);
        
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
    delete user['id'];
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


async function updateLocalStorage(id) {
  try {
    const reponse = await fetch('https://blabladrar.adrardev.fr/user/id/'+id, {
      method: "POST",
    });

    const resultat = await reponse.json();
    responseJSON = JSON.stringify(resultat);
    localStorage.setItem('User_CarPool', responseJSON);
  } catch (erreur) {
    console.error("Erreur :", erreur);
  }
}