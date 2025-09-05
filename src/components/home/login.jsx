import {Link} from 'react-router-dom';

function Login() {
    return (

        <div className="card shadow-lg p-4 rounded-3" style={{width : '100%', maxWidth : '400px'}}>
            <h2 className="text-center mb-4">Login</h2>

            <form action="/login" method="POST">
                {/* <!-- Email --> */}
                <div classNameName="mb-3">
                    <label for="email" className="form-label fw-semibold" >Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" name="email" required />
                </div>

                {/* <!-- Password --> */}
                <div classNameName="mb-3">
                    <label for="password" className="form-label fw-semibold" >Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" name="password" required />
                </div>

                {/* <!-- Submit Button --> */}
                <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
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