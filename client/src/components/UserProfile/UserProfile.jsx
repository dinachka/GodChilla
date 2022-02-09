import React, {useState} from 'react';
import { initAnotherUserFetchAC } from '../../redux/actionCreatorsAsync/userACAsync';
import { addFriendshipFetchAC } from '../../redux/actionCreatorsAsync/friendsACAsync';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function UserProfile() {
  
  const {id} = useParams();
  const dispatch = useDispatch();
  const thisUser = useSelector(state => state.userReducer.anotherUser)
  const mainUser = useSelector(state => state.userReducer.user)
  
  // Логика переключения календаря и ленты-событий
  const [calendarSwitcher, setCalendarSwitcher] = useState(true)
  const calendarSwitch = () => {
    setCalendarSwitcher(!calendarSwitcher)
  }
  
  useEffect(() => {
    dispatch(initAnotherUserFetchAC(id))
  },[dispatch, id]);

  const addFriendHandler = () => {
    const idForFriends = {
      reqUserID: mainUser.id,
      resUserID: thisUser.info.id
    }
    dispatch(addFriendshipFetchAC(idForFriends));
    dispatch(initAnotherUserFetchAC(id))
  }

  const deleteFriendHandler = () => {}
  const cancelRequestHandler = () => {}
  
  console.log(thisUser.info?.name);
  return (
    <>
      Имя: {thisUser.info?.name};
      <br />
      Фамилия: {thisUser.info?.lastName};
      <br />
      Город: {thisUser.info?.city};
      <br />
      {thisUser.friendship === 'Не друзья' && <button onClick={addFriendHandler}>Добавить в друзья</button> }
      {thisUser.friendship === 'Подтвержден' && <button onClick={deleteFriendHandler}>Удалить из друзей</button> }
      {thisUser.friendship === 'В обработке' && <button onClick={cancelRequestHandler}>Отменить заявку</button> }
      <div className='bottomLine'></div>
      <div >
        <div className='stateSwitcher'>
          {calendarSwitcher ? <div onClick={calendarSwitch} className='display'>Лента</div> : <div onClick={calendarSwitch} className='display'>Календарь</div>}
        </div>
        {calendarSwitcher ? 'Здесь будет красивый календарь' : "Здесь будет красивая лента"}
      </div>
    </>
  );
}

export default UserProfile;
