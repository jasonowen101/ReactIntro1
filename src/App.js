// App.js
import React from 'react';
import Header from './Header';
import ProjectList from './ProjectList';
import TristianLoomis from './TristianLoomis';

function App() {
  const projects = [
    { id: 1, name: 'Project A' },
    { id: 2, name: 'Project B' },
    { id: 3, name: 'Project C' },
    { id: 4, name: 'Project D' },
    { id: 5, name: 'Project E' }
  ];
  const exampleStuffs = [
    { id: 1, projectType: 'New Flooring', projectLength: '2 days', estCostLabor: '$600', bidPrice: '$800', accepted: 'No'},
    { id: 2, projectType: 'New Roofing', projectLength: '3 days', estCostLabor: '$800', bidPrice: '$1200', accepted: 'Yes'},
    { id: 3, projectType: 'New Windows', projectLength: '10 days', estCostLabor: '$1500', bidPrice: '$2000', accepted: 'No'}
  ]

  return (
    <div>
      <Header />
      <ProjectList projects={projects} />
      <TristianLoomis exampleStuffs={exampleStuffs} />
    </div>
  );
}

export default App;
