import React, { createContext, useContext } from 'react'

const UserContext = React.createContext();

export function UserProvider({children}) {
    const user = {
        name: "이주찬",
        age: 26,
        role: "학생",
    }

    return (
        <UserContext.Provider value={user} >
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    return useContext(UserContext);
}