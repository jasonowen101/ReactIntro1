// App.js
import React from 'react';
import Header from './Header';
import ProjectList from './ProjectList';
import fakeDataObject from './gavinhowell';

function App() {
  const projects = [
    { id: 1, name: 'Project A' },
    { id: 2, name: 'Project B' },
    { id: 3, name: 'Project C' },
    { id: 4, name: 'Project D' },
    { id: 5, name: 'Project E' }
  ];

  return (
    <div>
      <Header />
      <ProjectList projects={projects} />
      <div>{JSON.stringify(fakeDataObject)}</div>
    </div>
  );
}

export default App;
