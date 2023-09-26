import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [data, setData] = useState([1,2,3,4]);

  // Function to update the array
  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent data={data} updateData={updateData} />
    </div>
  );
}

export default ParentComponent;
