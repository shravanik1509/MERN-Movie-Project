

async function callApi(apiUrl,method,queryString,payload) {
  let url=process.env.NODE_ENV === 'development' ? 'http://localhost:3080' + apiUrl
  : apiUrl
  
  const options = {}

  options.method = method || 'GET'

  if(queryString) {
    url = url + '?' + queryString
  }

  if(payload) {
    options.body = JSON.stringify(payload)
    options.headers = {
      'Content-Type':'application/json'
    }
  }

  const response = await fetch(url,options)

  const jsonObject = await response.json()

  if(response.ok) {
    console.log()
    return jsonObject
  }

  throw new Error(jsonObject)

}

function getMovies(genere) {
  let queryString = ''
  if(genere) {
    queryString = 'genre=' + encodeURIComponent(genere)
  }
    return callApi('/api/movies/','GET',queryString)
}

function getMovie(movieId) {
  return callApi('/api/movies/' + movieId)
}

function saveMovie(movieObject) {
    return callApi('/api/movies/','POST',null,movieObject)
}

function updateMovie(movieId,movieObject) {
  return callApi('/api/movies/' + movieId,'PUT',null,movieObject)
}

export {
    saveMovie,
    getMovies,
    getMovie,
    updateMovie
}