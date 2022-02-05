import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginFetchAC } from '../../redux/actionCreatorsAsync/userACAsync'

function Login(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  
  const dispatch = useDispatch();
  const submitLoginHandler = (event) => {
    event.preventDefault()
      const payload = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }
      dispatch(loginFetchAC(payload))
  }
  return (
      <form onSubmit={submitLoginHandler}>
        <label>email <input type="email" ref={emailRef} required/></label>
        <label>Пароль <input type="password" ref={passwordRef} required/></label>
        <button>Войти</button>
      </form>
  );
}

export default Login;
