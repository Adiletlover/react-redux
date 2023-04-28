import { INCREMENT, DECREMENT, RANDOM_INCREMENT } from '../types';

const initialState = {
  count: 0,
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return {
        count: 1 + state.count,
      };
    case DECREMENT:
      return {
        count: 1 - state.count,
      };
    case RANDOM_INCREMENT:
      return {
        count: state.count + payload,
      };
    default:
      return state;
  }
};
console.log(reducer);
export default reducer