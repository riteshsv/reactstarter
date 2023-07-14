import axios from 'axios';
import jwtDecode from 'jwt-decode';

const login = async (creds) => {
    let loggedIn = false;
    let decoded_token = '';
    try {
        const response = await axios.post('http://localhost:5000/login', creds);
        const token = response.data.token;
        localStorage.setItem('user',JSON.stringify(token));
        let decoded_token = jwtDecode(token);
        console.log(decoded_token);
        loggedIn = true    
    } catch (error) {
        loggedIn = false;
    }
    return {decoded_token, loggedIn};
}

const logout = () => {
    let loggedIn = false;
    const user = localStorage.getItem('user');
    if(user) {
        localStorage.removeItem('user');
    }
    return {loggedIn};

}

const isLoggedIn = () => {
    let loggedIn = false;
    const user = localStorage.getItem('user');
    if(user) {
        loggedIn = true;
    }
    return {loggedIn};
}

export {login,logout,isLoggedIn};