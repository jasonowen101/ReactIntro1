// ProjectList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

function CountriesListInfo() {
  const [country, setCountry] = useState();

  useEffect(() => {
    // Fetch from an API
    axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .then((response) => setCountry(response?.data))
      .catch((error) => console.error(error?.message));
  }, [country?.data]);

  if (country?.data)
  {
  return (
    <div>
      <h2>ApiOne: Country Information</h2>
      <ul>
        {country.data.map((nation) => (
          <li key={nation.id}>Nation: {nation.Nation} Year: {nation.Year} Population: {nation.Population}</li>
        ))}
      </ul>
    </div>
  );}
  return (
    <div>No Country Found</div>
  );
}

export default CountriesListInfo;
