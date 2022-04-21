import Key from "./Key";
import { useCallback, useContext, useEffect } from "react";
import { AppContext } from "../App";

const Keyboard = () => {

    const { currAttempt, onSelect, onDelete, onEnter } = useContext(AppContext);

    const key1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const key2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const key3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];



    const handleKeyboard = useCallback((e) => {
        console.log(e.key)
        if (e.key === 'Enter') {
            onEnter();
        } else if (e.key === 'Backspace') {
            onDelete();
        } else {
            key1.forEach((key) => {
                if (e.key.toLowerCase() === key.toLowerCase()) {
                    onSelect(key);
                }
            })
            key2.forEach((key) => {
                if (e.key.toLowerCase() === key.toLowerCase()) {
                    onSelect(key);
                }
            })
            key3.forEach((key) => {
                if (e.key.toLowerCase() === key.toLowerCase()) {
                    onSelect(key);
                }
            })
        }
    }, [currAttempt]
    )

    useEffect(() => {
        document.addEventListener('keydown', handleKeyboard);

        return () => {
            document.removeEventListener('keydown', handleKeyboard)
        }
    }, [handleKeyboard])


    return (
        <div className="keyboard" onKeyDown={handleKeyboard}>
            <div className="line1">
                {key1.map((key, index) => {
                    return <Key keyVal={key} key={index} />
                })}
            </div>
            <div className="line2">
                {key2.map((key, index) => {
                    return <Key keyVal={key} key={index} />
                })}
            </div>
            <div className="line3">
                <Key keyVal='ENTER' bigKey />
                {key3.map((key, index) => {
                    return <Key keyVal={key} key={index} />
                })}
                <Key keyVal='DELETE' bigKey />
            </div>
        </div>
    )
}

export default Keyboard