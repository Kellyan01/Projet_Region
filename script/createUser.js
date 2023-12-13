//INSCRIPTION D'UN UTILISATEUR
const signInForm = document.querySelector("#signInForm");
const nameInput = document.querySelector("#nameSignIn");
const firstnameInput = document.querySelector("#firstnameSignIn");
const emailInput = document.querySelector("#emailSignIn");
const passwordInput = document.querySelector("#passwordSignIn");
const signInButton = document.querySelector("#signIn");

function recupData() {
    if (nameInput.value != '' && firstnameInput.value != '' && emailInput.value != '' && passwordInput.value != '') {
        return {
            "name": nameInput.value,
            "firstname": firstnameInput.value,
            "email": emailInput.value,
            "password": passwordInput.value
        }
    } else {
        throw ("Formulaire incorrectement rempli");
    }
}

function signIn(data) {
    fetch('https://blabladrar.adrardev.fr/user/add', {
            method: "POST",
            body: JSON.stringify(data),
        })
        .then(response => {
            return response.json();
        })
        .then(result => {
            console.log(result);
            signInForm.reset();
            location.href = 'connexion.html';
            /*return result;*/
        })
        .catch(error => {
            console.error(error);
            return error;
        })
}

signInButton.addEventListener("click", event => {
    event.preventDefault();
    try {
        const user = recupData();
        console.log(user);
        signIn(user);
        /*signInForm.reset();*/
        /*location.href = 'connexion.html';*/
        /*let aside = document.querySelector("#blue_background");*/

    } catch (error) {
        console.error(error);
    }
})