function openPop(){
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
      
      console.log("Réussite :", resultat);
    } catch (erreur) {
      console.error("Erreur :", erreur);
    }
  }
  
  const donnees = { login: "Jean Biche" };
  postJSON(donnees);
