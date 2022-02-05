import React from 'react';

function Registration(props) {
  return (
    <div>
      <form action="/profile" method="post" enctype="multipart/form-data">
        <label>Логин <input type="text" required/></label>
        <label>Имя <input type="text" required/></label>
        <label>Фамилия <input type="text"/></label>
        <label>email <input type="email" required/></label>
        <label>Номер телефона<input type="phone"/></label>
        <label>Пароль <input type="password" required/></label>
        <label>Подтвердить пароль <input type="password" required/></label>
        <label>Фото<input type="file" name="avatar" /></label>
        <button>Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default Registration;
