//JosiahBlakeman.js
import react, {useState} from 'react';


function JosiahBlakeman(data)
{
    const[data] = useState([]);

    return(
        <div> 
            <ul> 
                {data.map((info) => (
                    <li key={info.id}>{info.type}</li>
                ))}
            </ul>
        </div>
    );
}

export default JosiahBlakeman;
