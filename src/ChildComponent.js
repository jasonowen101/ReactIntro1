import React, { useState } from 'react';

function ChildComponent({ data, updateData }) {
  const addItem = () => {
    // Update the array in the child component
    let i = 4;
    const newData = [...data, 'newDataAdded'];

    // Call the update function to pass the updated data to the parent
    updateData(newData);
  };

  return (
    <div>
      {/* <h2>Child Component</h2> */}
      Data in array = { data.toString()}
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default ChildComponent;
