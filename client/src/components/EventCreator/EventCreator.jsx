import React from 'react'
import './eventCreator.css'

function EventCreator() {
  return (
      <form action="/event" method="post" encType="multipart/form-data">
        <label className='eventCreatorForm'>Название 
          <input className='eventCreatorForm' type="text" required/>
        </label>

        <br />
        <label className='eventCreatorForm'>Описание 
          <input className='eventCreatorForm' type="text" required/>
        </label>

        <br />
        <label className='eventCreatorForm'>Место проведения 
          <input className='eventCreatorForm' type="text"/>
        </label>

        <br />
        <label className='eventCreatorForm'>Дата проведения 
          <input className='eventCreatorForm' type="date"/>
        </label>

        <br />
        <label className='eventCreatorForm'>Фото
          <input className='eventCreatorForm' type="file" name="photo" />
        </label>
        
        <br />
        <button className='eventCreatorForm'>Создать событие</button>
      </form>
  )
}

export default EventCreator
