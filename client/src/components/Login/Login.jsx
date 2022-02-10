import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginFetchAC } from '../../redux/actionCreatorsAsync/userACAsync'
import './login.css'


function Login(props) {
  const dispatch = useDispatch()

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const { user } = useSelector(state => state.userReducer)
  
  const submitLoginHandler = (event) => {
    event.preventDefault()
      const payload = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }
      dispatch(loginFetchAC(payload))
      // navigate('/')   
  }

  useEffect(() => {
    if(user?.isUser) {
      navigate('/profile') 
    } 
  }, [user, navigate])

  return (

      <form onSubmit={submitLoginHandler} className='form' >
        <input type="email"  placeholder='email' ref={emailRef} required/>
        <input type="password" placeholder='Пароль' autoComplete="off" ref={passwordRef} required/>
        { !user?.isUser && user?.message !== ('Сессия не найдена' || "Регистрация прошла успешно!") &&  <div style={{color:'red', width:'147px', margin:'auto'}}>{user?.message}</div>}
        <button className='btn_login btnStyle' >Войти</button>
      </form>
  );
}

export default Login;
