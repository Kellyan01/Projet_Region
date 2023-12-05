// Function Inscription d'un User
async function inscription(InsData){
    try{
        const response = await fetch('https://blabladrar.adrardev.fr/user/add',{
            method: 'POST',
            body: JSON.stringify(InsData),
        });
        const result = await response.json();
        if(result.error == "le compte existe déjà"){
            alert("Une compte avec ce email existe déjà");
        } else {
            alert("Ton Compte Utilisateur à été crée!");
        }
    } catch (error){
        console.log(error);
    };
};

async function test(){
    try{
        const response = await fetch('https://blabladrar.adrardev.fr/user/all',{
            method: 'GET',
        });
        const result = await response.json();
        console.log(result);
    } catch (error){
        console.error(error);
    };
};

/* 
function verification(objet){
    let regex = /^[a-zA-Z0-9]+$/;

    if(objet.password.test(regex) != false){
        return objet;
    };
    console.log("Password Pas Bien Rempli");
    return false;
};
*/

// Class Contruction d'un Noveau Utilisateur
class User {
    constructor(name, firstname, email, password){
        this.firstname = firstname;
        this.name = name;
        this.email = email;
        this.password = password;
    };
};

let submit = document.querySelector('#submit');
let lname = document.querySelector('#name');
let firstname = document.querySelector('#firstname');
let email = document.querySelector('#email');
let password = document.querySelector('#password');

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    if((lname.value != null || lname.value != "") && (firstname.value != null || firstname.value != "") && (email.value != null || email.value != "") && (password.value != null || password.value != "")){
        //Creation Objet et Ajout des Données
        let newUser = new User(lname.value, firstname.value, email.value, password.value);
        // Cote verification
        let verifUser = newUser; // verification(newUser);
        //Appele a la function inscription
        if(verifUser != false){
            inscription(verifUser);
        };
        test();
    } else {
        console.log("Vous doit remplir tout les champs");
    };
});

