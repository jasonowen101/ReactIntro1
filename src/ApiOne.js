// ProjectList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import MyButton from './MyButton.js';

function CountriesListInfo(props) {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    console.log('useEffect:', country);
  })
  
  useEffect(() => {
    // Fetch from an API
    setCountry('CN');
    axios.get('https://restcountries.com/v3/alpha/{' + country + '}')
      .then((response) => setProjects(response.data))
      .catch((error) => console.error(error));
  }, []);
  console.log('output returned from CN:' + response.data);
  return (
    <div>
      <h2>Country Information</h2>
      <MyButton />
      {/* <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default CountriesListInfo;
