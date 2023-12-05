const inputName = document.querySelector('#name');
const inputFirstname = document.querySelector('#firstname');
const inputEmail = document.querySelector('#email');
const inputAvatar = document.querySelector('#avatar');

let user;

async function getUser() {

    let response = await fetch('https://blabladrar.adrardev.fr/user/id/2');

    if (response.ok) {
        user = await response.json();
        
        inputName.value = user["name"];
        inputFirstname.value = user["firstname"];
        inputEmail.value = user["email"];
        
        inputName.placeholder = user["name"];
        inputFirstname.placeholder = user["firstname"];
        inputEmail.placeholder = user["email"];
    }
}

getUser()

async function postJSON(donnees) {
    try {
      const reponse = await fetch("https://blabladrar.adrardev.fr/user/update", {
        method: "POST",
        body: JSON.stringify(donnees),
      });
  
      const resultat = await reponse.json();
      console.log("Réussite :", resultat);
    } catch (erreur) {
      console.error("Erreur :", erreur);
    }
}

function updateUserInfo() {
    user["name"] = inputName.value;
    user["firstname"] = inputFirstname.value;
    user["email"] = inputEmail.value;
    delete user['id'];
    postJSON(user);
}

// Récupération User - CarPool
// const retrievedUserJSON = localStorage.getItem('User_CarPool');
// const user = JSON.parse(retrievedUserJSON);




// inputAvatar.value = user["avatar"];
