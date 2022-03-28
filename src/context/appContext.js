import React,{useState,useContext} from 'react';
const appContext = React.createContext()
const appContextUpdate =React.createContext()

export function useAppContext(){
    return useContext(appContext) 
}

export function useAppContextUpate(){
    return useContext(appContextUpdate) 
}


export const appProvider = ({children}) => {
    const [isSignedIn,setIsSignedIn] = useState(false)
     function abc(param){
         setIsSignedIn(param)  
    }
    return(
        <appContext.Provider value={isSignedIn}>
            <appContextUpdate.Provider value={abc}>
             {children}
         </appContextUpdate.Provider>
        </appContext.Provider>
    );

}

