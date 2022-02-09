import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FETCH_POST_EVENT } from '../../redux/actionTypes/eventAT'

import './eventCreator.css'

function EventCreator() {

  const titleInput = useRef()
  const descriptionInput = useRef()
  const locationInput = useRef()
  const dateInput = useRef()
  const photoInput = useRef()
  const categoryInput = useRef()
  const privateInput = useRef()
  const state = useSelector(state => state.userReducer)

  const navigate = useNavigate()
  const dispatch = useDispatch()


  const eventHandler = (event) => {
    event.preventDefault()

    const newEvent = {
      userID: state.user.id,
      categoryID: +categoryInput.current.value,
      title: titleInput.current.value,
      description: descriptionInput.current.value,
      privateSettings: privateInput.current.value,
      location: locationInput.current.value,
      dateTime: dateInput.current.value,
      photo: photoInput.current.value,
    }

    dispatch({
      type: FETCH_POST_EVENT,
      payload: newEvent
    })

    navigate('/events')
  }



  return (
    <form type='submit' onSubmit={eventHandler} action="/event" method="post" encType="multipart/form-data">
      <label className='eventCreatorForm'>Название
        <input ref={titleInput} className='eventCreatorForm' type="text" required />
      </label>

      <br />
      <label className='eventCreatorForm'>Описание
        <input ref={descriptionInput} className='eventCreatorForm' type="text" required />
      </label>

      <br />
      <label className='eventCreatorForm'>Категория
        <select ref={categoryInput} required >
          <option></option>
          <option value="1">посиделки</option>
          <option value="2">отдых на природе</option>
          <option value="3">культура, зрелищные мероприятия</option>
          <option value="4">прогулка/поездка</option>
          <option value="5">активный отдых, спорт</option>
          <option value="6">творчество</option>
          <option value="7">кафе, бар, ресторан</option>
        </select>
      </label>

      <br />
      <label className='eventCreatorForm'>Статус события
        <select ref={privateInput} required >
          <option></option>
          <option value="public">Публичный</option>
          <option value="forFriends">Для друзей</option>
          <option value="private">Личный</option>
        </select>
      </label>

      <br />
      <label className='eventCreatorForm'>Место проведения
        <input ref={locationInput} className='eventCreatorForm' type="text" />
      </label>

      <br />
      <label className='eventCreatorForm'>Дата проведения
        <input ref={dateInput} className='eventCreatorForm' type="date" />
      </label>

      <br />
      <label className='eventCreatorForm'>Фото
        <img src="https://image.freepik.com/free-vector/the-word-hello-on-a-speech-bubble-vector_53876-60258.jpg" alt="" />
        <input ref={photoInput} className='eventCreatorForm' type="file" name="photo" />
      </label>

      <br />
      <button className='eventCreatorForm'>Создать событие</button>
    </form>
  )
}

export default EventCreator
