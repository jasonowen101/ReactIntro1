import React, { useState, useEffect} from 'react'

function SimpleRepeater(props) {
    const [word, setWord] = useState(props.word)

    useEffect(() => {
        console.log('Word: ', word);
        setWord("testtest");
    })

    return (
        <div>
            <h2>{word}</h2>
            <h2>{word}</h2>
            <h2>{word}</h2>
            <h2>{word}</h2>
        </div>
    );
}

export default SimpleRepeater