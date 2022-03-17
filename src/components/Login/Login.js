import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppContainer from "../../hoc/AppContainer";
import { loginAttemptAction } from "../../store/actions/loginActions";
import { Link, Navigate } from 'react-router-dom'

const Login = () => {

  const dispatch = useDispatch()
  const { loginError, LoginAttempting } = useSelector(state => state.loginReducer)
  const { loggedIn } = useSelector(state => state.sessionReducer)

  const [credentials, setCredentials] = useState({
    //This is default object or state, same thing
    username: "",
    password: "",
  });

  const onInputChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.id]: event.target.value,
    });
  };

  const onFormSubmit = event => {
    event.preventDefault() //Will prevent the app to restart when users submits (stops page reload)
    dispatch(loginAttemptAction(credentials))
  }

  return (
    <>
      {/*If user is logged in, redirect to timeline*/}
      {loggedIn && <Navigate to="/timeline" />}
      {/*If user is not logged in, display login page*/}
      {!loggedIn &&
        <AppContainer>
          <form className="mt-3 mb-3" onSubmit={onFormSubmit}>
            <h1>Login to TXT Forum</h1>
            <p>Welcome to the forum where text is king! 👑</p>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="form-control"
                onChange={onInputChange}
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Username
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="form-control"
                onChange={onInputChange}
              ></input>
            </div>

            <button type="submit" className="btn btn-primary btn-lg">
              Login
            </button>
          </form>

          {LoginAttempting &&
            <p>Trying to login...</p>
          }

          {loginError &&
            <div className="alert alert-danger" role="alert">
              <h4>Unsuccessful</h4>
              <p className="mb-0">{loginError}</p>
            </div>
          }

          <p className="mb-3">
            <Link to="/register">No account? Register here!</Link>
          </p>


        </AppContainer>
      }
    </>
  );
};

export default Login;
