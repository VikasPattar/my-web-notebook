import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <div className="mx-1 bg-primary my-2 rounded min-h-100 p-3 text-white d-flex flex-row align-items-end justify-content-between px-3">
            <h2 className="m-0 px-3">My Notebook</h2>
            <div className="pe-3 ">
                <Link to="/" className="text-decoration-none text-white fs-5 m-0 px-2">Home</Link>
                <Link to="/" className="text-decoration-none text-white fs-5 m-0 px-2">About</Link>
                <Link to="/" className="text-decoration-none text-white fs-5 m-0 px-2">Contact</Link>
                <Link to="/login" className="text-decoration-none text-white fs-5 m-0 px-2">Login/Register</Link>
            </div>
        </div>        
    )
}

export default Navbar;