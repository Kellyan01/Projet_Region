const api = "https://blabladrar.adrardev.fr/participate/all/1"

async function message() {
    const response = await fetch(api, {method: 'GET',}
    )
    const data = await response.json();
    console.log(data);
}

