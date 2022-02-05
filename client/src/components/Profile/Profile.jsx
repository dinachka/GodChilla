import React from 'react'
import { useState } from 'react';
import EventsList from '../EventsList/EventsList'
import FriendList from '../FriendList/FriendList';
import './profile.css'


function Profile() {

  // Логика переключения календаря и ленты-событий
  const [calendarSwitcher, setCalendarSwitcher] = useState(true)
  const calendarSwitch = () => {
    setCalendarSwitcher(!calendarSwitcher)
  }
  // Логика отображения списка друзей
  const [friendsVisible, setFriendsVisible] = useState(false)
  const friendsVisibleSwitcher = () => {
    setFriendsVisible(!friendsVisible)
  }

  // Временный юзер(УДАЛИТЬ!!!!)
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
      <div className='createEventBtn' >
        <div className='display' >Создать</div>
      </div>

      <div className='bottomLine'></div>
      <div className='friendsContainer'>
        <div onClick={friendsVisibleSwitcher} className='stateSwitcher display' >Мои друзья </div>
        <input placeholder='Найти друзей' type='text'></input>
      </div>
      <div>
        {friendsVisible && <FriendList />}
      </div>
      <div className='bottomLine'></div>
      <div onClick={calendarSwitch} >
        <div className='stateSwitcher'>
        {calendarSwitcher ? <div className='display'>Лента</div> : <div className='display'>Календарь</div>}
        </div>
        {calendarSwitcher ? 'Здесь будет красивый календарь' : <EventsList />}
      </div>
    </div>
  )
}

export default Profile
