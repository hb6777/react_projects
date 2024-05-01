import { useEffect, useState } from "react";
import "./styles.css"

export default function TicTakToe() {

    // Issue: Has to click one more time in order to change background color in boxes 
    // to green for winner.

    const [squareInput, setsquareInput] = useState(Array(9).fill(''));
    const [isXTurn, setisXTurn] = useState(true);
    const [currentDrawIndex, setCurrentDrawIndex] = useState(0);
    const [status, setstatus] = useState('');
    var isWinningColor = [];

    function Square({ value, onclick, id }) {
        return (
            <button id={id} onClick={onclick} className="square">{value}</button>
        )
    }

    function getWinner() {
        // 0,1,2
        // 3,4,5
        // 6,7,8
        const winningPattern = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ];

        for (let i = 0; i < winningPattern.length; i++) {
            const [x, y, z] = winningPattern[i];
            isWinningColor = [];

            if (squareInput[x] && squareInput[x] === squareInput[y] && squareInput[x] === squareInput[z]) {
                console.log("match : " + isWinningColor);
                isWinningColor=[x, y, z];
                isWinningColor.forEach(item=>{ 
                    document.getElementById(item).style.backgroundColor = 'green'; 
                })  
                return winningPattern[i]; 
            }
        }
        return null;
    } 
 
useEffect(() => {
    if (!getWinner() && squareInput.every(item => item !== '')) {
        setstatus(`It's a draw!`)
    } else {
        if (getWinner()) {
             console.log('useEffect : ' + isWinningColor);
            setstatus((!isXTurn ? "X" : "O") + ' is Winner!')
            document.body.style.backgroundColor = 'red'; 
        } else {
            const whoTurn = isXTurn ? "X" : "O";
            setstatus('Next Player is: ' + whoTurn)
        }
    }
}, [squareInput, isXTurn])

function handleOnClick(index) {
    let cpyPrevSquareInput = [...squareInput]; 

    console.log('handleOnClick : ' + isWinningColor);

    if (getWinner() || cpyPrevSquareInput[index]) return;
    cpyPrevSquareInput[index] = isXTurn ? "X" : "O";
    setsquareInput(cpyPrevSquareInput);
    setisXTurn(!isXTurn);
    // console.log(squareInput); 
    // console.log(isXTurn); 
}

function handleRestart() {
    setisXTurn(true)
    setsquareInput(Array(9).fill(''))
    isWinningColor = [];
    document.body.style.backgroundColor = 'white';
}

function DynamicSquare() {
    return (
        squareInput.map((e, i) =>
            (i % 3 === 0) ?
                <div>
                    <Square id={i + 2} value={squareInput[i + 2]} onclick={() => handleOnClick(i + 2)} />
                    <Square id={i + 1} value={squareInput[i + 1]} onclick={() => handleOnClick(i + 1)} />
                    <Square id={i} value={squareInput[i]} onclick={() => handleOnClick(i)} />
                </div>
                : null
        )
    )
}

return (<div className="game-container">

    <DynamicSquare />

    {/* <div>
            <Square id={0} value={squareInput[0]} onclick={() => handleOnClick(0)} />
            <Square id={1} value={squareInput[1]} onclick={() => handleOnClick(1)} />
            <Square id={2} value={squareInput[2]} onclick={() => handleOnClick(2)} />
        </div>
        <div>
            <Square id={3} value={squareInput[3]} onclick={() => handleOnClick(3)} />
            <Square id={4} value={squareInput[4]} onclick={() => handleOnClick(4)} />
            <Square id={5} value={squareInput[5]} onclick={() => handleOnClick(5)} />
        </div>
        <div>
            <Square id={6} value={squareInput[6]} onclick={() => handleOnClick(6)} />
            <Square id={7} value={squareInput[7]} onclick={() => handleOnClick(7)} />
            <Square id={8} value={squareInput[8]} onclick={() => handleOnClick(8)} />
        </div> */}


    <h1>{status}</h1>
    <button onClick={handleRestart}>Restart</button>
</div>
);
}


