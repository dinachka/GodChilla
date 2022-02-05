import React from 'react';
import './login.css'

function Login(props) {
  return (
      <form action="/login" method="post" className='form'>
        <label>email <input type="email" required/></label>
        <label>Пароль <input type="password" required/></label>
        <button className='btn btnStyle' >Войти</button>
      </form>
  );
}

export default Login;
