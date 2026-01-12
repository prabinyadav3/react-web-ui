import { useReducer } from "react";

const useStateCustom = (initialValue) => {
    const reducer = (state, action) => {
        return action;
    };
    const [state, dispatch] = useReducer(reducer, initialValue);

    const setState = (newValue) => {
        if (typeof newValue === 'function') {
            dispatch(newValue(state));
        } else {
            dispatch(newValue);
        }
    };

    return [state, setState];
};

export const CustomCounter = () => {
    const [count, setCount] = useStateCustom(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};