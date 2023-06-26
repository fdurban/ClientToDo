import React, { useContext, useState } from 'react'
import authService from './../../services/auth.services'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context/auth.context"
import './LogInForm.css'

const LogInForm = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const { setUser } = useContext(AuthContext)

    const { authenticateUser, storeToken } = useContext(AuthContext)

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                navigate(`/profile/user/${data.user_id}`)
            })
            .catch(err => console.log(err))
    }

    const { password, email } = loginData

    return (
        <div className='page'>
            <div className='cover'>
                <h1>Login</h1>
                <input type="email" placeholder='email' value={email} onChange={handleInputChange} name="email" />
                <input type="password" placeholder='password' value={password} onChange={handleInputChange} name="password" />
                <div className='login-btn' type="submit" onClick={handleSubmit}>LogIn</div>
                <h5 className='text'>Or login using</h5>
                <div className='alt-login'>
                    <div className='google'></div>
                    <div className='github'></div>
                </div>
                {/* <div className='popupstyle'>
                    <h3>Log In failed</h3>
                    <p>Username or password incorrect</p>
                </div> */}
            </div>
        </div>
    )
}

export default LogInForm