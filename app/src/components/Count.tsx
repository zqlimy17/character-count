import React, { useState, useEffect, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

import { defaultStopWords } from "./stopwords";

const Count: React.FC<{ input: string }> = ({ input }) => {
    const [characterWithSpaces, setCharacterWithSpaces] = useState<number>(0);
    const [characterWithoutSpaces, setCharacterWithoutSpaces] = useState<
        number
    >(0);
    const [wordCount, setWordCount] = useState<number>(0);
    const [wordsArray, setWordsArray] = useState<any>([]);
    const [stopWords, setStopWords] = useState<string[]>(defaultStopWords);
    const [stopWordsCount, setStopWordsCount] = useState<number>(0);

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
        setCharacterWithoutSpaces(characterLength.length);
        setCharacterWithSpaces(input.length);
        console.log(wordCount - stopWordsCount);
    }, [input]);

    return (
        <Container>
            <h3>Characters: {characterWithSpaces} </h3>
            <h3>Words: {wordCount} </h3>
            <h3>Sentences: </h3>
            <h3>Paragraphs: </h3>
            <h3>Spaces: {characterWithSpaces - characterWithoutSpaces}</h3>

            <h2>Word Density</h2>
            <ul>
                {wordsArray.map((pair: any, index: number) => {
                    return (
                        <li key={index} className='density'>
                            <span className='densityWord'>{pair[0]}</span>
                            <span className='densityCount'> {pair[1]}</span>

                            <span className='densityPercentage'>
                                {(
                                    (pair[1] / (wordCount - stopWordsCount)) *
                                    100
                                ).toFixed(0)}
                                %
                            </span>
                        </li>
                    );
                })}
            </ul>
        </Container>
    );
};

export default Count;
