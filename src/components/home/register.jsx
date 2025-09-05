import {Link} from 'react-router-dom';

function Register() {
    return (

        <div className="card shadow-lg p-4 rounded-3" style={{width : '100%', maxWidth : '400px'}}>
            <h2 className="text-center mb-4">Registration</h2>

            <form action="/createuser" method="POST">

                <div classNameName="mb-3">
                    <label for="name" className="form-label fw-semibold" name="name">Full Name</label>
                    <input type="text" className="form-control" id="email" name="name" placeholder="Enter full name" required />
                </div>

                {/* <!-- Email --> */}
                <div classNameName="mb-3">
                    <label for="email" className="form-label fw-semibold" >Email address</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
                </div>

                {/* <!-- Password --> */}
                <div classNameName="mb-3">
                    <label for="password" className="form-label fw-semibold" >Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" required />
                </div>

                {/* <!-- Submit Button --> */}
                <button type="submit" className="btn btn-primary w-100 mt-3">Register</button>
            </form>

            {/* <!-- Extra Links --> */}
            <div className="text-center mt-3">
                <p className="mt-2 mb-0">Have an account? <Link to="/login" className="text-primary text-decoration-none">Sign in</Link></p>
            </div>
        </div>

    )
}

export default Register;