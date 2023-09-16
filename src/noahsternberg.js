import React from "react";

function NoahSternbergComponent() {

    const data = [
        {id : 1},
        {projectType : 'Deck building'},
        {projectLengthInDays : 4},
        {estimatedLaborCost : 1234},
        {bidPrice : 1500},
        {accepted : true}
    ]

    return (
        <div>
            <h2> Project Details </h2>
            <ul>
                <li>ID : {data[0].id}</li>
                <li>Project Type : {data[1].projectType}</li>
                <li>Project Length (days) : {data[2].projectLengthInDays}</li>
                <li>Labour Costs : {data[3].estimatedLaborCost}</li>
                <li>Bid Price : {data[4].bidPrice}</li>
                <li>Accepted : {data[5].accepted}</li>
            </ul>
        </div>
    )
}
export default NoahSternbergComponent;
