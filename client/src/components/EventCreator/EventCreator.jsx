import React, { useRef, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_POST_EVENT } from '../../redux/actionTypes/eventAT'

import './eventCreator.css'

function EventCreator({ setSwitcher }) {

  const titleInput = useRef()
  const descriptionInput = useRef()
  const locationInput = useRef()
  const dateInput = useRef()
  // const photoInput = useRef()
  const categoryInput = useRef()
  const privateInput = useRef()
  const state = useSelector(state => state.userReducer)

  const dispatch = useDispatch()

  // const defaultImg = 'https://www.buro247.ua/thumb/670x830_0/images/2020/06/alabama-coronavirus-parties-01.jpg'
  let newEventPhoto;
  const setImgHandler = async () => { newEventPhoto = await sendImageToServer() }

  const eventHandler = async (event) => {
    event.preventDefault()
    //  тут должна срабоать функция sendImageToServer()
    // и должна быть функция асинхронной
    // const newEventPhoto = await sendImageToServer()
    const seedPhoto = newEventPhoto || null
    console.log(seedPhoto);
    const newEvent = {
      userID: state.user.id,
      categoryID: +categoryInput.current.value,
      title: titleInput.current.value,
      description: descriptionInput.current.value,
      privateSettings: privateInput.current.value,
      location: locationInput.current.value,
      dateTime: dateInput.current.value,
      photo: seedPhoto 
      // || defaultImg,
    }

    dispatch({
      type: FETCH_POST_EVENT,
      payload: newEvent
    })

    setSwitcher()
  }



  // сохранение картинок 
  const { user } = useSelector(state => state.userReducer)
  const userId = user.id
  const [eventImg, setEventImg] = useState(null)

  const sendImageToServer = useCallback(async () => {

    // const sendImageToServerURL = 'http://localhost:4000/api/profile/uploadEventImage/'
    const sendImageToServerURL = process.env.REACT_APP_SAVE_EVENT_IMAGE_EVENT_CREATOR
    const data = new FormData()
    data.append('eventImage', eventImg)
    const options = {
      method: 'POST',
      body: data,
    }

    const result = await fetch(sendImageToServerURL, options)
    const response = await result.json()
    setEventImg(response)
    // .then(res => res.json())
    // .then(imgPath => setEventImg(imgPath))
    return response
  }, [eventImg])


  return (
    <form type='submit' onSubmit={eventHandler} action="/event" method="post" encType="multipart/form-data"  className='event_create_form uk-animation-slide-bottom event_creator_box' >

      <input ref={titleInput} placeholder="Название" type="text" required />
      <input ref={descriptionInput} placeholder='Описание' type="text" required />
      <div className='eventCreatorForm'>Категория&nbsp;
        <select ref={categoryInput} required >
          <option value="1">посиделки</option>
          <option value="2">отдых на природе</option>
          <option value="3">культура, зрелищные мероприятия</option>
          <option value="4">прогулка/поездка</option>
          <option value="5">активный отдых, спорт</option>
          <option value="6">творчество</option>
          <option value="7">кафе, бар, ресторан</option>
        </select>
      </div>

      <label className='eventCreatorForm'>Статус события&nbsp;
        <select ref={privateInput} required >
          <option value="public">Публичный</option>
          <option value="forFriends">Для друзей</option>
          <option value="private">Личный</option>
        </select>
      </label>

      <input ref={locationInput} placeholder='Место проведения' type="text" required/>

      <input ref={dateInput} placeholder='Дата проведения' type="date" required/>

      <div className="js-upload " uk-form-custom='true'>
        <input type="file" multiple onChange={e => setEventImg(e.target.files[0])} />

        <button onClick={setImgHandler} className="uk-button uk-button-default load_btn" tabIndex="-1">Загрузить фото</button>
      </div>
      <br />
      <button className='uk-button uk-button-default create_btn'>Создать событие</button>
    </form>
  )
}

export default EventCreator
