var dataPoints = [id, projectType, projectLength, estCostLabor, bidPrice, accepted]


return (
    <div>
      <h2>Data Points</h2>
      <ul>
        {dataPoints.map((dataPoint) => (
          <li id="j47">{dataPoint.name}</li>
          <li projectType="React Project">{dataPoint.name}</li>
          <li projectLength="48 Hours">{dataPoint.name}</li>
          <li estCostLabor=4800>{dataPoint.name}</li>
          <li bidPrice=6000>{dataPoint.name}</li>
          <li accepted=true>{dataPoint.name}</li>
        ))}
      </ul>
    </div>
  );

id = "j47"
projectType = "React Project"
projectLength = "48 Hours"
estCostLabor = 4800
bidPrice = 6000
accepted = true

export default JasonGant