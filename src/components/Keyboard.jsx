import Key from "./Key";

const Keyboard = () => {

    const key1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const key2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const key3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];


    return (
        <div className="keyboard">
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