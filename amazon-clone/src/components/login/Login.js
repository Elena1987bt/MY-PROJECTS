import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

import './Login.css';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        // Signed in
        if (res) {
          history.push('/');
        }
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        if (res) {
          history.push('/');
        }
        // ...
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/small/amazon_PNG13.png"
          alt=""
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="login_signInButton" type="submit" onClick={signIn}>
            Sign In
          </button>
          <p>By continuing, you agree to Amazon Fake Clone Conditions of Use and Privacy Notice.</p>
          <button className="login__registerButton" type="submit" onClick={register}>
            Create your Amazon account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
