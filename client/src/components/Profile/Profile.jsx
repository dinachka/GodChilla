
   
import React from 'react'
import { useState } from 'react';
import './profile.css'

function Profile() {

  const [switcher, setSwitcher] = useState(true)

  const stateSwitcher = () => {
    setSwitcher(!switcher)
  }

  const profile = {
    name: 'Elbrus',
    lastname: 'Elbrusov',
    photo: 'https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/319/179/6.jpg',
  };

  return (
    <div>
      <div className='profileContainer'>
        <div id='mainPhoto'>
          <img src={profile.photo} alt="" />
        </div>
        <div>
          {profile.name}
          <br />
          {profile.lastname}
        </div>
      </div>
      <div>
        <button>Добавить событие</button>
        <button>Удалить событие</button>
      </div>
      <div className='bottomLine'></div>
      <div className='friendsContainer'>
        Друзья
        <input placeholder='Найти друзей' type='text'></input>
        <span className="lupa"></span>

      </div>
      <div className='bottomLine'></div>
      <div onClick={stateSwitcher} >
        {switcher ? 'Calendar' : 'Lenta'}
      </div>
    </div>
  )
}

export default Profile
