import React, { useState, useEffect } from 'react';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/v1/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories', error));
  }, []);

  return (
    <div>
      {categories.map(cat => (
        <div key={cat.id}>
          <div>{cat.name}</div>
          {console.log(cat.name)}
        </div>
      ))}
    </div>
  );
}

export default Categories;
