import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userContext from '../../contexts/userContext';

function Register() {

    let {addUser} = useContext(userContext)
    let navigate = useNavigate()

    let [user, setUser] = useState({
        name : '',
        email : '',
        password : ''
    })

    const handleChange = (e) => {
        setUser({
            ...user, [e.target.name] : e.target.value
        })
    }

    const handleClick = (e)=>{
        e.preventDefault();
        addUser(user)
        navigate('/login')
    }

    return (

        <div className="card shadow-lg p-4 rounded-3" style={{ width: '100%', maxWidth: '400px' }}>
            <h2 className="text-center mb-4">Registration</h2>

            <form action="/createuser" method="POST">

                <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-semibold" name="name">Full Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={handleChange} placeholder="Enter full name" required />
                </div>

                {/* <!-- Email --> */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold" >Email address</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={handleChange} placeholder="Enter your email" required />
                </div>

                {/* <!-- Password --> */}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-semibold" >Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={handleChange} placeholder="Enter your password" required />
                </div>

                {/* <!-- Submit Button --> */}
                <button type="submit" className="btn btn-primary w-100 mt-3" onClick={handleClick}>Register</button>
            </form>

            {/* <!-- Extra Links --> */}
            <div className="text-center mt-3">
                <p className="mt-2 mb-0">Have an account? <Link to="/login" className="text-primary text-decoration-none">Sign in</Link></p>
            </div>
        </div>

    )
}

export default Register;