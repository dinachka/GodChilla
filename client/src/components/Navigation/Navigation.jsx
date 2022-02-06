import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.css'
import { useDispatch, useSelector } from 'react-redux';
import { logoutFetchAC } from '../../redux/actionCreatorsAsync/userACAsync';
import { useNavigate } from 'react-router-dom';

function Navigation() {

  const session = useSelector(state => state.userReducer)

  const dispath = useDispatch();
  const navigate = useNavigate();
  
  const leaveSession = () => {
    dispath(logoutFetchAC())
    navigate('/')
    
  };

  return (
    <>
      {session.user.auth ? 
      <nav className='globalNav' >
        <ul>
          <li><Link to="/" className='Link' >Главная</Link></li>
          <li><Link to="/registration" className='Link' >Регистрация</Link></li>
          <li><Link to="/login" className='Link' >Авторизация</Link></li> 
          <li><Link to="/events" className='Link' >События</Link></li>
          <li><Link to="/profile" className='Link' >Профиль</Link></li>
          <li onClick={leaveSession} className='Link' >Выйти</li>
        </ul>
      </nav> 
      : 
      <nav className='globalNav' >
        <ul>
          <li><Link to="/" className='Link' >Главная</Link></li>
          <li><Link to="/registration" className='Link' >Регистрация</Link></li>
          <li><Link to="/login" className='Link' >Авторизация</Link></li> 
        </ul>
      </nav>}      
    </>
  )
}

export default Navigation
