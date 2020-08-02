import React, {Component} from 'react';
import BHRound from "./BHRound";

import {Switch, Route} from "react-router-dom";

import GameDefault from "../Components/GameDefault";

const GameState = {
    "default" : 1,
    "play" : 2,
    "start" : 3,
}

export default class BHGame extends Component {

    constructor(props) {
            super(props);
            this.state = {
                textUrlName: '',
                startChapter: 'Chapters',
                startVerse: 0,
                endChapter: 0,
                endVerse: 0,
                textName: 'Sefarim',
                parsha: new TextItem('',0,"",0),
                gameState: GameState.default
            };

    }

    componentDidMount() {
        let fetchString = 'https://www.sefaria.org/api/calendars';
        return fetch(fetchString)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.retrieveParsha(data, data.calendar_items.findIndex(item =>  item.title.en === "Parashat Hashavua"));
                this.setGameDefault();
            }).catch((err)=> {
                console.log(err);
            })
    }

    retrieveParsha = (data,index) =>{
        let text = data.calendar_items[index].url.split("-")[0].split(".");
        let parshaTextUrlName = text[0];
        let parshaStart = parseInt(text[1]);
        let parshaName = data.calendar_items[index].displayValue.en.split("-")[0];
        let parshaEnd = data.calendar_items[index].url.split("-")[0].split(".")[0] +
            data.calendar_items[index].url.split("-")[1];

        this.setState({
            parsha : new TextItem(parshaTextUrlName,parshaStart,parshaName,parshaEnd)
        })
    }

    setParsha = () =>{
        this.setState({
            textUrlName : this.state.parsha.textUrlName,
            startChapter : this.state.parsha.startChapter,
            gameState: GameState.play
        }
        //,() => this.props.history.push(`${this.props.match.url}/gamePlay`)
        )
    }


    setGameDefault = () => {
        this.setState({
            //           gameDefault: true,
            //           gamePlay: false,
            textUrlName: '',
            startChapter: 'Chapters',
            textName: 'Sefarim',
            startVerse: 0,
            endChapter: 0,
            endVerse: 0,
            level:'',
            gameNumber: this.state.gameNumber + 1,
            gameState: GameState.default
        }
        //, () => this.props.history.push(`${this.props.match.url}/gameDefault`)
        )
    }



    continueGame = () =>{
        console.log("Continue game")
    }


    render() {
        let toRender;
        if (this.state.gameState == GameState.default){
            toRender = (
                <GameDefault setParsha={this.setParsha}
                             parsha={this.state.parsha}
                             textUrlName={this.state.textUrlName}
                             startChapter={this.state.startChapter}/>)
        }
        else if (this.state.gameState == GameState.play){
            toRender = (<BHRound
                level = {"hard"}
                newGame = {this.setGameDefault}
                continueGame = {this.continueGame}
                text={this.state.parsha.textUrlName}
                startChapter={this.state.parsha.startChapter}
            />)
        }
        return (
            <div>
                {toRender}
            </div>

        );
    }
}

/*
*  For parshiyot "textName" refers to name of parsha, texturlname refers to name of Sefer
* */
class TextItem {
    constructor(textUrlName,startChapter,textName,endChapter, startVerse = 0, endVerse = 0){
        this.textUrlName = textUrlName;
        this.startChapter = startChapter;
        this.textName = textName;
        this.endChapter = endChapter;
        this.startVerse = startVerse;
        this.endVerse = endVerse;
    }
}
