// Miscellaneous change for progress check

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Octofit Tracker</Link>
          <div className="d-flex align-items-center">
            <Link className="nav-link px-2" to="/activities">Activities</Link>
            <Link className="nav-link px-2" to="/leaderboard">Leaderboard</Link>
            <Link className="nav-link px-2" to="/teams">Teams</Link>
            <Link className="nav-link px-2" to="/users">Users</Link>
            <Link className="nav-link px-2" to="/workouts">Workouts</Link>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<h2>Welcome to Octofit Tracker!</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
