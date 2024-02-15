import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom';

function EventPlayers() {
    const [category, setCategory] = useState(null);
    const [eventTeam, setEventTeam] = useState(null);
    const location = useLocation();
    const event_id = location.state?.event_id;
    

    useEffect(() => {
      fetch(`http://127.0.0.1:5000/api/v1/events/${event_id}/players`)
        .then(response => response.json())
        .then(data => setEventTeam(data))
        .catch(error => console.error('Error fetching teams:', error));
    }, []);

    useEffect(() => {
      fetch(`http://127.0.0.1:5000/api/v1/events/${event_id}/category_players`)
      .then(response => response.json())
      .then(data => setCategory(data))
      .catch(error => console.error('Error fetching categories', error))
    }, []);
    
    if (eventTeam === null || category === null) {
      return <p>Loading...</p>;
    }
  
    return (
      <div>
        <PlayerTable title="Female players" players={eventTeam.Female} />

        <div>Female Categories</div>
            <div className='flex space-x-6'>
                {category?.Female && category?.Female.map(item => (
                  <div key={item.name}>
                    <Link  to={`/bracket`} state={{ players: item.players }}>
                          {item.name}
                          {/* {item.players?.map(player => (
                            <div>{player.name}</div>
                          ))} */}
                    </Link>
                  </div>
                ))}
            </div>


        <PlayerTable title="Male players" players={eventTeam.Male} />

          <div>Male Categories</div>
          <div className='flex space-x-6'>
                  {category?.Male && category?.Male.map(item => (
                    <div key={item.name}>
                      <Link  to={`/bracket`} state={{ players: item.players }}>
                            {item.name}
                            {/* {item.players?.map(player => (
                              <div>{player.name}</div>
                            ))} */}
                      </Link>
                    </div>
                  ))}
          </div>
      </div>
    );
  }
  
  const PlayerTable = ({ title, players}) => {
    return (
      <div className='m-8'>
        <h1 className="ml-6">{title}</h1>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Player name</th>
              <th className="py-2 px-4 border-b">Age</th>
              <th className="py-2 px-4 border-b">Weight</th>
            </tr>
          </thead>
          <tbody>
            {players && players.map(player => (
              <tr key={player.id}>
                <td className="py-2 px-4 border-b">{player.name}</td>
                <td className="py-2 px-4 border-b">{player.age}</td>
                <td className="py-2 px-4 border-b">{player.Weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default EventPlayers;