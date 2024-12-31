import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials
        const response = await fetch('http://localhost:5000/api/auth/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
        const json = await response.json()
        console.log("this is our response", json);
        if (json) {
            localStorage.setItem('token', json.authToken)
            navigate('/login');
            props.showAlert('account created', 'success')
        }
        else {
            props.showAlert('Invalid credential', 'danger')
        }
    }

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='container my-5'>
            <div className='row'>
                <div className='col-md-6'>

                </div>
                <div className='col-md-6'>
                    <h2 className='login-title'>Register to continue our first project</h2>
                    <form onSubmit={handleSubmit}>

                        <div className="mb-3 signup-form">
                            <i className='fa fa-user'></i>
                            <input type="name" className="form-control login-form" onChange={handleChange} value={credentials.name} name='name' id="name" aria-describedby="emailHelp" placeholder='Name' />
                        </div>

                        <div className="mb-3 signup-form">
                            <i className='fa fa-envelope'></i>
                            <input type="email" className="form-control login-form" onChange={handleChange} value={credentials.email} name='email' id="email" aria-describedby="emailHelp" placeholder='Email' />
                        </div>

                        <div className="mb-3 signup-form" >
                            <i className='fa fa-key'></i>
                            <input type="password" className="form-control login-form" onChange={handleChange} value={credentials.password} name='password' id="password" minLength={5} required placeholder='Password' />
                        </div>

                        <div className="mb-3 signup-form" >
                            <i className='fa fa-key'></i>
                            <input type="password" className="form-control login-form" onChange={handleChange} value={credentials.cpassword} name='cpassword' id="cpassword" minLength={5} required placeholder='Confirm Password' />
                        </div>

                        <button type="submit" className="login-button">Submit</button>
                        <p>Already have an account ?<Link to='/login'>Login</Link></p>

                    </form>
                </div>
            </div>
            <br />

        </div>
    )
}

export default Signup
