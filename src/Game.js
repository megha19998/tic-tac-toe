import './App.css';
import Board from './Board';
import { useState } from 'react';

function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentState = history[currentMove];
    function handlePlay(nextState) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextState];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length-1)
        setXIsNext(!xIsNext);
    }
    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
        setXIsNext(nextMove%2 === 0);
    }
    const move = history.map((state,move) => {
        let description;
        if(move>0) {
            description = "Go To Move #"+move;
        } else {
            description = "Go to Start Game";
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    });

    return <>
        <div>
            <div>
                <Board xIsNext = {xIsNext} state={currentState} onPlay={handlePlay}/>
            </div>
            <div>
                <ol>{move}</ol>
            </div>
        </div>
    </>
}

export default Game;