import BHUtils from './BHUtils';
import Block from "./Block";
let U = new BHUtils();
let B = new Block();

export default class BlockSpawner {

    decoyIndex = 0;
    textIndex = 0;
    constructor(level,mainText,decoyText,config){
        this.level = level;
        this.mainText = mainText;
        this.decoyText = decoyText;
        this.config = config;

    }
    setIndex = (num) => {
        this.textIndex = num;
    }
    blockSpawner = (lowestBlock,blocks,blockOffset,difficulty,mainText) => {
        let i;
        if (lowestBlock === 0) {
            i = 1;
        } else {
            i = lowestBlock;
        }

        //blocks are numbered, run it 60 times
        for (i; i < lowestBlock + 60; i++) {
            //if theres room in the blocks array
            if (i >= blocks.length) {
                let type;
                let powerup = 0;
                let word;
                let wordType;
                let wordIndex;
                let x;
                let y;

                if (blocks[i-1].wordType === "decoyWord" || blocks[i-1].wordType === "spike"){
                    if(blocks[i-2].wordType === "decoyWord" || blocks[i-1].wordType === "spike") {
                        wordType = "textWord";
                    }
                    else {
                        wordType = this.spawnWordType(i);
                    }
                }


                else if (blocks[i-1].wordType === "textWord"){
                    if(blocks[i-2] != null && blocks[i-2].wordType === "textWord") {
                        if(blocks[i-3] != null && blocks[i-3].wordType === "textWord"){
                            wordType = "decoyWord";
                        }
                        else {
                            wordType = this.spawnWordType();
                        }
                    }
                    else {
                        wordType = this.spawnWordType();
                    }
                }
                else {
                    wordType = this.spawnWordType();
                }

                type = this.spawnBlockType();




                if (powerup !== 0) {
                }
                else if (wordType === "textWord") {
                    powerup = this.spawnPowerup(this.level);
                }

                [word,wordType,wordIndex] = this.attributeWordToBlock(wordType);


                //TODO should really be a param in main "blocksize"
                x = Math.random()*(U.screenWidth - B.width);

                //TODO figure out the levels, max jump =~ 260
                if (wordType === "decoyWord" || blocks[i-1].wordType === "decoyWord") {
                    y = (blocks[i-1].y) - (((Math.random()*(U.adjustY(50) + (difficulty * U.adjustY(10)))) + U.adjustY(30) + blockOffset) * (2 / 3));
                } else if (wordType === "spike") {
                    y = (blocks[i-1].y) - ((Math.random()*(U.adjustY(50) + (difficulty *U.adjustY(10))))+U.adjustY(50) + blockOffset);
                }  else if (blocks[i-1].wordType === "spike") {
                    // blocks[i].y = (blocks[i-1].y) - ((Math.random()*(U.adjustY(80) + (difficulty*U.adjustY(25))))+U.adjustY(50) + blockOffset);
                    y = (blocks[i-1].y) - ((Math.random()*(U.adjustY(20) + (difficulty *U.adjustY(10)))) +U.adjustY(10)+ blockOffset);
                }
                else {
                    if(blocks[i-1].type === "sideways" || blocks[i-1].type === "rising"){
                        y = (blocks[i-1].y) - ((Math.random()*(U.adjustY(45) + (difficulty *U.adjustY(10))))+U.adjustY(40) + blockOffset);
                    }
                    else if(blocks[i-1].wordType === "textWord") {
                        y = (blocks[i - 1].y) - ((Math.random() * (U.adjustY(45) + (difficulty * U.adjustY(10)))) + U.adjustY(75) + blockOffset);
                    }
                    else {
                        y = (blocks[i - 1].y) - ((Math.random() * (U.adjustY(45) + (difficulty * U.adjustY(10)))) + U.adjustY(25) + blockOffset);
                    }

                }

                let last = false;
                if(this.textIndex === mainText.length){
                    if(wordType != 'decoyWord'){
                        last = true;
                    }
                    else{
                        break;
                    }
                }
                if(this.textIndex > mainText.length){
                    break;
                }
                console.log(wordIndex);
                let block = new Block(x,y,powerup,type,word,wordType,wordIndex,last);
                blocks.push(block);
            }
        }

        //Remove blocks that are below us now
        for (let i = 0; i < lowestBlock - 2; i++) {
            blocks.shift();
        }
    }

    spawnPowerup = (level) => {
        const powerupChances = {
            "easy": {
                "spring": this.config.easy.spring,
                "springBoots": this.config.easy.springBoots,
                "orbBack": this.config.easy.orbBack,
                "orbForward": this.config.easy.orbForward
            },
            "hard": {
                "spring": this.config.hard.spring,
                "springBoots": this.config.hard.springBoots,
                "orbBack": this.config.hard.orbBack,
                "orbForward": this.config.hard.orbForward
            }
        };

        if (Math.round(Math.random() * powerupChances[level]["spring"]) === 0) {
            return "spring";
        } else if (Math.round(Math.random() * powerupChances[level]["springBoots"]) === 0) {
            return "springBoots";
        } else if(Math.round(Math.random() * powerupChances[level]["orbBackward"]) === 0) {
            return "orbBackward";
        } else if(Math.round(Math.random() * powerupChances[level]["orbForward"]) === 0) {
            return "orbForward";
        }
        return 0;
    }

    spawnBlockType = () => {
        const blockChances = {
            //1 out of every 15 block TODO this is where we will come up with the decoys, probably 1/4,
            "sideways": this.config.hard.blockTypeFreq.sideways,
            "rising": this.config.hard.blockTypeFreq.rising
        };


        if (Math.round(Math.random() * blockChances["sideways"]) === blockChances["sideways"]) {
            return "sideways";
        } else if (Math.round(Math.random() * blockChances["rising"]) === blockChances["rising"]) {
            console.log("rising block created " + this.textIndex);
            return "rising";
        }
        return "regular";
    }

    spawnWordType = (index) => {
        const wordChances = {
            "spike": this.config.hard.wordTypeFreq.spike,
            "textWord": 1
        }
        if (index > 5 && Math.round(Math.random()* wordChances["spike"]) === wordChances["spike"]){
            return "spike"
        }
        else if (Math.round(Math.random()* wordChances["textWord"]) === wordChances["textWord"]) {
            return "textWord";
        }
        else {
            return "decoyWord";
        }

    }



    attributeWordToBlock = (wordType) => {
        let word;
        let wordIndex;
        if(wordType === "textWord"){
            word = this.mainText[this.textIndex];
            wordIndex = this.textIndex;
            this.textIndex++;
        }
        else if(wordType === "decoyWord"){
            //textNumber = this.decoyIndex;
            if(this.level === "hard"){
                word = this.decoyText[this.decoyIndex];
            }
            else{
                //word = "בַשָּׁמַיִם-הִוא";
                if(this.decoyIndex % 2 === 0){
                    word = "בשמים היא";
                }
                else{
                    word = "";
                }
            }
            wordIndex = this.decoyIndex;
            this.decoyIndex++;
        }
        else{
            wordIndex = 0;
            word = "";
        }
        return [word,wordType,wordIndex];
    }
}