import {createContext, useState} from 'react'

export const GlobalContext = createContext({})

export function RoutesProvider({children}: any) {
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [called, setCalled] = useState(false)

    return (
        <GlobalContext.Provider value={{email, setEmail, validEmail, setValidEmail, called, setCalled}}>
            {children}
        </GlobalContext.Provider>
    )
}