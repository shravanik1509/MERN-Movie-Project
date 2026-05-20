
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {MoviesList} from "./components/MoviesList";
import {MovieForm} from "./components/MovieForm";
import './bootstrap.min.css'

function MApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movies/:id" element={<MovieForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MApp;