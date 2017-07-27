import {
    START_GAME, 
    CHOOSE_ATTRIBUTE,
    WIN_CARD
} from '../actions/actions';

import Deck from '../data/decks.json';

const initialState = {
    selection: "",
    deck: "",
    playerOneDeck: [],
    playerTwoDeck: [],
    winOrLose: true,
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

export default (state, action) => {
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
        console.log(randomizedDeck);
        state = Object.assign({}, initialState, {
            playerOneDeck: randomizedDeck.slice(0, 15),
            playerTwoDeck: randomizedDeck.slice(-15),
        });
        console.log(state.playerOneDeck);
        console.log(state.playerTwoDeck);
        return state;
    }
    else if (action.type === CHOOSE_ATTRIBUTE) {
        const attr = action.selection;
        // Get player name and attribute chosen
        // Compare with opponent's attribute
        // If higher number, get their card 
        // If not, top card gets taken
    }
}

