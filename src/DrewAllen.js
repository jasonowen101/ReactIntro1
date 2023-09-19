import React from 'react'

function DrewAllen(props) {

    return(
        <div>
            <h2>DrewAllen's Current Projects</h2>
            <ul>
                {props.projects.map((projectData) => (
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