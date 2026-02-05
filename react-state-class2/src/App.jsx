import './App.css'
import LudoBord from "./LudoBoard";
import TodoList from "./TodoList";
import Lottery from "./Lottery";
import {sum} from "./helper";
// import Ticket from "./Ticket";


function App() {
  let winCondition =(ticket) => {
    return ticket.everry ((num) => num === ticket[0]); 
    // the condition = all num should same

  }
  return (
     <>
  {/* <LudoBord/> */}
   {/* <TodoList/> */}
   <Lottery n={3} winCondition ={winCondition}/>  
   {/*  here in full function is pass reather than just normal var. */}

   
  </>
  );
 
}

export default App;
