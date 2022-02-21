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
import { initFriendsRequestNotificatiosnAsyncAC } from '../../redux/actionCreatorsAsync/friendsACAsync'
import { eventsRequestsNotificationsAsyncAC } from '../../redux/actionCreatorsAsync/eventsACAsync';

function Profile() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initFriendsRequestNotificatiosnAsyncAC())
  }, [dispatch])

  useEffect(() => {
    dispatch(eventsRequestsNotificationsAsyncAC())
  }, [dispatch])

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
  // Логика отображения поисковика друзей
  const [searchVisible, setSearchVisible] = useState(false)
  const searchVisibleSwitcher = () => {
    setSearchVisible(!searchVisible)
  }

  const { user } = useSelector(state => state.userReducer)
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
      const URL = 'http://localhost:4000/api/profile/uploadImage/'
      // const URL = process.env.REACT_APP_SAVE_AVATAR_ON_PROFILE
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
          {avatar ? <img className='avatar_img' src={`${avatar}`} alt="avatar" />
            :
            user.photo ? <img className='avatar_img' src={`${user.photo}`} alt="avatar" />
              :

              <img className='avatar_img_default' src={`${defaultAvatar}`} alt="avatar" />
          }
        </div>

        <br />
        <div className='user_info_container' >
          <div className='user_info'>
            <div>Имя: <b className='span'>{user.name}</b></div>
            <br />
            <div>Фамилия: <b className='span'>{user.lastName}</b></div>
            <br />
            <div>Город: <b className='span'>{user.city}</b> </div>
          </div>
          <div className="js-upload" uk-form-custom='true'>
            <input type="file" multiple onChange={e => setImg(e.target.files[0])} className='inpload' />
            <button className="uk-button uk-button-default my_settings" type="button" tabIndex="-1">Загрузить аватар</button>
          </div>
          <div>
            <button onClick={sendFile} className="uk-button uk-button-default extra_style" >Установить аватар</button>
          </div>
        </div>
      </div>

      <h3 className="uk-heading-line uk-text-center" onClick={eventCreatorVisibleSwitcher}>
        {eventCreatorVisible ? <span className='first_span' uk-icon="chevron-up" >создать событие</span> : <span className='first_span' uk-icon="chevron-down" >создать событие</span>}
      </h3>
      {eventCreatorVisible && <EventCreator setSwitcher={() => { setEventCreatorVisible(false) }} />}

      <h3 className="uk-heading-line uk-text-center" onClick={searchVisibleSwitcher}>
        {searchVisible ? <span className='first_span' uk-icon="chevron-up" >найти людей</span>
          : <span className='first_span' uk-icon="chevron-down" >найти людей</span>}
      </h3>
      {searchVisible && <form className="uk-search uk-search-large">
        <span uk-search-icon='true'></span>
        <input className="uk-search-input" type="search" placeholder="введите имя" onChange={changingHandler} ref={searchInput} />
      </form>}
      {users.users?.length && searchVisible ? <UserListModal users={users.users} /> : searchVisible &&
        <p className='notification_searchbar'> Нет доступных пользователей</p>}

      <h3 className="uk-heading-line uk-text-center" onClick={friendsVisibleSwitcher}>
        {friendsVisible ? <span className='first_span' uk-icon="chevron-up" >мои друзья</span> : <span className='first_span' uk-icon="chevron-down" > мои друзья</span>}
      </h3>
      <div>
        {friendsVisible && <FriendList />}
      </div>

      <h3 className="uk-heading-line uk-text-center" onClick={calendarSwitch}>
        {calendarSwitcher ? <span className='first_span' uk-icon="chevron-down" >лента событий</span> : <span className='first_span' uk-icon="chevron-up" >лента событий</span>}
      </h3>
      <div >
        <div>
          {!calendarSwitcher && <>
            <CurrentUsersEvents />
            <OtherEventsOnProfie />
            <PastEvents /> </>}
        </div>
      </div>
    </div>
  )
}

export default Profile
