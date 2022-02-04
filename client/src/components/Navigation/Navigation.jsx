import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/registration">Регистрация</Link></li>
        <li><Link to="/login">Авторизация</Link></li>
        <li><Link to="/events">События</Link></li>
        <li><Link to="/profile">Профиль</Link></li>
    </ul>
    </nav>
  )
}

export default Navigation
