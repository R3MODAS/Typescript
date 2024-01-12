async function getPersonData(){
    try{
        const res = await fetch("https://fakerapi.it/api/v1/persons");
        if(!res.ok){
            const err = res.status;
            throw new Error(err)
        }
        else{
            const json = await res.json();
            console.log(json?.data);
            document.querySelector("#data").innerHTML = JSON.stringify(json?.data)
        }
    }
    catch(err){
        console.log(err)
    }
    
}