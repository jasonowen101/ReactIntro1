// App.js
import React from 'react';
import Header from './Header';
import ProjectList from './ProjectList';
import JosiahBlakeman from './JosiahBlakeman';

function App() {
  const projects = [
    { id: 1, name: 'Project A' },
    { id: 2, name: 'Project B' },
    { id: 3, name: 'Project C' },
    { id: 4, name: 'Project D' },
    { id: 5, name: 'Project E' }
  ];

    const data = [
      {id: 1, name: 'Deck'},
      {id: 2, name: 'Roof'}
    ]

  return (
    <div>
      <Header />
      <ProjectList projects={projects} />
      <JosiahBlakeman data={data} />
    </div>
  );
}

export default App;
