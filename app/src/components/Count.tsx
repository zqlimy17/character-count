import React, { useState, useEffect } from "react";

const Count: React.FC<{ input: string }> = ({ input }) => {
    const [characterWihtoutSpaces, setCharacterWihtoutSpaces] = useState<
        number
    >(0);
    const [characterCount, setCharacterCount] = useState<number>(0);
    const [wordCount, setWordCount] = useState<number>(0);

    useEffect(() => {
        let wordLength = input
            .trim()
            .split(" ")
            .filter((word) => word.length > 0);
        let characterLength = input.replace(/\n|\ /g, "");
        setWordCount(wordLength.length);
        setCharacterCount(characterLength.length);
        setCharacterWihtoutSpaces(input.length);
        console.log(input);
    }, [input]);

    return (
        <div>
            <p>
                Number of Characters: {characterCount} (with spaces:{" "}
                {characterWihtoutSpaces})
            </p>
            <p>Number of Words: {wordCount}</p>
        </div>
    );
};

export default Count;
