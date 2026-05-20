import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MovieCard } from "./MovieCard";
import { getMovies } from "../api";

export function MoviesList() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [movies, setMovies] = useState([])
  const [allGenres, setAllGenres] = useState([])
  const navigate = useNavigate()

  useEffect(() => {

    getMovies().then((movies) => {
      setMovies(movies)
      const allGenres = [
        "All",
        ...new Set(movies.flatMap((m) => m.genre))
      ];

      console.log('movies got ', movies)
      setAllGenres(allGenres)
    })
      .catch(err => {
        console.log('Failed to load movies')
      })

  }, [])

  const handleOnMovieClick = (movie) => {
    navigate('/movies/' + movie._id)
  }

  const handleOnAddNewMovie = () => {
    navigate('/movies/new')
  }

  const filterMovies = (genre) => {
    getMovies(genre === 'All' ? '' : genre).then((movies) => {
      setMovies(movies)
      setSelectedGenre(genre)
    })
      .catch(err => {
        console.log('Failed to filter movies')
      })
  }

  return (
    <div className="container py-4">
      {/* Filter Bar */}
      <div className="mb-4">
        <div className="d-flex mb-2">
          <h5 className="mb-2">Filter by Genre</h5>
          <button className="btn btn-primary ms-auto" onClick={handleOnAddNewMovie}>Add Movie</button>
        </div>
        
        <div className="d-flex flex-wrap gap-2">
          {allGenres.map((g) => (
            <button
              key={g}
              className={`btn btn-sm ${selectedGenre === g ? "btn-primary" : "btn-outline-primary"
                }`}
              onClick={() => filterMovies(g)}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Movie Grid */}
      <div className="row g-4">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie._id} onClick={() => handleOnMovieClick(movie)} />
        ))}
      </div>
    </div>
  );
}
