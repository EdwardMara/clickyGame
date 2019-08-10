import React from 'react'
import "./style.css"

export default function Navbar(props) {
    return (
        <nav>
            <ul>
                <li className='title'>Clicky Game: The Next Generation!</li>
                <li className='instructions'>You lose if you click the same image twice</li>
                <li className='score'>Score: {props.score} Top Score: {props.topScore}</li>
            </ul>
        </nav>
    )
}