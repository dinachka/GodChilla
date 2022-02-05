import React from 'react';

function Login(props) {
  return (
      <form action="/login" method="post">
        <label>email <input type="email" required/></label>
        <label>Пароль <input type="password" required/></label>
        <button>Войти</button>
      </form>
  );
}

export default Login;
