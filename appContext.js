import React, { useState, useContext, createContext, useEffect } from 'react';
import { firebase } from '@react-native-firebase/firestore';


const appContext = createContext()
const appContextUpdate = createContext()

export function useAppContext() {
    return useContext(appContext)
}

export function useAppContextUpate() {
    return useContext(appContextUpdate)
}


export function AppProvider({ children }) {
    const [isSignedIn, setIsSignedIn] = useState(true)

    useEffect(() => {
        const userdata = firebase.auth().currentUser
        console.log(':: >>>>', userdata)
        if (userdata != null) {
            setIsSignedIn(false)

        }
    }, []);


    function updateSignInState(param) {
        setIsSignedIn(param)
    }

    return (
        <appContext.Provider value={isSignedIn}>
            <appContextUpdate.Provider value={updateSignInState}>
                {children}
            </appContextUpdate.Provider>
        </appContext.Provider>
    );

}