// App.js
import React from 'react';
import Header from './Header';
import ProjectList from './ProjectList';
import SimpleRepeater from './JustinHolder';

function App() {
  const projects = [
    { id: 1, name: 'Project A' },
    { id: 2, name: 'Project B' },
    { id: 3, name: 'Project C' },
    { id: 4, name: 'Project D' },
    { id: 5, name: 'Project E' }
  ];

  const words = [
    {id: 1, text: "Test"},
    {id: 2, text: "Test2"},
    {id: 3, text: "Test3"}
  ]

  return (
    <div>
      <Header />
      <SimpleRepeater words={words}/>
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
