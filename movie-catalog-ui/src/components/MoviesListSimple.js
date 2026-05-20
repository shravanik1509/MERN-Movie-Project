import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
// import { getMovies } from '../api_simple'
import { MovieCard } from './MovieCard'
import { MovieCardSimple } from './MovieCardSimple'
import {getMovies} from '../movieapi'
function MoviesListSimple({}) {

    const [movies,setMovies] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
       getMovies().then((movies) => {
        setMovies(movies)
       })
       .catch(err => {
        alert('Failed to load movies')
       })

    },[])

    const handleOnNewMovie = () => {
        navigate('/moviessimple/new')
    }

    const handleOnFilterMovies = (e) => {
        getMovies(e.target.value).then((movies) => {
            setMovies(movies)
        }).catch(err => {
            alert('Failed to filter movies')
        })
    }

    return <div>
        <p className='movies-filters-row'>
            <span>Filters:
                <select name="moviesfilter" onChange={handleOnFilterMovies}>
                    <option value="">All</option>
                    <option value="Action">Action</option>
                    <option value="Drama">Drama</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Comedy">Comedy</option>
                </select>
                 </span>
            <button type='button' onClick={handleOnNewMovie}>Add Movie</button>
            </p>
    <div className='movies-container'>
        {
           movies.map((movie) => (<MovieCardSimple
            movie={movie}
             />)) 
        }
    </div>
    </div>
}

export {
    MoviesListSimple
}