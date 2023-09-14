import React, { useState, useEffect} from 'react'

function SimpleRepeater(props) {
    const [words, setWord] = useState(props.words)

    useEffect(() => {
    }) 

    return (
        <div>
            {words.map((word) => (
                <h1 key={word.id}>{word.text}</h1>
            ))}
        </div>
    );
}

export default SimpleRepeater