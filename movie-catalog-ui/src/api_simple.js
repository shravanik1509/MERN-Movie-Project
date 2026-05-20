const moviesData = [
  {
    _id: "MOV101",
    title: "3 Idiots",
    year: 2009,
    genre: ["Drama", "Comedy"],
    languages: ["Hindi"],
    poster: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
    ott: ["Netflix"]
  },
  {
    _id: "MOV102",
    title: "Dangal",
    year: 2016,
    genre: ["Drama", "Sport"],
    languages: ["Hindi"],
    poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg",
    ott: ["Hotstar"]
  },
  {
    _id: "MOV103",
    title: "Pathaan",
    year: 2023,
    genre: ["Action", "Thriller"],
    languages: ["Hindi"],
    poster: "https://upload.wikimedia.org/wikipedia/en/c/c3/Pathaan_film_poster.jpg",
    ott: ["Prime"]
  },
  {
    _id: "MOV104",
    title: "PK",
    year: 2014,
    genre: ["Comedy", "Drama"],
    languages: ["Hindi"],
    poster: "https://upload.wikimedia.org/wikipedia/en/c/c3/PK_poster.jpg",
    ott: ["Netflix"]
  },
  {
    _id: "MOV105",
    title: "Gully Boy",
    year: 2019,
    genre: ["Drama", "Music"],
    languages: ["Hindi"],
    poster: "https://upload.wikimedia.org/wikipedia/en/0/07/Gully_Boy_poster.jpg",
    ott: ["Prime"]
  },
  {
    _id: "MOV106",
    title: "War",
    year: 2019,
    genre: ["Action"],
    languages: ["Hindi"],
    poster: "https://upload.wikimedia.org/wikipedia/en/6/6f/War_official_poster.jpg",
    ott: ["Hotstar"]
  },
  {
    _id: "MOV107",
    title: "Drishyam",
    year: 2015,
    genre: ["Crime", "Thriller"],
    languages: ["Hindi"],
    poster: "https://upload.wikimedia.org/wikipedia/en/8/8a/Drishyam_2015_film.jpg",
    ott: ["Prime"]
  },
  {
    _id: "MOV108",
    title: "Bajrangi Bhaijaan",
    year: 2015,
    genre: ["Drama"],
    languages: ["Hindi"],
    poster: "https://upload.wikimedia.org/wikipedia/en/d/dd/Bajrangi_Bhaijaan_Poster.jpg",
    ott: ["Netflix"]
  },
  {
    _id: "MOV109",
    title: "Zindagi Na Milegi Dobara",
    year: 2011,
    genre: ["Drama", "Adventure"],
    languages: ["Hindi"],
    poster:"https://upload.wikimedia.org/wikipedia/en/1/17/Zindagi_Na_Milegi_Dobara.jpg",
    ott: ["Netflix"]
  }
];

function saveMovie(movieObject) {
    moviesData.push(movieObject)
}



function getMovies() {
    return moviesData
}

export {
    saveMovie,
    getMovies
}
