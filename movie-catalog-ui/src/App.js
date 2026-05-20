import './App_simple.css'
import './bootstrap.min.css'
import { MoviesListSimple } from './components/MoviesListSimple';
import { MovieFormSimple } from './components/MovieFormSimple';
import { MoviesList } from './components/MoviesList';
import { MovieForm } from './components/MovieForm';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Home } from './components/Home';
import { Tasks } from './components/Tasks';
import { MongoCommands } from './components/Mongodb';
import { About } from './components/About';


function WorkshopApp() {
  return <BrowserRouter>
      {/* 🔝 Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">MERN Workshop</span>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav me-auto">
              
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) =>
                  "nav-link " + (isActive ? "active" : "")
                }>
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/movies" className={({ isActive }) =>
                  "nav-link " + (isActive ? "active" : "")
                }>
                  Movies
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/moviessimple" className={({ isActive }) =>
                  "nav-link " + (isActive ? "active" : "")
                }>
                  Movies Simple
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/tasks" className={({ isActive }) =>
                  "nav-link " + (isActive ? "active" : "")
                }>
                  Tasks
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/mongodb" className={({ isActive }) =>
                  "nav-link " + (isActive ? "active" : "")
                }>
                  MongoDB
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) =>
                  "nav-link " + (isActive ? "active" : "")
                }>
                  About
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* 📄 Routes */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/movies/:id" element={<MovieForm />} />
          <Route path="/moviessimple" element={<MoviesListSimple />} />
          <Route path="/moviessimple/:id" element={<MovieFormSimple />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/mongodb" element={<MongoCommands />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
}

function App() {
   return <WorkshopApp />
}

export default App;
