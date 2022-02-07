import React from 'react'
import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { initUserslistFetchAC } from '../../redux/actionCreatorsAsync/userACAsync';

import CurrentUsersEvents from '../CurrentUsersEvents/CurrentUsersEvents'
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
 const { users } = useSelector(state => state.userListReducer.users)
 const searchInput = useRef()

//  const { id } = useParams()


  // 
  const changingHandler = () => {
    console.log(searchInput.current.value);
    dispatch(initUserslistFetchAC(user.id))
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
        <input placeholder='Найти друзей' type='search' ref={searchInput}></input><button onClick={changingHandler}>искать</button>
      </div>
      <div>
        {friendsVisible && <FriendList />}
      </div>

      <div className='bottomLine'></div>
      <div onClick={calendarSwitch}>
        <h3>ваши события</h3>
        <div className='stateSwitcher'>
        {calendarSwitcher ? <div className='display'>Лента</div> : <div className='display'>Календарь</div>}
        </div>
        {calendarSwitcher ? 'Здесь будет красивый календарь' : <CurrentUsersEvents />}
      </div>
    </div>
  )
}

export default Profile
