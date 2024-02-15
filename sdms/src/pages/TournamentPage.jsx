import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import EventList from '../components/EventList';
import Sidebar from '../components/sidebar';



const TournamentPage = ({ numPlayers }) => {

  return (
    <div >
      <Sidebar />
     </div>
  );
};

export default TournamentPage;
