import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import FriendCard from '../FriendCard/FriendCard'
import { initFriendsFetchAC } from '../../redux/actionCreatorsAsync/friendsACAsync';

//  Временное решение с друзьями
// import { Friends } from './friendsData'

function FriendList() {
  const dispatch = useDispatch()
  const friends = useSelector(state => state.friendsReducer.friends)
  const thisUser = useSelector(state => state.userReducer)
  console.log(friends)
  useEffect(() => {
    dispatch(initFriendsFetchAC(thisUser.user.id));
  }, [dispatch, thisUser.user.id])

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {friends?.length ? friends.map(el => <FriendCard key={el.id} friend={el} />) : "У Вас пока нет друзей."}
    </div>
  )
}

export default FriendList
