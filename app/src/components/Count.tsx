import React, { useState, useEffect } from "react";
import { defaultStopWords } from "./stopwords";

const Count: React.FC<{ input: string }> = ({ input }) => {
    const [characterWihtoutSpaces, setCharacterWihtoutSpaces] = useState<
        number
    >(0);
    const [characterCount, setCharacterCount] = useState<number>(0);
    const [wordCount, setWordCount] = useState<number>(0);
    const [wordsArray, setWordsArray] = useState<any>([]);
    const [stopWords, setStopWords] = useState<string[]>(defaultStopWords);
    const [stopWordsCount, setStopWordsCount] = useState<number>(0);
    // let stopWordsCount: number = 0;

    useEffect(() => {
        setStopWordsCount(0);
        let wordHash: any = {};
        let wordLength = input
            .trim()
            .split(" ")
            .filter((word) => word.length > 0);
        let characterLength = input.replace(/\n|\ /g, "");

        for (let i = 0; i < wordLength.length; i++) {
            if (!stopWords.includes(wordLength[i])) {
                wordHash[wordLength[i]] = (wordHash[wordLength[i]] || 0) + 1;
            } else {
                setStopWordsCount((stopWordsCount) => stopWordsCount + 1);
            }
        }

        let sortedHash = [];
        for (let w in wordHash) {
            sortedHash.push([w, wordHash[w]]);
        }
        sortedHash.sort((a, b) => {
            return b[1] - a[1];
        });

        setWordsArray(sortedHash);
        setWordCount(wordLength.length);
        setCharacterCount(characterLength.length);
        setCharacterWihtoutSpaces(input.length);
        console.log(wordCount - stopWordsCount);
    }, [input]);

    return (
        <div>
            <p>
                Number of Characters: {characterCount} (with spaces:{" "}
                {characterWihtoutSpaces})
            </p>
            {wordsArray.map((pair: any, index: number) => {
                return (
                    <div key={index}>
                        {pair[0]}: {pair[1]}:{" "}
                        {(
                            (pair[1] / (wordCount - stopWordsCount)) *
                            100
                        ).toFixed(0)}
                        %
                    </div>
                );
            })}
            <p>Number of Words: {wordCount}</p>
        </div>
    );
};

export default Count;
