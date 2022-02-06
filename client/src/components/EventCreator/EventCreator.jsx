import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './eventCreator.css'

function EventCreator() {

  // const { id } = useParams()
  const nameInput = useRef()
  const descriptionInput = useRef()
  const placeInput = useRef()
  const dateInput = useRef()
  const photoInput = useRef()
  const id = useSelector(state => state.userReducer)

  const navigate = useNavigate()

  const eventHandler = (event) => {
    event.preventDefault()

    console.log(id, nameInput.current.value, descriptionInput.current.value, placeInput.current.value, dateInput.current.value, photoInput.current.value);

    const newEvent = {
      userID: id
    }

    // navigate('/profile')id
  }

  return (
      <form type='submit' onSubmit={eventHandler} action="/event" method="post" encType="multipart/form-data">
        <label className='eventCreatorForm'>Название 
          <input ref={nameInput} className='eventCreatorForm' type="text" required/>
        </label>

        <br />
        <label className='eventCreatorForm'>Описание 
          <input ref={descriptionInput} className='eventCreatorForm' type="text" required/>
        </label>

        <br />
        <label className='eventCreatorForm'>Место проведения 
          <input ref={placeInput} className='eventCreatorForm' type="text"/>
        </label>

        <br />
        <label className='eventCreatorForm'>Дата проведения 
          <input ref={dateInput} className='eventCreatorForm' type="date"/>
        </label>

        <br />
        <label className='eventCreatorForm'>Фото
          <input ref={photoInput} className='eventCreatorForm' type="file" name="photo" />
        </label>
        
        <br />
        <button className='eventCreatorForm'>Создать событие</button>
      </form>
  )
}

export default EventCreator
