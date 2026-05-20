import { Router } from "express";
import { movieModel } from "./model.js";

const movieRoute = Router()


movieRoute.get('/', async function getMovies(req, resp) {
    
    console.log('Request query ', req.query)
    
    let filter = {}
    if (req.query.genre) {
        filter = { genre: req.query.genre }
    }
    
    
    const movies = await movieModel.find(filter)
    resp.json(movies)
})


movieRoute.get('/:movieId', async function (req, resp) {
    console.log('Get all movies')
    const movie = await movieModel.findById(req.params.movieId)

    if (!movie) {
        resp.status(404).json({ "error": "Movie not found" })
    }
    resp.json(movie)
})

movieRoute.post('/', async function saveNewMovie(req, resp) {
    const movieObject = req.body
    console.log('Movie ', movieObject)
    const insertResponse = await movieModel.insertOne(movieObject)

    resp.json({ _id: insertResponse.id})
})

movieRoute.put('/:id', async function updateMovie(req, resp) {
    try {
        const movieObject = req.body
        console.log('Movie ', movieObject)

        await movieModel.findByIdAndUpdate(req.params.id, movieObject)

        resp.status(200).json({success:true})

    } catch (err) {
        resp.status(400).json({ error: err })
    }
})

movieRoute.delete('/:id',async function deleteMovie(req,resp) {
    try {
        const movieObject = req.body
        console.log('Movie ', movieObject)

        await movieModel.findByIdAndDelete(req.params.id)

        resp.status(200).json({success:true})

    } catch (err) {
        resp.status(400).json({ error: err })
    }
})

export {
    movieRoute
}