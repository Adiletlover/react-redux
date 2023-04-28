
const initialState = {
  secretNumber: Math.floor(Math.random() * 101),
  guess: null,
  message: '',
};

const SET_GUESS = 'SET_GUESS';
const RESET_GAME = 'RESET_GAME';

export const setGuess = (guess) => {
  return { type: SET_GUESS, guess };
}

export const resetGame = () => {
  return { type: RESET_GAME };
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GUESS:
      const guess = parseInt(action.guess);
      let message = '';
      if (guess === state.secretNumber) {
        message = 'Поздравляем вы отгадали число';
      } else if (guess > state.secretNumber) {
        message = 'Не правильно берите ниже';
      } else if (guess < state.secretNumber) {
        message = 'Не правильно берите выше';
      }
      return { ...state, guess, message };
    case RESET_GAME:
      return { ...initialState, secretNumber: Math.floor(Math.random() * 101) };
    default:
      return state;
  }
}

export default gameReducer
