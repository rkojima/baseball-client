import {
    START_GAME, 
    CHOOSE_ATTRIBUTE,
    MOUNT,
    COMPUTER_TURN,
    EXIT_GAME,
    SET_ONLY_ATTRIBUTE,
    COMPUTER_SELECTION,
} from '../actions/actions';

import Deck from '../data/decks.json';

const initialState = {
    selection: "",
    statsAsText: "",
    deck: "",
    playerOneDeck: [],
    playerTwoDeck: [],
    startedGame: false,
    winOrLose: true,
    playerOneTurn: true,
    battling: false,
    computerSelected: false,
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while(0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function randomAttribute(card) {
    let keys = [];
    let playerTwoCard = card;
    for (let prop in playerTwoCard) {
        if (playerTwoCard.hasOwnProperty(prop)) {
            keys.push(prop);
        }
    }
    let index = keys.indexOf("name");
    if (index > -1) {
        keys.splice(index, 1);
    }
    return keys[keys.length * Math.random() << 0];
}

function battle(state, selection) {
    let p1 = state.playerOneDeck[0][selection];
    let p2 = state.playerTwoDeck[0][selection];
    let tempDeckOne = state.playerOneDeck;
    let tempDeckTwo = state.playerTwoDeck;

    //TODO when you lose all cards

    if (p1 > p2 || p1 === p2) {
        console.log("Player One Wins!");
        tempDeckOne.push(tempDeckTwo[0]);
        tempDeckTwo.splice(0, 1);
        tempDeckOne.push(tempDeckOne.shift());
        let newState = Object.assign({}, state, {
            selection: "",
            statsAsText: "",
            playerOneDeck: tempDeckOne,
            playerTwoDeck: tempDeckTwo,
            playerOneTurn: !state.playerOneTurn,
            computerSelected: false,
            battling: false,
        });
        console.log("Is player one turn? " + newState.playerOneTurn);
        return newState;
    } else {
        console.log("Computer Wins!");
        tempDeckTwo.push(tempDeckOne[0]);
        tempDeckOne.splice(0, 1);
        tempDeckTwo.push(tempDeckTwo.shift());
        let newState = Object.assign({}, state, {
            selection: "",
            statsAsText: "",
            playerOneDeck: tempDeckOne,
            playerTwoDeck: tempDeckTwo,
            playerOneTurn: !state.playerOneTurn,
            computerSelected: false,
            battling: false,
        });
        console.log("Is player one turn? " + newState.playerOneTurn);
        return newState;
    }
}

function statsAsText(selection) {
    switch(selection) {
        case "avg":
            return "Average: ";
            break;
        case "hits":
            return "Hits: ";
            break;
        case "isolatedPower":
            return "Isolated Power: ";
            break;
        case "battingAverageOnBallsInPlay":
            return "Batting Average On Balls In Play: ";
            break;
        case "weightedOnBaseAverage":
            return "Weighted On Base Average: ";
            break;
        case "weightedRunsCreatedPlus":
            return "Weighted Runs Created Plus: ";
            break;
        case "baseRunning":
            return "Base Running";
            break;
        case "winsAboveReplacement":
            return "Wins Above Replacement";
            break;
        case "runsBattedIn":
            return "Runs Batted In";
            break;
        case "onBasePercentage":
            return "On Base Percentage";
            break;
    }
}


export default (state = initialState, action) => {
    state = state || initialState;

    if (action.type === START_GAME) {
        // Shuffle deck
        // Somehow get url info to find out which deck to play with
        let chosenDeck = Deck.filter(function(obj) {
            return obj.name === action.deck;
        });
        let randomizedDeck = chosenDeck[0].deck.slice();
        randomizedDeck = shuffle(randomizedDeck);
        if (action.whichStats === "standard") {
            randomizedDeck.forEach(function(entry) {
                delete entry.isolatedPower;
                delete entry.battingAverageOnBallsInPlay;
                delete entry.weightedOnBaseAverage;
                delete entry.weightedRunsCreatedPlus;
                delete entry.baseRunning;
            })
        } else {
            randomizedDeck.forEach(function(entry) {
                delete entry.winsAboveReplacement;
                delete entry.hits;
                delete entry.runsBattedIn;
                delete entry.avg;
                delete entry.onBasePercentage;
            })
        }
        let tempDeckOne = randomizedDeck.slice(0,15);
        let tempDeckTwo = randomizedDeck.slice(-15);
        state = Object.assign({}, initialState, {
            playerOneDeck: tempDeckOne,
            playerTwoDeck: tempDeckTwo,
            startedGame: true,
            deck: action.deck,
        });
        return state;
    }

    else if (action.type === SET_ONLY_ATTRIBUTE) {
        const selectionText = statsAsText(action.selection);
        state = Object.assign({}, state, {
            selection: action.selection,
            statsAsText: selectionText,
            battling: true,
        })
        return state;
    }

    else if (action.type === CHOOSE_ATTRIBUTE) {
        return battle(state, action.selection);
        // Get player name and attribute chosen
        // Compare with opponent's attribute
        // If higher number, get their card 
        // If not, top card gets taken
    }
    else if (action.type === MOUNT) {
        return state;
    }
    else if (action.type === COMPUTER_SELECTION) {
        console.log("Computer Selection");
        let attr = randomAttribute(state.playerTwoDeck[0]);
        let selectionText = statsAsText(attr);
        state = Object.assign({}, state, {
            selection: attr,
            statsAsText: selectionText,
            battling: true,
            computerSelected: true,
        })
        return state;
        // return battle(state, attr);
    }
    else if (action.type === COMPUTER_TURN) {
        console.log("Computer Turn");
        return battle(state, action.selection);
    }
    else if (action.type === EXIT_GAME) {
        return initialState;
    }
    return state;
}