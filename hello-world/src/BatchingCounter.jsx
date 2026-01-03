import { useState } from 'react';

export const BatchingCounter = () => {
      const [count, setCount] = useState(0);  

     const [isActive, setIsActive] =  useState(false);   

    console.log("Render phase: Component rendering with count");

    const handleClick = () => { 
         setCount((prev) => {
            return prev + 1;
         });
     
        setCount((prev) => {
            return prev + 5;
        });

         setCount((prev) => {
            return prev + 10;
        });

        setIsActive(true);
    };

    return (
        <div>
            <h2>Count: {count}</h2>
            <p>Active: {isActive ? "Yes" : "No"}</p>
            <button onClick={handleClick}>Update all three</button> 
        </div>
    );
};