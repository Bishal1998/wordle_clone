import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { useState, createContext } from "react";
import { Words } from './Words';

export const AppContext = createContext();

function App() {

  const [board, setBoard] = useState(Words);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });

  const onEnter = () => {
    // console.log('asjhdfks')
    if (currAttempt.letterPos !== 5) return;
    setCurrAttempt((init) => {
      return ({ attempt: init.attempt + 1, letterPos: 0 })
    })
  }

  const onSelect = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt((init) => {
      return ({ ...init, letterPos: init.letterPos + 1 })
    }

    )
  }

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = '';
    setBoard(newBoard);
    setCurrAttempt((init) => {
      return ({ ...init, letterPos: init.letterPos - 1 })
    })
  }

  const correctWord = "RIGHT";

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard, currAttempt, setCurrAttempt, onSelect, onDelete, onEnter, correctWord }}>
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
