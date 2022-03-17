import { useSelector } from 'react-redux'
import AppContainer from '../../hoc/AppContainer'
import { Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Avatars from '../Avatars/Avatars'
const Register = () => {
    const { loggedIn } = useSelector(state => state.sessionReducer)
    const [user, setUser] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        avatar: ''
    })

    const onRegisterSubmit = event => {
        event.preventDefault()
        console.log('Register.onRegisterSubmit()', user);
        // dispatch(registerAttemptAction(user))
    }

    const onInputChange = event => {
        setUser({
            ...user,
            [event.target.id]: event.target.value
        })
    }

    const handleAvatarChanged = avatar => {
        setUser({
            ...user,
            avatar: avatar.url
        })
    }

    return (
        <AppContainer>
            {loggedIn && <Navigate to="/timeline" />}
            <form className="mb-3" onSubmit={onRegisterSubmit}>
                <h1>Register for TXT Forum</h1>
                <p>Complete the form to create your account</p>

                <div className='mb-3'>
                    <label htmlFor='username' className='form-label'>Choose a username *</label>
                    <input onChange={onInputChange} type="text" id="username" className='form-control' placeholder='johndoe' />
                </div>

                <div className='mb-3'>
                    <label htmlFor='password' className='form-label'>Choose a password *</label>
                    <input onChange={onInputChange} type="password" id="password" className='form-control' placeholder='*******' />
                </div>

                <div className='mb-3'>
                    <label htmlFor='confirmPassword' className='form-label'>Confirm your password *</label>
                    <input onChange={onInputChange} type="password" id="confirmPassword" className='form-control' placeholder='*******' />
                </div>
                <Avatars changed={handleAvatarChanged} />
                <button className='btn btn-success btn.lg'>Register</button>

            </form>

            <Link to="/">Already register? Login here!</Link>
        </AppContainer>
    )
}
export default Register