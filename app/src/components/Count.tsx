import React, { useState, useEffect } from "react";

import Container from "@material-ui/core/Container";

import { defaultStopWords } from "./stopwords";

const Count: React.FC<{ input: string }> = ({ input }) => {
    const [characterWithSpaces, setCharacterWithSpaces] = useState<number>(0);
    const [wordCount, setWordCount] = useState<number>(0);
    const [wordsArray, setWordsArray] = useState<any>([]);
    const [stopWords] = useState<string[]>(defaultStopWords);
    const [stopWordsCount, setStopWordsCount] = useState<number>(0);
    const [spacesCount, setSpacesCount] = useState<number>(0);

    useEffect(() => {
        setStopWordsCount(0);
        let wordHash: any = {};
        let temp = input.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
        let numberOfWords = temp
            .trim()
            .split(/\n|\ /)
            .filter((word) => word.length > 0);
        setSpacesCount(temp.split(" ").length - 1);

        for (let i = 0; i < numberOfWords.length; i++) {
            if (!stopWords.includes(numberOfWords[i].toLowerCase())) {
                wordHash[numberOfWords[i].toLowerCase()] =
                    (wordHash[numberOfWords[i].toLowerCase()] || 0) + 1;
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
        setWordCount(numberOfWords.length);
        setCharacterWithSpaces(input.length);
    }, [input, stopWords]);

    return (
        <Container className='count'>
            <div className='statistics'>
                <h2>Counts</h2>
                <h3>
                    Characters:{" "}
                    <span className='statisticsSpan'>
                        {characterWithSpaces}
                    </span>
                </h3>
                <h3>
                    Words: <span className='statisticsSpan'>{wordCount}</span>
                </h3>
                <h3>
                    Spaces:{" "}
                    <span className='statisticsSpan'>{spacesCount}</span>
                </h3>
            </div>
            <hr className='hr' />
            <div className='tablee'>
                <h2>Word Density</h2>
                <ul>
                    {wordsArray.map((pair: any, index: number) => {
                        return (
                            <li key={index} className='density'>
                                <span className='densityWord'>{pair[0]}</span>
                                <span className='densityCount'> {pair[1]}</span>
                                <span className='densityPercentage'>
                                    {(
                                        (pair[1] /
                                            (wordCount - stopWordsCount)) *
                                        100
                                    ).toFixed(0)}
                                    %
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Container>
    );
};

export default Count;
