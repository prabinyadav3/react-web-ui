import { useState } from 'react';    

export const Counter = () => {
    const [count, setCount] = useState(() => {
        console.log("Initializing count");
        return 0;
    });
    //can also use useEffect to log count changes

    console.log("Counter component rendered with count:", count);

    const handleclick = () => {
        setCount(count + 1);
    };

    return <button onClick={handleclick}>Count: {count}</button>;
};