import React from "react";
import { useState } from "react";
import './Eightball.css'

const EightBall=(props) =>{
    const choice=(arr)=>{
        const randomIdx=Math.floor(Math.random() * arr.length);
        return arr[randomIdx]
    }

    const restart=()=>{
        setMsg('Think of a question')
        setColor('black')
        setCount(0)
        
    }
    const [color,setColor]=useState('black');
    const [msg,setMsg]=useState('Think of a question')
    const [count, setCount]=useState(0)
    
    const handleClick=()=>{
        const {msg,color}= choice(props.answers)
        setColor(color);
        setMsg(msg)
        setCount(count+1)
        
    }
    return(
        <>
        <div className="EightBall"
        onClick={handleClick} style={{'backgroundColor':color}}>
            {msg}
        </div>
        <h4> We answered you: {count} </h4>
        <button  onClick={restart}> Reset</button>
        </>
    )
}

EightBall.defaultProps={
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
      ]

}
export default EightBall;