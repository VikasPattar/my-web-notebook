// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useNavigate, useLocation} from 'react-router-dom';
import Navbar from './navbar';
import Test from './test';
// import Register from './register';

function Home() {

    let navigate = useNavigate();
    let location = useLocation();

    let path = {
        home : '/',
        login : '/login',
        register : '/register'
    }

   const handleClick = ()=>{
        navigate('/');
   }

   const displayBackIcon = ()=>{
        if(location.pathname === path.login) return <i className="fa-solid fa-arrow-left fs-4 ms-4 ps-3" onClick={handleClick}></i>
        if(location.pathname === path.register) return <i className="fa-solid fa-arrow-left fs-4 ms-4 ps-3" onClick={handleClick}></i>

   }

    return (
        <>
        
            <div className="App">
                <Navbar />
                {displayBackIcon()}
                <div className="d-flex align-items-center justify-content-center flex-column mt-4">
                    <Test/>
                </div>
            
            </div>
        
        </>
    )
}

export default Home;