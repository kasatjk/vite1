import './styles/MyButton.css'
import {useState} from "react";

function MyButton() {
    const [color, setColor] = useState('red')
    const [width, setWidth] = useState(100)

    return (
        <>
            <button onClick={() => {
                let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                setColor('#' + randomColor);
                setWidth(width + 10);
            }}
                    style={{backgroundColor: color, width: width}}>Push
            </button>
        </>
    )
}

export default MyButton
