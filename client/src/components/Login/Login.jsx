import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginFetchAC } from '../../redux/actionCreatorsAsync/userACAsync'
import './login.css'

function Login(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const { user } = useSelector(state => state.userReducer)
  
  const dispatch = useDispatch();
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
        <label>email <input type="email" ref={emailRef} required/></label>
        <label>Пароль <input type="password" autoComplete="off" ref={passwordRef} required/></label>
        { !user?.isUser && user?.message !== ('Сессия не найдена' || "Регистрация прошла успешно!") &&  <div style={{color:'red', width:'147px', margin:'auto'}}>{user?.message}</div>}
        <button className='btn btnStyle' >Войти</button>
      </form>
  );
}

export default Login;
