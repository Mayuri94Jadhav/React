//  Topic: Event Object 
function handleFormSubmit(event) { // here "event" is object
    event.preventDefault();     // prevant default behaviour of "event Onject  "
    console.log("Form submitted");
}

export default function Form(){
return(
<form onSubmit = {handleFormSubmit}>
    <input placeholder ="write something"/>
    <button>Submit</button>
</form>
);
}