import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { decrement, increment, randomINC } from '../../store/actions';

const OldApp = () => {
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onIncrement = () => dispatch(increment());
  const onDecrement = () => dispatch(decrement());
  const onRandomInc = () => dispatch(randomINC());
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onRandomInc}>+RND</button>
    </div>
  );
};

const App = ({ count, onDecrement, onIncrement, onRandomInc }) => {
  console.log(count);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onRandomInc}>+RND</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
const mapDispatchToProps = {
  onIncrement: () => increment(),
  onDecrement: () => decrement(),
  onRandomInc: () => randomINC(),
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
