import { useState } from "react";
export default function Counter() {
    let [count , setCount] = useState(0); //initialzation
    //console.log("component is re-render");
    //console.log(`count = ${count}`);

    let incCount = ()=> {
        setCount((currentCount) => {
            return currentCount + 1;

        });  // main logic 

        setCount ((currCount) => {
            return currCount +1;
        });

         setCount ((currCount) => {
            return currCount +1;
        });
    };
        
    return (
        <div> 
            <h3>Count ={count}</h3>
            <button onClick = {incCount}> Increse Count</button>
        </div>
    ) 
} 