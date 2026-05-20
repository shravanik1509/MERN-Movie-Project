import React from "react";

function MovieCard({ movie, onClick }) {
    return <div className="col-sm-6 col-md-4 col-lg-3" onClick={onClick}>
        <div className="card h-100 shadow-sm">
            <img
                src={movie.poster}
                className="card-img-top"
                alt={movie.title}
                style={{ height: "300px", objectFit: "cover" }}
            />

            <div className="card-body">
                <h6 className="card-title">{movie.title}</h6>
                <p className="text-muted mb-1">{movie.year}</p>

                <div className="mb-2">
                    {movie.genre?.map((g) => (
                        <span
                            key={g}
                            className="badge bg-secondary me-1"
                        >
                            {g}
                        </span>
                    ))}
                </div>
            </div>

            <div className="card-footer bg-white">
                <div className="mb-1">
                    <small className="text-muted">OTT: </small>
                    {movie.ott?.map((o) => (
                        <span
                            key={o}
                            className="badge bg-dark me-1"
                        >
                            {o}
                        </span>
                    ))}
                </div>

                <div>
                    <small className="text-muted">Lang: </small>
                    {movie.languages.map((l) => (
                        <span
                            key={l}
                            className="badge bg-info text-dark me-1"
                        >
                            {l}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
}

export {
    MovieCard
}