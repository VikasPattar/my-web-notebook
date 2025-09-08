import React, { useState } from 'react';
// import { useLocation, useNavigate} from 'react-router-dom';
import UserContext from './userContext';

function UserState({ children }) {

    // let location = useLocation();
    // let navigate = useNavigate();


    // let [user, setUser] = useState({
    //     name: "",
    //     email: '',
    //     password: ''
    // });

    let [listUsers, setUserList] = useState([{
        name : 'vikas',
        email : 'vikas@gmail.com',
        password : 'vikas'
    }]);

    let [islogin, setLogin] = useState(false);

    let [loggedInUser, setLoggedInUser] = useState({
        name: '',
        email: ''
    })

    const addUser = (user) => {
        setUserList([...listUsers, user])
    }

    const login = (tuser) => {
        let found = listUsers.filter((user) =>
        {return tuser.email === user.email && tuser.password === user.password}
        )
        if (found) {
            console.log('found item : ',found)
            setLogin(true);
            setLoggedInUser({
                name : found[0].name,
                email : found[0].email
            });
           
        }
        else {
            setLoggedInUser({
                name : '',
                email : ''
            })
            setLogin(false);
        }
    }

    const fetchUser = () => {
        let found = listUsers.filter((user) => user.email === loggedInUser.email)
        return found[0];
    }


    return (
        <UserContext.Provider value={{ islogin, addUser, login, fetchUser, loggedInUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserState;