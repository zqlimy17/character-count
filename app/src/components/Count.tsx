import React, { useState, useEffect } from "react";

const Count: React.FC<{ input: string }> = ({ input }) => {
    const [characterWihtoutSpaces, setCharacterWihtoutSpaces] = useState<
        number
    >(0);
    const [characterCount, setCharacterCount] = useState<number>(0);
    const [wordCount, setWordCount] = useState<number>(0);

    useEffect(() => {
        let wordLength = input.split(" ");
        let characterLength = input.replace(/ /g, "");
        setWordCount(wordLength.length);
        setCharacterCount(characterLength.length);
        setCharacterWihtoutSpaces(input.length);
    }, [input]);

    return (
        <div>
            Count goes here
            <h2>
                Number of Characters: {characterCount} (with spaces:{" "}
                {characterWihtoutSpaces})
            </h2>
            <h2>Number of Words: {wordCount}</h2>
        </div>
    );
};

export default Count;
