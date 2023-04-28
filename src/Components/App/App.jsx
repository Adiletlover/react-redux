import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGuess, resetGame } from '../store/reducers/reducers';
import '../style.css'

const App = () => {
  const dispatch = useDispatch();
  const guess = useSelector((state) => state.guess);
  const message = useSelector((state) => state.message);

  const handleGuessChange = (e) => {
    dispatch(setGuess(e.target.value));
  };

  const handleResetClick = () => {
    dispatch(resetGame());
  };

  return (
    <main>
      <label>
        Введите число:
        <input type="number" value={guess} onChange={handleGuessChange} />
      </label>
      <button onClick={handleResetClick}>Заново</button>
      <p id='result'>{message}</p>
    </main>
  );
};
export default App;
