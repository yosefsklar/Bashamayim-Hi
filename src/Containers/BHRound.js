import React, {Component} from 'react';
// import {textWords, ecc, exodus} from "../Resources/text_samples";
import Utils from '../Classes/Utils';
import BHMain from "../gameplay/BHMain";
import {TextChapters} from "../Resources/texts";
import generate from "@babel/generator";

const gamePlayConfigs = require('../configs/gamePlayConfigs')

const U = new Utils();

export default class BHRound extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
            console.log("URL name : " + this.props.text);
            console.log("URL chapter : " + this.props.startChapter);
            this.updateCanvas();
            this.fetchSingleChapterText()
                .then((textWords) => {
                    return this.generateDecoyWords(this.props.text, textWords)
                        .then((decoyWords) => {
                            let game = new BHMain(this.refs.canvas, this.props.level, textWords, decoyWords, 1, this.props.newGame, this.props.continueGame, this.setIndex, gamePlayConfigs);
                        })
                })
    }

    updateCanvas = () => {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(0, 0, 100, 100);
    };

    //*
    // Takes a text, start chapter, start and end verse, returns a promise with data = array of full hebrew verse
    // */
    fetchSingleChapterText = () => {
        let fetchPromise;
        let fetchString = 'https://www.sefaria.org/api/texts/' + this.props.text + '.' + this.props.startChapter + '?custom=ashkenazi';
        fetchPromise = fetch(fetchString)
            .then((response) => {
                return response.json();
            }).then((data) => {
                data['he'] = U.removeHTML(data.he);
                if (this.props.startVerse && this.props.endVerse) {
                    console.log("Haftorah 1 chapater");
                    data['he'] = data['he'].filter((verse, index) => index >= this.props.startVerse - 1 && index < this.props.endVerse);
                }
                return data['he'];
            }).then((data) => {
                return U.stripCantillation(data.join(" "))
            })
        return fetchPromise;
    };

    /*
    * Takes the text chosen for the game and the list of words that that text contains
    * Returns a list of decoy words
    * */
    generateDecoyWords = (text, textWords) => {
        let decoyTexts = [];
        let decoyChapters = [];
        for (let i = 0; i < 2; i++) {
            let keys = Object.keys(TextChapters['tanakh']);
            let key = keys[Math.floor(Math.random() * keys.length)]
            let chapterNumber = Math.ceil(Math.random() * TextChapters['tanakh'][key]);
            console.log(key + " " + chapterNumber)
            decoyTexts.push(key);
            decoyChapters.push(chapterNumber);
        }

        return Promise.all(decoyTexts.map((chapterNumber, index) => {
            let fetchString = 'https://www.sefaria.org/api/texts/' + decoyTexts[index] + '.' + decoyChapters[index] + '?custom=ashkenazi';
            return fetch(fetchString)
                .then((response) => {
                    return response.json();
                }).then((data) => {
                    //now were return an array of promises that resolve to provide the hebrew text of its chapter
                    return U.removeHTML(data.he);
                })
        })).then(decoyWordLists => {
            return U.stripCantillation(this.verseListsToCleanedWords(decoyWordLists,textWords).join(" "));
        })
    };

    /*
    * Takes in two lists of words, returns an array of strings that are unique between them, shuffled
    * */
    verseListsToCleanedWords = (decoyVerseLists,textWords) => {
        let decoyWords = decoyVerseLists.flat();
        decoyWords = this.shuffleArray(decoyWords.join(' ').split(/[\s\u05BE]+/).filter(x => this.checkOverlap(x, textWords)));
        return decoyWords;
    };


    shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    checkOverlap = (x, textWords) => {
        let noPrefix = textWords.map(x => x.replace(/[\u0591-\u05C7]/g, '').substring(1));
        textWords = textWords.map(x => x.replace(/[\u0591-\u05C7]/g, ''));
        if (!textWords.includes(x)) {
            if (!noPrefix.includes(x.replace(/[\u0591-\u05C7]/g, '').substring(1))) {
                if (!noPrefix.includes(x.replace(/[\u0591-\u05C7]/g, ''))) {
                    if (!textWords.includes(x.replace(/[\u0591-\u05C7]/g, '').substring(1))) {
                        return true;
                    }
                }
            }
        }
    };

    setIndex = () => {
        console.log("Index Set")
    };

    render() {
        let screenHeight = 800;
        let screenWidth = 500;
        screenHeight = window.screen.height;
        screenWidth = window.screen.height * (5 / 8);
        return (
            <canvas ref="canvas" width={0} height={0}/>
        );
    }
};