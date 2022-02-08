import React from 'react'
import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initUserslistFetchAC } from '../../redux/actionCreatorsAsync/userACAsync';

import CurrentUsersEvents from '../CurrentUsersEvents/CurrentUsersEvents'
import FriendList from '../FriendList/FriendList';
import EventCreator from '../EventCreator/EventCreator';
import './profile.css'
import UserListModal from '../UserListModal/UserListModal';
import Calendar from '../CalendarComponent/CalendarComponent';
import Calendar2 from '../CalendarComponent/CalendarComponent';

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
  const searchInput = useRef()


  const changingHandler = (event) => {
    event.preventDefault()
    dispatch(initUserslistFetchAC(searchInput.current.value))
  }

  return (
    <div>
      <div className='profileContainer'>
        <div id='mainPhoto'>
          <img src={user.photo} alt="" />
        </div>
        <div>
          {user.name}
          <br />
          {user.message}
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

        <input placeholder='Найти друзей' type='search' ref={searchInput}></input><button onClick={changingHandler} >искать</button>
      </div>
      <div>
        {friendsVisible && <FriendList />}
      </div>
      {users.users?.length && <UserListModal users={users.users} />}

      <div className='bottomLine'></div>
      <div >
        <div className='stateSwitcher'>
          {calendarSwitcher ? <div onClick={calendarSwitch} className='display'>Лента</div> : <div onClick={calendarSwitch} className='display'>Календарь</div>}
        </div >
        <div >{calendarSwitcher ? <Calendar2 /> : <CurrentUsersEvents />}</div>
      </div>
    </div>
  )
}

export default Profile
