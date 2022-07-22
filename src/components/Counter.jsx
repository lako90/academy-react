import { useReducer } from 'react';

const counterReducer = (state, action) => {
  console.log('state:', state)
  console.log('action:', action)

  switch (action) {
    case 'decrement': return state - 1
    case 'increment': return state + 1
    case 'addFive': return state + 5
    case 'addTen': return state + 10
    case 'double': return state * 2
    default: return state;
  }
};

const Counter = () => {
  const [counter, dispatch] = useReducer(counterReducer, 0);

  const handleDecrement = () => { dispatch('decrement'); };
  const handleIncrement = () => { dispatch('increment'); };
  const handleFive = () => { dispatch('addFive'); };
  const handleTen = () => { dispatch('addTen'); };
  const handleDouble = () => { dispatch('double'); };


  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleFive}>+5</button>
      <button onClick={handleTen}>+10</button>
      <button onClick={handleDouble}>double</button>
    </div>
  )
}

export default Counter
