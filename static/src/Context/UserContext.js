import React from 'react';
import {useUser} from '../Hooks/useUser'

export const UserContext = React.createContext();

const UserContextProvider = ({children}) =>{
    const [user,isLoading,Login,LogOut,Register] = useUser();

    return(
        <UserContext.Provider value={{user,isLoading,Login,LogOut,Register}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;