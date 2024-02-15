import React, { useState, useEffect } from 'react';

const PlayerList = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:5000/api/v1/players')
      .then(response => response.json())
      .then(data => setPlayers(data))
      .catch(error => console.error('Error fetching players:', error));
  }, []);

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <h2 class="text-2xl font-semibold mb-4">Player List</h2>
    
    <table class="w-full text-base text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-solid p-4">
        <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="border border-solid px-6 py-3">
                    Name
                </th>
                <th scope="col" class="border border-solid px-6 py-3">
                    Gender
                </th>
                <th scope="col" class="border border-solid px-6 py-3">
                    Weight
                </th>
                <th scope="col" class="border border-solid px-6 py-3">
                    Age
                </th>
            </tr>
        </thead>
        <tbody>
            {players.map(player => (
                <tr key={player.id} class="border border-solid">
                    <td class="border border-solid px-6 py-3">{player.name}</td>
                    <td class="border border-solid px-6 py-3">{player.is_male ? "Male" : "Female"}</td>
                    <td class="border border-solid px-6 py-3">{player.Weight}</td>
                    <td class="border border-solid px-6 py-3">{player.age}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>


  );
};

export default PlayerList;