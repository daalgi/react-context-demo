import React from 'react'
import { useUser } from '../context/UserContext'

const style = {
    background: "hsl(13, 13%, 60%)",
    padding: "8px"
}

function UserBox() {
    const { user } = useUser()

    return (
        <div style={style}>
            <div>
                <p>Username: {user.username}</p>
                <p>Score: {user.score}</p>
            </div>
            <p>Last render: {new Date().toTimeString()}</p>
        </div>
    )
}

export default UserBox