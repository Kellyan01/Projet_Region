//INSCRIPTION D'UN UTILISATEUR
const signInForm = document.querySelector("#signInForm");
const nameInput = document.querySelector("#name");
const firstnameInput = document.querySelector("#firstname");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const signInButton = document.querySelector("#signIn");

function recupData(){
    if(nameInput.value != '' && firstnameInput.value != '' && emailInput.value != '' && passwordInput.value != ''){
        return {
            "name" : nameInput.value,
            "firstname" : firstnameInput.value,
            "email" : emailInput.value,
            "password" : passwordInput.value
        }
    }else{
        throw("Formulaire incorrectement rempli");
    }
}

function signIn(data){
    fetch('https://blabladrar.adrardev.fr/user/add',
    {
        method: "POST",
        body: JSON.stringify(data),    
    })
    .then(response => {
        return response.json();
    })
    .then(result => {
        console.log(result);
        return result;
    })
    .catch(error => {
        console.error(error);
        return error;
    })
}

signInButton.addEventListener("click",event => {
    event.preventDefault();
    try{
        const user = recupData();
        console.log(user);
        const message = signIn(user);
        signInForm.reset();
    }
    catch(error){
        console.error(error);
    }
})

//Connexion
const connectForm = document.querySelector("#connectForm");
const emailInputConnect = document.querySelector("#emailConnect");
const passwordInputConnect = document.querySelector("#passwordConnect");
const connectButton = document.querySelector("#connect");

function recupDataConnect(){
    if(emailInputConnect.value != '' && passwordInputConnect.value != ''){
        return {
            "email" : emailInputConnect.value,
            "password" : passwordInputConnect.value
        }
    }else{
        throw("Formulaire incorrectement rempli");
    }
}

async function connect(data){
    let message;
    await fetch('https://blabladrar.adrardev.fr/user/token',
    {
        method: "POST",
        body: JSON.stringify(data),    
    })
    .then(response => {
        return response.json();
    })
    .then(result => {
        console.log(result);
        message = result;
    })
    .catch(error => {
        console.error(error);
        message = error;
    })
    return message;
}

function saveLocalStorage(object){
    for(let property in object){
        window.localStorage.setItem(property, object[property]);
    }
}

connectButton.addEventListener("click",async function(event){
    event.preventDefault();
    try{
        const user = recupDataConnect();
        console.log(user);
        const message = await connect(user);
        console.log(message);
        saveLocalStorage(message);
        connectForm.reset();
    }
    catch(error){
        console.error(error);
    }
})

//Deconnexion
const decoButton = document.querySelector("#deco");

decoButton.addEventListener("click",event => {
    event.preventDefault();
    window.localStorage.clear();
})

//Compte Utilisateur
const userInfoButton = document.querySelector("#userInfo");
const userName = document.querySelector("#userName");
const userFirstname = document.querySelector("#userFirstname");
const userEmail = document.querySelector("#userEmail");

async function userInfo(){
    let message;
    let string = "https://blabladrar.adrardev.fr/user/id/"+window.localStorage.getItem("id");
    await fetch(string,
    {
        method: "GET",   
    })
    .then(response => {
        return response.json();
    })
    .then(result => {
        console.log(result);
        message = result;
    })
    .catch(error => {
        console.error(error);
        message = error;
    })
    return message;
}

userInfoButton.addEventListener("click",async function(event){
    event.preventDefault();
    try{
        const message = await userInfo();
        console.log(message);
        userName.innerText = userName.innerText +" "+  message.name;
        userFirstname.innerText = userFirstname.innerText +" "+ message.firstname;
        userEmail.innerText = userEmail.innerText +" "+  message.email;
    }
    catch(error){
        console.error(error);
    }
})