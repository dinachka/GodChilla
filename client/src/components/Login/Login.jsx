import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginFetchAC } from '../../redux/actionCreatorsAsync/userACAsync'
import './login.css'

function Login(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const submitLoginHandler = (event) => {
    event.preventDefault()
      const payload = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }
      dispatch(loginFetchAC(payload))
      navigate('/')   
  }
  return (

      <form onSubmit={submitLoginHandler} className='form' >
        <input type="email"  placeholder='email' ref={emailRef} required/>
        <input type="password" placeholder='Пароль' autoComplete="off" ref={passwordRef} required/>
        <button className='btn_login btnStyle' >Войти</button>
      </form>
  );
}

export default Login;
