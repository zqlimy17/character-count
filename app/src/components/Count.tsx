import React, { useState, useEffect } from "react";

const Count: React.FC<{ input: string }> = ({ input }) => {
    const [characterWihtoutSpaces, setCharacterWihtoutSpaces] = useState<
        number
    >(0);
    const [characterCount, setCharacterCount] = useState<number>(0);
    const [wordCount, setWordCount] = useState<number>(0);
    const [wordsArray, setWordsArray] = useState<string[]>([]);

    useEffect(() => {
        let wordHash: any = {};
        let wordLength = input
            .trim()
            .split(" ")
            .filter((word) => word.length > 0);
        let characterLength = input.replace(/\n|\ /g, "");
        setWordsArray(wordLength);
        for (let i = 0; i < wordsArray.length; i++) {
            wordHash[wordsArray[i]] = (wordHash[wordsArray[i]] || 0) + 1;
        }
        setWordCount(wordLength.length);
        setCharacterCount(characterLength.length);
        setCharacterWihtoutSpaces(input.length);
        console.log(wordHash);
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
