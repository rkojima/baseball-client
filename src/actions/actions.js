export const START_GAME = 'START_GAME';
export const startGame = (deck, whichStats) => ({
    type: START_GAME,
    deck,
    whichStats
});

export const CHOOSE_ATTRIBUTE = 'CHOOSE_ATTRIBUTE';
export const chooseAttribute = (selection) => ({
    type: CHOOSE_ATTRIBUTE,
    selection
});

export const WIN_CARD = 'WIN_CARD';
export const winCard = (card, deck) => ({
    type: WIN_CARD,

});