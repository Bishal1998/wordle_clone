import { useContext } from "react";
import { AppContext } from "../App";

const Key = ({ keyVal, bigKey }) => {

    const { board, setBoard, currAttempt, setCurrAttempt } = useContext(AppContext);

    const selectLetter = () => {
        if (keyVal === "ENTER") {
            if (currAttempt.letterPos !== 5) return;
            setCurrAttempt((init) => {
                return ({ attempt: init.attempt + 1, letterPos: 0 })
            })
        }
        else if (keyVal === "DELETE") {
            if (currAttempt.letterPos === 0) return;
            const newBoard = [...board];
            newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = '';
            setBoard(newBoard);
            setCurrAttempt((init) => {
                return ({ ...init, letterPos: init.letterPos - 1 })
            })
        }
        else {
            if (currAttempt.letterPos > 4) return;
            const newBoard = [...board];
            newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
            setBoard(newBoard);
            setCurrAttempt((init) => {
                return ({ ...init, letterPos: init.letterPos + 1 })
            }

            )
        }
    }
    return (
        <div
            className="key"
            id={bigKey && 'big'}
            onClick={selectLetter}>
            {keyVal}
        </div>
    )
}

export default Key;