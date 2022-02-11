import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { registrationFetchAC } from '../../redux/actionCreatorsAsync/userACAsync'
import './registration.css'

function Registration(props) {
  // const loginRef = useRef();
  const nameRef = useRef();
  const surnameRef = useRef();
  const cityRef = useRef();
  const emailRef = useRef();
  // const telRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  // const fotoRef = useRef();

  const [isNotEqual, setIsNotEqual] = useState(false)

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.userReducer)
  const submitRegistrationHandler = (event) => {
    event.preventDefault()
    setIsNotEqual(false)
    if(passwordRef.current.value === confirmPasswordRef.current.value) {
      const payload = {
        // username: loginRef.current.value,
        name: nameRef.current.value,
        lastName: surnameRef.current.value,
        city: cityRef.current.value,
        email: emailRef.current.value,
        // phoneNumber: telRef.current.value,
        password: passwordRef.current.value,
        // foto: fotoRef.current.value
      }
      dispatch(registrationFetchAC(payload))
    }
    else {
      setIsNotEqual(true)
    }   
  }

  useEffect(() => {
    if(user.user) {
      navigate('/login') 
    } 
  }, [user, navigate])

  return (
    <div>
      <form onSubmit={submitRegistrationHandler} encType="multipart/form-data" className='form_reg' >

        {/* <input type="text" placeholder='Логин' ref={loginRef} required/> */}
        <input type="text" placeholder='Имя' ref={nameRef} required/>
        <input type="text" placeholder='Фамилия' ref={surnameRef} />
          <label className='label_ref'>Выбор города</label>&nbsp;
          <select ref={cityRef} required >
          <option value="Санкт-Петербург">Санкт-Петербург</option>
          <option value="Москва">Москва</option>
        </select>
        <input type="email" placeholder='email' required ref={emailRef} />
        {/* <input type="phone"  placeholder='Номер телефона' ref={telRef}/> */}
        <input type="password" placeholder='Пароль' autoComplete="off" minLength="7" required ref={passwordRef}/>
        <input type="password" placeholder='Подтвердить пароль' autoComplete="off" minLength="7" required ref={confirmPasswordRef}/>
        { isNotEqual && <div className='reg_notification'>Пароли не совпадают</div>}

        {/* <label>Фото<input type="file" name="avatar" ref={fotoRef}/></label> */}
        { !user?.user && user?.message !== 'Сессия не найдена' &&  <div className='reg_notification'>{user?.message}</div>}
        <button className='btn btnStyle' >Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default Registration;
