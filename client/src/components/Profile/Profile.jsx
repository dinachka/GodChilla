import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { initUserslistFetchAC } from '../../redux/actionCreatorsAsync/userACAsync';

import EventsList from '../EventsList/EventsList'
import FriendList from '../FriendList/FriendList';
import EventCreator from '../EventCreator/EventCreator';
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
  // Логика отображения создания событий
  const [eventCreatorVisible, setEventCreatorVisible] = useState(false)
  const eventCreatorVisibleSwitcher = () => {
    setEventCreatorVisible(!eventCreatorVisible)
  }
 const { user } = useSelector(state => state.userReducer)
 const dispatch = useDispatch()
 const { users } = useSelector(state => state.userListReducer)
 console.log(users, 'все юзеры');
//  const { id } = useParams()

  // Временный юзер(УДАЛИТЬ!!!!)
  const profile = {
    id: user.id,
    name: user.name,
    lastName: user.lastName
  };

  console.log(profile);



  const changingHandler = () => {
    // dispatch(initUserslistFetchAC())
  }

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
         <div onClick={eventCreatorVisibleSwitcher} className='display' >Создать</div>
      </div>
      {eventCreatorVisible && <EventCreator />}

      <div className='bottomLine'></div>
      <div className='friendsContainer'>
        <div onClick={friendsVisibleSwitcher} className='stateSwitcher display' >Мои друзья </div>
        <input placeholder='Найти друзей' type='search' onChange={changingHandler}></input>
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
