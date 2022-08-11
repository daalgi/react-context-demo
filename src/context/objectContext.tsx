import React from 'react'

type User = {
    username: string,
    born: { year: number, month: number, day: number }
}
type UserProviderProps = { children: React.ReactNode }

const UserContext = React.createContext<Array<[User | null, void]>>([])

function useUser() {
    const context = React.useContext(UserContext)
    if (!context) {
        throw new Error('useUser must be used within a CountProvider')
    }
    return context
}

// function UserProvider({ children }: UserProviderProps) {
//     const [user, setUser] = React.useState<User>(
//         {
//             username: "d",
//             born: { year: 818, month: 8, day: 18 }
//         }
//     )
//     const value: Array<[User, void]> = React.useMemo(() =>
//         [user, setUser],
//         [user]
//     )
//     return <UserContext.Provider value={value}>
//         {children}
//     </UserContext.Provider>
// }

// export {
//     useUser,
//     UserProvider
// }