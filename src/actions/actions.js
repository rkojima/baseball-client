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

export const MOUNT = 'MOUNT';
export const mount = () => ({
    type: MOUNT,
})

export const COMPUTER_TURN = 'COMPUTER_TURN';
export const computerTurn = () => ({
    type: COMPUTER_TURN,
})

export const EXIT_GAME = "EXIT_GAME";
export const exitGame = () => ({
    type: EXIT_GAME,
})