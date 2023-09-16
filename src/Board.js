import './App.css';
import Square from './Square';

function Board({xIsNext, state, onPlay}) {
    let status;
    const winner = calculateWinner(state);
    if(winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next Player: " + (xIsNext ? "X" : "O");
    }
    function calculateWinner(board) {
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
    
        for(let i=0;i<lines.length;i++) {
            const [a,b,c] = lines[i];
            if(board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        //draw condition is left
        return null;
    }
    function onClickHandler(i) {
        if(state[i] || calculateWinner(state)) {
            return;
        }
        const nextSquare = state.slice();
        if(xIsNext) {
            nextSquare[i] = "X";
        } else {
            nextSquare[i] = "O";
        }
        onPlay(nextSquare)
        console.log(nextSquare)
    }
    return <>
        <div className='status'> {status} </div>
        <div className='board-row'>
            <Square value={state[0]} onButtonClick={() => onClickHandler(0)}/>
            <Square value={state[1]} onButtonClick={() => onClickHandler(1)}/>
            <Square value={state[2]} onButtonClick={() => onClickHandler(2)}/>
        </div>
        <div className='board-row'>
            <Square value={state[3]} onButtonClick={() => onClickHandler(3)}/>
            <Square value={state[4]} onButtonClick={() => onClickHandler(4)}/>
            <Square value={state[5]} onButtonClick={() => onClickHandler(5)}/>
        </div>
        <div className='board-row'>
            <Square value={state[6]} onButtonClick={() => onClickHandler(6)}/>
            <Square value={state[7]} onButtonClick={() => onClickHandler(7)}/>
            <Square value={state[8]} onButtonClick={() => onClickHandler(8)}/>
        </div>
    </>;
}

export default Board;