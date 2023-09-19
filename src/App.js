// App.js
import React from 'react';
import Header from './Header';
import ProjectList from './ProjectList';
import DrewAllen from './DrewAllen';
import ApiOne from './ApiOne'

function App() {
  const projects = [
    {id: 1, projectType: "Residential Repair", projectLength: 'Two Weeks', estCostLabor: '20,000', bidPrice: '17,000', accepted: 'Yes'},
    {id: 2, projectType: "New Residential", projectLength: 'Eight Weeks', estCostLabor: '50,000', bidPrice: '35,000', accepted: 'Yes'},
    {id: 3, projectType: "New Commercial", projectLength: 'Ten Weeks', estCostLabor: '120,000', bidPrice: '35,000', accepted: 'No'},
    {id: 4, projectType: "Commercial Repair", projectLength: 'Three Weeks', estCostLabor: '10,000', bidPrice: '15,000', accepted: 'No'},
    {id: 4, projectType: "New Industrial", projectLength: 'Twenty Weeks', estCostLabor: '75,000', bidPrice: '20,000', accepted: 'Yes'}
];

  return (
    <div>
      <Header />
      <ProjectList projects={projects} />
      <ApiOne />
      <DrewAllen projects={projects}/>
      
    </div>
  );
}

export default App;