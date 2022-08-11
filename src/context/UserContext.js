import React from 'react'


const UserContext = React.createContext()

function useUser() {
    const context = React.useContext(UserContext)
    if (!context) {
        throw new Error('useUser must be used within a CountProvider')
    }
    return context
}

function UserProvider({ children }) {
    const [user, setUser] = React.useState({
        username: "daalgi",
        score: 0,
        born: { year: 818, month: 8, day: 18 }
    })
    const increaseScore = () => setUser({
        username: user.username,
        score: user.score + 1,
        born: user.born
    })
    const decreaseScore = () => setUser({
        username: user.username,
        score: user.score - 1,
        born: user.born
    })
    const changeUsername = e => setUser({
        username: e.target.value,
        score: user.score,
        born: user.born
    })

    const value = React.useMemo(() =>
        ({ user, increaseScore, decreaseScore, changeUsername }),
        [user]
    )
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}

export {
    useUser,
    UserProvider,
    UserContext
}