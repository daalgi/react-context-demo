import { useUser } from '../context/UserContext'

const divStyle = {
    background: "hsl(93, 13%, 60%)",
    padding: "8px"
}

const buttonDivStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "32px",
}

function ScoreCounter() {
    const { increaseScore, decreaseScore } = useUser()

    return (
        <div style={divStyle}>
            <p>Change the score:</p>
            <div style={buttonDivStyle}>
                <button onClick={decreaseScore}>-</button>
                <p>SCORE</p>
                <button onClick={increaseScore}>+</button>
            </div>
            <p>Last render: {new Date().toTimeString()}</p>
        </div>
    )
}

export default ScoreCounter