function openPop() {
    document.getElementById('pop_up').style.display = 'block'
}

function closePopup3() {
    document.getElementById('pop_up').style.display = 'none'
}



async function postJSON(donnees) {
    try {
        const reponse = await fetch("https://blabladrar.adrardev.fr/participate/add", {
            method: "POST",
            body: JSON.stringify(donnees),
        });

        const resultat = await reponse.json();

        console.log(resultat);

        location.reload();
    } catch (erreur) {
        console.error("Erreur :", erreur);
    }
}

document.getElementById('confirmer').addEventListener("click", event => {
    event.preventDefault();
    const userData = JSON.parse(localStorage.getItem('User_CarPool'))
    let reponse = {
        "rdv_date": "",
        "message": document.querySelector("textarea").value,
        "confirm": "true",
        "add_id": localStorage.getItem("idAnnonce"),
        "token": userData.token
    }
    console.log(reponse);
    postJSON(reponse);

})


/*{

"rdv_date":"2023/12/12",

"message":"nouveau message",

"confirm":"true",

"add_id":1,

"token":"a0121a381b75b02320b317bdb4ad967e"

}
*/