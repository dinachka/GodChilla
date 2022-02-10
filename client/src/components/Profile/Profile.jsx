import React from 'react'
import { useState, useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initUserslistFetchAC } from '../../redux/actionCreatorsAsync/userACAsync';
import { cleanUserListAC } from '../../redux/actionCreators/userAC'
import CurrentUsersEvents from '../CurrentUsersEvents/CurrentUsersEvents'
import FriendList from '../FriendList/FriendList';
import EventCreator from '../EventCreator/EventCreator';
import './profile.css'
import UserListModal from '../UserListModal/UserListModal';
import OtherEventsOnProfie from '../OtherEventsOnProfie/OtherEventsOnProfie';
import PastEvents from '../PastEvents/PastEvents';
import { CLEAN_USERLIST } from '../../redux/actionTypes/userAT'

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
    searchInput.current.value.length ? dispatch(initUserslistFetchAC(searchInput.current.value)) : dispatch(cleanUserListAC())
  }

  // сохранение аватара

  //переменная для получения файла на клиенте
  const [img, setImg] = useState(null)
  //переменная, обработаная на сервере 
  const [avatar, setAvatar] = useState(null)
  const defaultAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1H81w4SmKH5DZmIbxU7EB0aMSkNQDoPQA1mRQxf2Y0wMF1NSa7vghbwwKASi1q4NPmNw&usqp=CAU'

  const id = user.id

  const sendFile = useCallback(async () => {
    try {
      // const URL = 'http://localhost:4000/api/profile/uploadImage/'
      const URL = process.env.REACT_APP_SAVE_AVATAR_ON_PROFILE
      const data = new FormData()
      data.append('avatar', img)
      const options = {
        method: 'PUT',
        body: data,
        credentials: 'include',
      };
      fetch(URL + id, options)
        .then(res => res.json())
        .then(data => setAvatar(data.photoURL))
    } catch (error) {
      console.log(error);
    }
  }, [img, id])

  return (
    <div className='profileContainer'>
      <div className='profile_info_container'>
        <div className="avatar_box">
          {avatar ? <img src={`${avatar}`} alt="avatar" />
            :
            user.photo ? <img src={`${user.photo}`} alt="avatar" />
              :
              <img src={`${defaultAvatar}`} alt="avatar" />
          }
        </div>
        <div className="js-upload" uk-form-custom='true'>
          <input type="file" multiple onChange={e => setImg(e.target.files[0])} />
          <button className="uk-button uk-button-default" type="button" tabIndex="-1">Select</button>
        </div>
        <div>
          <button onClick={sendFile}>Change avatar</button>
        </div>
        <div>
          <h3>{user.name}</h3>
        </div>
      </div>

      <div className='bottomLine'></div>
      <div className='createEventBtn' >
        <div onClick={eventCreatorVisibleSwitcher} className='display' >Создать</div>
      </div>
      {eventCreatorVisible && <EventCreator setSwitcher={() => { setEventCreatorVisible(false) }} />}

      <hr className="uk-divider-icon" />
      <div className='friendsContainer'>
        <div onClick={friendsVisibleSwitcher} className='stateSwitcher display' >Мои друзья </div>

        <input onChange={changingHandler} placeholder='Найти друзей' type='search' ref={searchInput}></input><button>искать</button>
      </div>
      <div>
        {friendsVisible && <FriendList />}
      </div>
      {users.users?.length && <UserListModal users={users.users} />}

      <div className='bottomLine'></div>
      <div >
        <div className='stateSwitcher'>
          {calendarSwitcher ? <div onClick={calendarSwitch} className='display'>Лента будущих событий</div> : <div onClick={calendarSwitch} className='display'>Прошедшие события</div>}
        </div >
        <div >{calendarSwitcher ? <>
          <CurrentUsersEvents />
          <OtherEventsOnProfie />
        </>
          : <PastEvents />}</div>
      </div>
    </div>
  )
}

export default Profile
