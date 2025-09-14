import React, { useState } from 'react';
// import { useNavigate} from 'react-router-dom';
import UserContext from './userContext';

function UserState({ children }) {

    // let location = useLocation();
    // let navigate = useNavigate();


    let [user, setUser] = useState({
        
    });

    const host = 'http://localhost:5000'

    let [islogin, setLogin] = useState(false);

    let [token, setToken] = useState('');

    const addUser = async (user) => {
        // setUserList([...listUsers, user])

        console.log('in usestate : ', user)

        const response = await fetch(`${host}/users/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })

        let data = await response.json()
        console.log(data)
    }

    const login = async (tuser) => {

        const response = await fetch(`${host}/users/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tuser)
        })

        let result = await response.json()
        console.log(result)
        if (result['token']) {
            setToken(result.token)
            setLogin(true)
            return {success : true}
        }
        else return {success : false}

    }

    const fetchUser = async () => {
        let response = await fetch(`${host}/users/auth/fetchuser`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            }
        })

        let data = await response.json()
        console.log(data)
        setLogin(true)
        setUser(data.user)
        // return data.user
    }


    return (
        <UserContext.Provider value={{ islogin, addUser, login, fetchUser, user, token }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserState;