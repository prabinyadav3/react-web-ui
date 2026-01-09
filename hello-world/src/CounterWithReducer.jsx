import { useReducer } from "react"; 

const initialState = 0;

const countReducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

export const CounterWithReducer = () => {
   const [count, dispatch] = useReducer(countReducer, initialState);
    return (
    <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
    );
};
