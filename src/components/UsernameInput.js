import { useUser } from '../context/UserContext'

const divStyle = {
    background: "hsl(193, 13%, 60%)",
    padding: "8px"
}

function UsernameInput() {
    const { user, changeUsername } = useUser()

    return (
        <div style={divStyle}>
            <p>Change the username:</p>
            <input onChange={changeUsername} defaultValue={user.username}/>
            <p>Last render: {new Date().toTimeString()}</p>
        </div>
    )
}

export default UsernameInput