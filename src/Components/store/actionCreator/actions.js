import { createAction } from '@reduxjs/toolkit';
import ErrorBaundary from '../../ErrorBaundary/ErrorBaundary';

export const guessNumber = (number) => {
  return async (dispatch) => {
    const controller = new AbortController();
    const signal = controller.signal;

    try {
      const response = await fetch(`https://jsonplaceholder/${number}`, { signal });
      const data = await response.json();
      dispatch(guessNumberSuccess(data));
    } catch (error) {
      if (error.name === 'AbortError') {
        < ErrorBaundary/>
      } else {
        console.error(error);
        dispatch(guessNumberError(error.message));
      }
    }
  };
};

export const guessNumberSuccess = createAction('guessNumberSuccess');
export const guessNumberError = createAction('guessNumberError');