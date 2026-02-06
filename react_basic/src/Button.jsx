function handleClick(){
    console.log("Hello React");
}

function handleMouseOver(){
    console.log("bye!");
}

function handleDbClick(){
    console.log("you double click");
}
export default function Button(){
    return(
        <div>
            <button onClick ={handleClick} > Click me!!</button>
            <p onMouseOver={handleMouseOver}> 
               React events are actions triggered by user interactions like clicks or typing.
                They use camelCase names such as onClick and pass a function reference as a handler.
                eact events are synthetic events, meaning they work consistently across all browsers.
                </p>
                <button onDoubleClick= {handleDbClick}> double click me!!</button>
        </div>
    );
}