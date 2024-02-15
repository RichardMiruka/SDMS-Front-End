import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/dashboard';
import Home from './pages/Home';
import About from './pages/About';
import TournamentTeams from './components/Team'
import ContactUs from './pages/ContactUs';
import LoginPage from './pages/Login';
import RegisterPage from './pages/register';
import TournamentPage from './pages/TournamentPage';
import EventList from './components/EventList';
import TeamList from './components/Team';
import PlayerList from './components/PlayerList'
import CoachList from './components/CoachList';
import EventPlayers from './components/event_players';
import Categories from './components/categories';
import TournamentBracket from './components/brackets';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="home" element={<Home />} />
          <Route path="Teams" element={<TournamentTeams />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="events" element={<EventList />} />
          <Route path="tournament" element={<TournamentPage />} >
            <Route path='event' element={<EventList />} ></Route>
            <Route path='category' element={<Categories />} />
            <Route path='eventplayers' element={<EventPlayers />} />
            <Route path='Team' element={<TeamList />} />
            <Route path='Coaches' element={<CoachList />} />
            <Route path='players' element={<PlayerList />} />
            <Route path='coaches' element={<CoachList />} />
          </Route>
          <Route path='/bracket' element={<TournamentBracket />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path='/Login' element={< LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
