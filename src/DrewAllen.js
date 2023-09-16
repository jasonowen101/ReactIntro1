import React from 'react'

function DrewAllen() {

    const projectData = [
        {id: 1, projectType: "Residential Repair", projectLength: 'Two Weeks', estCostLabor: '20,000', bidPrice: '17,000', accepted: 'Yes'},
        {id: 2, projectType: "New Residential", projectLength: 'Eight Weeks', estCostLabor: '50,000', bidPrice: '35,000', accepted: 'Yes'},
        {id: 3, projectType: "New Commercial", projectLength: 'Ten Weeks', estCostLabor: '120,000', bidPrice: '35,000', accepted: 'No'},
        {id: 4, projectType: "Commercial Repair", projectLength: 'Three Weeks', estCostLabor: '10,000', bidPrice: '15,000', accepted: 'No'},
        {id: 4, projectType: "New Industrial", projectLength: 'Twenty Weeks', estCostLabor: '75,000', bidPrice: '20,000', accepted: 'Yes'}

    ];

    return(
        <div>
            <h2>Current Projects</h2>
            <ul>
                {projectData.map((projectData) => (
                    <li key = {projectData.id}>
                        {'Project ID: ' + projectData.id},
                        {' Project Type: ' + projectData.projectType},
                        {' Project Length ' + projectData.projectLength},
                        {' Labor Cost: ' + projectData.estCostLabor},
                        {' Bid Price: ' + projectData.bidPrice},
                        {' Bid Accepted? ' + projectData.accepted}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DrewAllen;