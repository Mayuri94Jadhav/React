import { useState} from "react";
import "./Lottery.css";
import {genTicket , sum} from "./helper";
import Ticket from "./Ticket";

export default function Lottery ({n=3, winCondition}) {  // here winning condtion pass in the form of props as a function 
    let [ticket, setTicket] = useState (genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket =() => { 
        setTicket (genTicket(n));
    };

    return ( 
        <div className="lottery">
            <h1> Lottery</h1>
            <Ticket  ticket ={ticket}/>
            <button onClick ={buyTicket}> Buy New Ticket</button>
            <h3> { isWinning && "Congratulation , you won!"}</h3>
        </div>
    )
}