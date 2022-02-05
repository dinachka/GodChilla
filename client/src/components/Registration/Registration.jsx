import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { registrationFetchAC } from '../../redux/actionCreatorsAsync/userACAsync'
function Registration(props) {
  const loginRef = useRef();
  const nameRef = useRef();
  const surnameRef = useRef();
  const cityRef = useRef();
  const emailRef = useRef();
  const telRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const fotoRef = useRef();

  const dispatch = useDispatch();

  const summitRegistrationHandler = (event) => {
    event.preventDefault()
    const payload = {
      userName: loginRef.current.value,
      name: nameRef.current.value,
      lastName: surnameRef.current.value,
      city: cityRef.current.value,
      email: emailRef.current.value,
      phoneNumber: telRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
      foto: fotoRef.current.value
    }
    console.log(payload);
    // dispatch(registrationFetchAC(payload))
  }
  return (
    <div>
      <form onSubmit={summitRegistrationHandler} action="/profile" method="post" enctype="multipart/form-data">
        <label>Логин <input type="text" ref={loginRef} required/></label>
        <label>Имя <input type="text" ref={nameRef} required/></label>
        <label>Фамилия <input type="text" ref={surnameRef} /></label>
        <select ref={cityRef}>
          <option disabled>Выберите город</option>
          <option selected value="Санкт-Петербург">Санкт-Петербург</option>
          <option value="Москва">Москва</option>
        </select>
        <label>email <input type="email" required ref={emailRef} /></label>
        <label>Номер телефона<input type="phone" ref={telRef}/></label>
        <label>Пароль <input type="password" required ref={passwordRef}/></label>
        <label>Подтвердить пароль <input type="password" required ref={confirmPasswordRef}/></label>
        <label>Фото<input type="file" name="avatar" ref={fotoRef}/></label>
        <button>Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default Registration;
