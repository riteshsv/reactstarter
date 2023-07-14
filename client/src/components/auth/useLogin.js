import React from 'react';
import { useState } from 'react';
import jwt_decode from 'jwt-decode';
import { login,logout,isLoggedIn } from './authService';
import { useAuthDispatchContext } from './authprovider';

const useLogin = () => {
    const [creds, setCreds] = useState({username:"",password:""});
    const dispatch = useAuthDispatchContext();
    let isloggedIn = false;
    const handleLogin = async (username, password) => {
        try {

            const {decoded_token,loggedIn} = await login(creds);
            if(loggedIn){
                //dispatch and update state
                dispatch({
                    type:'login',
                    name:decoded_token.name,
                    roles: decoded_token.roles,
                    loggedIn:loggedIn
                });
            }
            isloggedIn = loggedIn;
        }
        catch (error) {
            console.error('Login error:', error);
        }
        return isLoggedIn;
    }
    const updateFields = (field, value) => {
        setCreds(prev =>({ ...creds, [field]:value}) )
        
    }
    return {creds, updateFields, handleLogin};
}

const useLogout = () => {
    const dispatch = useAuthDispatchContext();
    const getLogout = () => {
        if(logout()){
            dispatch(
                {
                    type:'logout',
                    name:'',
                    roles:'',
                    loggedIn:false
                }
            )
        }
    }
    return {getLogout};
}


export { useLogin, useLogout };