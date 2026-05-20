import React, { useEffect, useState } from "react";
import { getMovie, saveMovie, updateMovie } from "../api";
import { useNavigate, useParams } from "react-router-dom";

export function MovieForm() {
  const navigate = useNavigate()
  const { id } = useParams()
  const mode = id === 'new' ? 'add' : 'update'

  const [form, setForm] = useState({
    title: "",
    year: "",
    genre: "",
    languages: "",
    poster: "",
    ott: ""
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id === 'new') {
      return
    }

    getMovie(id).then(movie => {
      setForm({
        title: movie.title || "",
        year: movie.year || "",
        genre: (movie.genre || []).join(", "),
        languages: (movie.languages || []).join(", "),
        poster: movie.poster || "",
        ott: (movie.ott || []).join(", ")
      });
    })
      .catch(err => {
        console.log('Failed to load movie', err)
        alert('Failed to load movie')
      })
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.title) newErrors.title = "Title is required";
    if (!form.genre) newErrors.genre = "At least one genre is required";
    if (!form.languages) newErrors.languages = "Language is required";
    if (!form.poster) newErrors.poster = "Poster URL is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const payload = {
      ...form,
      year: Number(form.year),
      genre: form.genre.split(",").map((g) => g.trim()),
      languages: form.languages.split(",").map((l) => l.trim()),
      ott: form.ott ? form.ott.split(",").map((o) => o.trim()) : []
    };

    if (id === 'new') {
      saveMovie(payload).then(() => {
        navigate('/movies')
      })
        .catch((err) => {
          console.log('Failed to add movie', err)
          alert('Failed to save movie')
        })
    } else {
      updateMovie(id, payload).then(() => {
        navigate('/movies')
      }).catch((err) => {
        console.log('Failed to update movie', err)
        alert('Failed to save movie')
      })
    }
  };

  const handleOnCancel = (e) => {
    navigate(-1)
  }


  return (
    <div className="container mt-4">
      <h4 className="mb-3">Add Movie</h4>

      <form onSubmit={handleSubmit} className="row g-3">
        {/* Title */}
        <div className="col-md-6">
          <label className="form-label">
            Title <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className={`form-control ${errors.title ? "is-invalid" : ""}`}
            name="title"
            value={form.title}
            onChange={handleChange}
          />
          {errors.title && <div className="invalid-feedback">{errors.title}</div>}
        </div>

        {/* Year */}
        <div className="col-md-3">
          <label className="form-label">Year</label>
          <input
            type="number"
            className="form-control"
            name="year"
            value={form.year}
            onChange={handleChange}
          />
        </div>

        {/* Genre */}
        <div className="col-md-6">
          <label className="form-label">
            Genres <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className={`form-control ${errors.genre ? "is-invalid" : ""}`}
            name="genre"
            value={form.genre}
            onChange={handleChange}
            placeholder="Drama, Comedy"
          />
          {errors.genre && <div className="invalid-feedback">{errors.genre}</div>}
        </div>

        {/* Languages */}
        <div className="col-md-6">
          <label className="form-label">
            Languages <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className={`form-control ${errors.languages ? "is-invalid" : ""}`}
            name="languages"
            value={form.languages}
            onChange={handleChange}
          />
          {errors.languages && (
            <div className="invalid-feedback">{errors.languages}</div>
          )}
        </div>

        {/* Poster */}
        <div className="col-md-6">
          <label className="form-label">
            Poster URL <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className={`form-control ${errors.poster ? "is-invalid" : ""}`}
            name="poster"
            value={form.poster}
            onChange={handleChange}
          />
          {errors.poster && (
            <div className="invalid-feedback">{errors.poster}</div>
          )}
        </div>

        {/* OTT */}
        <div className="col-md-6">
          <label className="form-label">OTT Platforms</label>
          <input
            type="text"
            className="form-control"
            name="ott"
            value={form.ott}
            onChange={handleChange}
            placeholder="Netflix, Prime"
          />
        </div>

        <div className="col-12">
          <hr />
          <button type="button" className="btn btn-secondary" onClick={handleOnCancel}>
            Cancel
          </button>
           <button type="submit" className="btn btn-primary m-2">
            { mode === 'add' ? "Add Movie" : "Save Movie" }
          </button>
        </div>
      </form>
    </div>
  );
}
