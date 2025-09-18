import { useContext, useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
// eslint-disable-next-line
import userContext from "../../contexts/userContext";
import CreateNote from './createNote';
import YourNotes from './yourNotes';

function Dashboard() {

    let { user, fetchUser, islogin, token, setToken, setLogin} = useContext(userContext);
    const location = useLocation();
    const navigate = useNavigate()

    let path = {
        createNote: '/dashboard/createnote',
        yournotes: '/dashboard/yournotes',
        default: '/dashboard'
    }
    let components = {
        createNote: <CreateNote />,
        yournotes: <YourNotes />,
        default: <h1>Welcome to user Dashboard</h1>
    }

    let [localUser, setLocalUser] = useState(user)

    useEffect(() => {
        // Redirect if not authenticated
        if (!islogin && !token) {
            navigate('/login');
            // alert('please login again')
            return;
        }
    }, [islogin, token, navigate]);

    // useEffect(() => {
    //     // Fetch user if we have token but no user data
    //     if (token && (!user || !user.name)) {
    //         const fetchUserData = async () => {
    //             console.log('fetch user is run successfully');
    //             await fetchUser();
    //         };
    //         fetchUserData();
    //     }
    // }, [token, user.name, fetchUser]);

    // useEffect(() => {
    //     // Sync localUser with user whenever user changes
    //     if (user.name) {
    //         setLocalUser(user);
    //         console.log('local user is synced');
    //     }
    // }, [user]); // This will run whenever user changes

    
    useEffect(()=>{
        const fetchtoDash = async ()=>{
            let user = await fetchUser();
            setLocalUser(user);
        }
        fetchtoDash();
        // eslint-disable-next-line
        // setLocalUser(user);
    },[user, token])
    


    const renderElement = () => {
        if (location.pathname === path.createNote) return components.createNote
        if (location.pathname === path.yournotes) return components.yournotes
        if (location.pathname === path.default) return components.default
    }

    const handleClick = () => {
        navigate('/dashboard')
    }

    const logout = ()=>{
        localStorage.removeItem('token');
        setToken(()=>{
            return localStorage.getItem('token')
        })
        setLogin(false);
        console.log('logging out')
        if(!localStorage.getItem('token')) navigate('/login');
    }

    // const navigateToHome =()=>{
    //     navigate('/')
    // }<i className="fa-solid fa-left-long me-3" onClick={navigateToHome}></i>

    return (
        <>
            <div className="mx-1 bg-primary mt-1 rounded min-h-100 p-2 text-white d-flex flex-row align-items-center justify-content-between px-3">
                <h2 className="m-0 px-3">Welcome, {localUser.name} </h2>
                <div className="p-1  d-flex flex-row align-items-center me-3 ">
                    <div name="profilePic " style={{ minHeight: "50px", minWidth: "50px" }} className=" rounded-circle bg-dark">
                        <img src="/images/logo192.png" alt="img" style={{ maxHeight: "50px", maxWidth: "50px" }} className='bg-contain' />
                    </div>
                    <div name="info" className="ms-1">
                        <div name="name" className=' m-0  p-0 fw-bold' style={{ fontSize: "17px" }}>{localUser.name}</div>
                        <div name="email" className=' m-0 p-0 rounded bg-secondary px-1 mt-1' style={{ fontSize: "10px" }}>{localUser.email}</div>
                    </div>
                    <div name="dropdown-icon" className='p-0 m-0 h-full w-full fs-5 '>
                        <i className="fa-solid fa-angle-down" onClick={logout}></i>
                    </div>
                </div>
            </div>
            <div id="dash-body" className='d-flex flex-row justify-content-start p-1 m-0'>
                <div id='side-nav' className=" p-1 rounded" style={{ minWidth: "300px", minHeight: "70vh" }}>
                    <div id="navigation" className='w-100'>
                        <i className="fa-solid fa-arrow-left fs-6" onClick={handleClick}></i>
                    </div>
                    <Link to="/dashboard/createnote" id='create-note' style={{ minWidth: "300px", minHeight: "40px", display: "block" }} className={`border-end border-2 border-bottom ${location.pathname === path.createNote ? 'text-primary border-primary border' : 'bg-primary text-white'} border-primary text-center m-0 text-decoration-none  fs-4  my-1 rounded`}>Create Note</Link>
                    <Link to="/dashboard/yournotes" id='list-notes' style={{ minWidth: "300px", minHeight: "40px", display: "block" }} className={`text-center m-0 fs-4  my-1 rounded ${location.pathname === path.yournotes ? 'text-primary border-primary border' : 'bg-primary text-white'}  text-decoration-none border-2 border-end border-bottom`}>Your Notes</Link>
                </div>
                <div id='content-body' className='d-flex flex-wrap flex-row justify-content-center ms-2 align-items-center rounded' style={{ width: "80%" }}>
                    {renderElement()}
                </div>
            </div>
        </>
    )
}

export default Dashboard;