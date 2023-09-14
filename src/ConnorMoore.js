import React from 'react';

function ConnorMoore(){
    const jobs = [
    {id: 0, projectType: 'Roofing', projectLengthHrs: 6.5, estCostLabor: 800, bidPrice: 1200, accepted: true},
    {id: 1, projectType: 'Flooring', projectLengthHrs: 4, estCostLabor: 200, bidPrice: 500, accepted: true},
    {id: 2, projectType: 'Walling', projectLengthHrs: 8, estCostLabor: 5000, bidPrice: 10000, accepted: true},
    {id: 3, projectType: 'Housing', projectLengthHrs: 16, estCostLabor: 8000, bidPrice: 3, accepted: false},
    ];
    return (
    <div>
        <h2>Jobs</h2>
        <ul>
            {jobs.map((job) => (
                <li key={job.id}>{job.projectType/*,job.projectLengthHrs,job.estCostLabor,job.bidPrice,job.accepted*/}</li>
            ))}
        </ul>
    </div>
    );
}
export default ConnorMoore;