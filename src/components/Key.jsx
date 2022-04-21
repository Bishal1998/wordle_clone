import { useContext } from "react";
import { AppContext } from "../App";

const Key = ({ keyVal, bigKey }) => {

    const { onSelect, onDelete, onEnter } = useContext(AppContext);

    const selectLetter = () => {
        if (keyVal === "ENTER") {
            onEnter();
        }
        else if (keyVal === "DELETE") {
            onDelete();
        }
        else {
            onSelect(keyVal);
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