import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    year: Number,
    genre: [String],
    languages: [String],
    poster: String,
    ott: [String]
  },
  { timestamps: true }
);

const movieModel = mongoose.model("movie", movieSchema);

export {
  movieModel
}