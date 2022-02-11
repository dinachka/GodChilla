import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editEventFetchAC } from '../../redux/actionCreatorsAsync/eventsACAsync'

function EditForm({ event, switcher }) {
  const state = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const titleInput = useRef();
  const descriptionInput = useRef();
  const locationInput = useRef();
  const dateInput = useRef();
  const photoInput = useRef();
  const categoryInput = useRef();
  const privateInput = useRef();
  const eventID = event.id;

  const editHandle = event => {
    event.preventDefault();

    const editedEvent = {
      eventID: eventID,
      userID: state.user.id,
      title: titleInput.current.value,
      description: descriptionInput.current.value,
      location: locationInput.current.value,
      dateTime: dateInput.current.value.toLocaleString('ru'),
      categoryID: +categoryInput.current.value,
      privateSettings: privateInput.current.value,
      photo: photoInput.current.value,
    };

    dispatch(editEventFetchAC(editedEvent));
    switcher()
  };

  return (
    <form onSubmit={editHandle}>

      <input
        ref={titleInput}
        type="text"
        defaultValue={event.title}
        required
        placeholder='Название'
      />

      <input
        ref={descriptionInput}
        type="text"
        defaultValue={event.description}
        required
        placeholder='Описание'
      />

      <div>
        <p>Категория</p>
        <select ref={categoryInput} required v-model="selected">
          <option></option>
          <option value="1">посиделки</option>
          <option value="2">отдых на природе</option>
          <option value="3">культура, зрелищные мероприятия</option>
          <option value="4">прогулка/поездка</option>
          <option value="5">активный отдых, спорт</option>
          <option value="6">творчество</option>
          <option value="7">кафе, бар, ресторан</option>
        </select>
      </div>
      <div>
        <p>Статус события</p>
        <select ref={privateInput} defaultValue={event.privateSettings}>
          <option></option>
          <option value="public">Публичный</option>
          <option value="forFriends">Для друзей</option>
          <option value="private">Личный</option>
        </select>
      </div>
      <input ref={locationInput} type="text" defaultValue={event.location} placeholder='Место проведения' />

      <input ref={dateInput} type="date" defaultValue={event.dateTime} placeholder='Дата проведения' />

      <div>
        <p>Фото</p>
        <input
          ref={photoInput}
          type="file"
          name="photo"
          defaultValue={event.photo}
        />
      </div>

      <button className='uk-button uk-button-default'>Сохранить</button>
    </form>
  );
}

export default EditForm;
