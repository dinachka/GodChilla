import React, { useRef } from 'react';

function EditForm({ event }) {

  const titleInput = useRef()
  const descriptionInput = useRef()
  const locationInput = useRef()
  const dateInput = useRef()
  const photoInput = useRef()
  const categoryInput = useRef()
  const privateInput = useRef()
  const curEventId = event.id;

  const editHandle = event => {
    event.preventDefault();
    console.log('edit eventId:', curEventId);
  };

  return (
    <form type='submit' onSubmit={editHandle} action="/event" method="post" encType="multipart/form-data">
        <label className='eventCreatorForm'>Название 
          <input ref={titleInput} className='eventCreatorForm' type="text" required/>
        </label>

        <br />
        <label className='eventCreatorForm'>Описание 
          <input ref={descriptionInput} className='eventCreatorForm' type="text" required/>
        </label>

        <br />
        <label className='eventCreatorForm'>Категория
        <select ref={categoryInput} required >
          <option></option>
          <option value="1">Музыка</option>
          <option value="2">Природа</option>
          <option value="3">Культура</option>
          <option value="4">Релакс</option>
          <option value="5">Вечеринки</option>
          <option value="6">Активный отдых</option>
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
          <input ref={locationInput} className='eventCreatorForm' type="text"/>
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
        <button className='eventCreatorForm'>Сохранить</button>
      </form>
  );
}

export default EditForm;
