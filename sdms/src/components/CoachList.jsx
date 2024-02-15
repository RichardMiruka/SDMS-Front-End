import { useEffect, useState } from "react";
import React from 'react';

const CoachList = () => {
  const [coaches, setCoaches] = useState([]);

  const defaultImageUrl = 'https://images.unsplash.com/photo-1605509603173-ab689807e860?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/coaches')  // to replace with the actual endpoint for fetching coaches from our backend API
      .then(response => response.json())
      .then(data => setCoaches(data))
      .catch(error => console.error('Error fetching coaches:', error));
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Coaches</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-20">
        {coaches.map(coach => (
          <div key={coach.coach_id} className="bg-white shadow-md rounded-md overflow-hidden p-4">
            <div className="flex justify-center">
              <img src={coach.imageUrl || defaultImageUrl} alt={coach.name} className="w-40 h-40 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-full" />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold text-gray-800">{coach.name}</h3>
              <p className="text-sm text-gray-600">{coach.specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoachList;