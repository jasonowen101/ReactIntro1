import React from "react";
import "./App.css"

function NathanBorchelt(){
    const projectData = [
        {id: 684, projectType: "Website Development", projectLength: '6 weeks', estCostLabor: '480,000', bidPrice: '980,000', accepted: 'No'},
        {id: 35825, projectType: "Companian AI Dev", projectLength: '12 weeks', estCostLabor: '750,000', bidPrice: '1,500,000', accepted: 'Yes'},

    ];

    return(
        <div>
            <h2> Purposed Projects</h2>
            <ul>
                {projectData.map((projectData) => (
                    <li key = {projectData.id}>
                        {'Purposed Prject ID: ' + projectData.id},
                        {' Project Type: ' + projectData.projectType},
                        {' Estimated Length ' + projectData.projectLength},
                        {' Labor Cost: ' + projectData.estCostLabor},
                        {'Minimum Bid Price: ' + projectData.bidPrice},
                        {' Bid Accepted? ' + projectData.accepted}
                    </li>
                ))}
            </ul>
        </div>
    )
}
