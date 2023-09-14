
// GavinHager.js
function GavinHager(){
    const dataList = [
        {id: 101, projectType: "Construction", projectLength: 300, estCostLabor: 12000, bidPrice: 15000, accepted: true},
        {id: 102, projectType: "Construction", projectLength: 200, estCostLabor: 15000, bidPrice: 15000, accepted: false},
        {id: 103, projectType: "Repair", projectLength: 150, estCostLabor: 8000, bidPrice: 6000, accepted: false},
        {id: 104, projectType: "Construction", projectLength: 400, estCostLabor: 20000, bidPrice: 30000, accepted: true}

        /*{id: 101},
        {projectType: "Construction"},
        {projectLength: 300},
        {estCostLabor: 12000},
        {bidPrice: 15000},
        {accepted: true}*/
    ];

    return(
        <div>
            <ProjectList projects={dataList} />
        </div>
    );
}

export default GavinHager;