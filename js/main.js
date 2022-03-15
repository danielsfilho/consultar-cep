const cep = document.querySelector("#cep")


const fillData = (result) => {
    for(const field in result) {
        if(document.querySelector('#'+field)) {
            document.querySelector('#'+field).value = result[field]
        }
    }
}



cep.addEventListener("blur", (e) => {
    let search = cep.value.replace(/\D/g, "")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    const url = `https://viacep.com.br/ws/${search}/json/`
    fetch(url, options)
        .then(response =>response.json())
        .then(data => fillData(data))
        .catch(e => console.log("Deu erro:"+ e.message))
})