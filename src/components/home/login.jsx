import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userContext from '../../contexts/userContext';

function Login() {

    let { login } = useContext(userContext);
    let navigate = useNavigate();

    let [user, setUser] = useState({
        email: "",
        password: ''
    })

    const change = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const clickLogin = async (e) => {
        e.preventDefault()
        let result = await login(user)
        if (result.success) {
            navigate('/dashboard')
        }
    }

    return (

        <div className="card shadow-lg p-4 rounded-3" style={{ width: '100%', maxWidth: '400px' }}>
            <h2 className="text-center mb-4">Login</h2>

            <form action="/login" method="POST">
                {/* <!-- Email --> */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold" >Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" name="email" onChange={change} required />
                </div>

                {/* <!-- Password --> */}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-semibold" >Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" name="password" onChange={change} required />
                </div>

                {/* <!-- Submit Button --> */}
                <button type="submit" className="btn btn-primary w-100 mt-3" onClick={clickLogin}>Login</button>
            </form>

            {/* <!-- Extra Links --> */}
            <div className="text-center mt-3">
                <Link to="/" className="text-decoration-none">Forgot password?</Link>
                <p className="mt-2 mb-0">Don't have an account? <Link to="/register" className="text-primary text-decoration-none">Sign Up</Link></p>
            </div>
        </div>

    )
}

export default Login;