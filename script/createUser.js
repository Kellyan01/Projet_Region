async function inscription(InsData){
    try{
        const response = await fetch('https://blabladrar.adrardev.fr/user/add',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(InsData),
        });

        const result = await response.json();
        console.log(result);
    } catch (error){
        console.error(error);
    };
};

