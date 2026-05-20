function MovieCardSimple({movie}) {
    return <div className="movie-card">
        <img src={movie.poster}></img>
        <p>{movie.title}</p>
        <p>{movie.year}</p>
        
    </div>
}

export {
    MovieCardSimple
}