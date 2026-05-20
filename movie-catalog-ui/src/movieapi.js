async function callApi(apiPath,method,payload, queryString) {
    
    let apiUrl = process.env.NODE_ENV === 'development' ?
     'http://localhost:3080' + apiPath : apiPath
     
    const options = {}

    if(queryString) {
        apiUrl = apiUrl + queryString
    }

    if(method) {
        options.method = method
    }

    if(payload) {
        options.body = JSON.stringify(payload)
        options.headers = {
            'Content-Type':'application/json'
        }
    }

    const response  = await fetch(apiUrl,options)

    const jsonResponse= response.json()

    return jsonResponse

}

function saveNewMovie(movieObject) {
    return callApi('/api/movies','POST',movieObject)
}

async function getMovies(genere) {
    let queryString=''
    if(genere) {
        queryString = '?genre=' + genere
    }
   return callApi('/api/movies','GET',null,queryString)
}

export {
    getMovies,
    saveNewMovie
}

console.log('ENV ' ,process.env)