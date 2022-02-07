import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { registrationFetchAC } from '../../redux/actionCreatorsAsync/userACAsync'
import './registration.css'

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

  const [isNotEqual, setIsNotEqual] = useState(false)

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitRegistrationHandler = (event) => {
    event.preventDefault()
    if(passwordRef.current.value === confirmPasswordRef.current.value) {
      const payload = {
        username: loginRef.current.value,
        name: nameRef.current.value,
        lastName: surnameRef.current.value,
        city: cityRef.current.value,
        email: emailRef.current.value,
        phoneNumber: telRef.current.value,
        password: passwordRef.current.value,
        foto: fotoRef.current.value
      }
      dispatch(registrationFetchAC(payload))
      navigate('/login')
    }
    else {
      setIsNotEqual(true)
    }

    
  }
  return (
    <div>
      <form onSubmit={submitRegistrationHandler} encType="multipart/form-data" className='form' >

        <label>Логин <input type="text" ref={loginRef} required/></label>
        <label>Имя <input type="text" ref={nameRef} required/></label>
        <label>Фамилия <input type="text" ref={surnameRef} /></label>
        <label>Город
        <select ref={cityRef} required >
          <option></option>
          <option value="Санкт-Петербург">Санкт-Петербург</option>
          <option value="Москва">Москва</option>
        </select>
        </label>
        <label>email <input type="email" required ref={emailRef} /></label>
        <label>Номер телефона<input type="phone" ref={telRef}/></label>
        <label>Пароль <input type="password" minLength="7" required ref={passwordRef}/></label>
        <label>Подтвердить пароль <input type="password" minLength="7" required ref={confirmPasswordRef}/></label>
        { isNotEqual && <div style={{color:'red', border:'solid', width:'200px'}}>Пароли не совпадают</div>}
        <label>Фото<input type="file" name="avatar" ref={fotoRef}/></label>
        <button className='btn btnStyle' >Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default Registration;
