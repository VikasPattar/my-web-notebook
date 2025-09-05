import React, { useState } from 'react';
// import { useLocation, useNavigate} from 'react-router-dom';
import UserContext from './userContext';

function UserState({ children }) {

    // let location = useLocation();
    // let navigate = useNavigate();


    let [user, setUser] = useState({
                    name: "",
                    email: '',
                    password: ''
                });

    

    // setState({
    //     name : 'user1',
    //     email : 'user1@gmail.com',
    //     password : 'user1'
    // })

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserState;