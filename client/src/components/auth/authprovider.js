import { createContext, useContext,useReducer } from "react"
import { userState } from "./userState";

const AuthContext = createContext(null);
const AuthDispatchContext = createContext(null);

/**
 * authReducer function manages the state
 * @param {*} userData the current userState
 * @param {*} action the action performed by the user
 * @returns updated userState
 * @auther Ritesh Sangani
 */
export const authReducer = (userData, action) => {
    switch (action.type) {
        case 'login':{

            return {
                ...userData,
                name:action.name,
                roles:action.roles,
                loggedIn:action.loggedIn
            };
        }
        case 'logout':{
            return {
                ...userData,
                name:'',
                roles:'',
                loggedIn:action.loggedIn
            };
        }
        default:
            throw Error('Unknown action' + action.type);
    }

}

/**
 * AuthProvider: provider for auth context and auth dispatch context
 * @param {*} children react property for all children jsx 
 * @returns AuthProvider
 */
export const AuthProvider = ({children}) => {
    const [state, dispatch] =  useReducer(authReducer,userState)

    return (
        <AuthContext.Provider value={state}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const useAuthDispatchContext = () => {
    return useContext(AuthDispatchContext);
}