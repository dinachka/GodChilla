
   
import React from 'react'
import { useState } from 'react';
import './profile.css'

function Profile() {

  const [switcher, setSwitcher] = useState(true)

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
      <div className='bottomLine'></div>
      <div>
        Друзья
      </div>
      <div className='bottomLine'></div>
      <div>
        {switcher ? 'Calendar' : 'Lenta'}
      </div>
    </div>
  )
}

export default Profile
