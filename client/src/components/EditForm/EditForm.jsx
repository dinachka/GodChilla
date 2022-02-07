import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_EDIT_EVENT } from '../../redux/actionTypes/eventAT';
import { useNavigate } from 'react-router-dom';
import { editEventFetchAC } from '../../redux/actionCreatorsAsync/eventsACAsync'

function EditForm({ event }) {
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

  const editHandle = event => {
    event.preventDefault();

    const editedEvent = {
      userID: state.user.id,
      title: titleInput.current.value,
      description: descriptionInput.current.value,
      location: locationInput.current.value,
      dateTime: dateInput.current.value,
      categoryID: +categoryInput.current.value,
      privateSettings: privateInput.current.value,
      photo: photoInput.current.value,
    };

    // console.log(editedEvent);

    dispatch(editEventFetchAC(editedEvent));

    // navigate('/events')
  };

  return (
    <form onSubmit={editHandle}>
      <label>
        Название
        <input
          ref={titleInput}
          type="text"
          defaultValue={event.title}
          required
        />
      </label>

      <label>
        Описание
        <input
          ref={descriptionInput}
          type="text"
          defaultValue={event.description}
          required
        />
      </label>

      <label>
        Категория
        <select ref={categoryInput} required>
          <option></option>
          <option value="1">Музыка</option>
          <option value="2">Природа</option>
          <option value="3">Культура</option>
          <option value="4">Релакс</option>
          <option value="5">Вечеринки</option>
          <option value="6">Активный отдых</option>
        </select>
      </label>

      <label>
        Статус события
        <select ref={privateInput} required>
          <option></option>
          <option value="public">Публичный</option>
          <option value="forFriends">Для друзей</option>
          <option value="private">Личный</option>
        </select>
      </label>

      <label>
        Место проведения
        <input ref={locationInput} type="text" defaultValue={event.location} />
      </label>

      <label>
        Дата проведения
        <input ref={dateInput} type="date" defaultValue={event.dateTime} />
      </label>

      <label>
        Фото
        <input
          ref={photoInput}
          type="file"
          name="photo"
          defaultValue={event.photo}
        />
      </label>

      <button>Сохранить</button>
    </form>
  );
}

export default EditForm;