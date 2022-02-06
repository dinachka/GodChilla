import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import FriendCard from '../FriendCard/FriendCard'
import { initFriendsFetchAC } from '../../redux/actionCreatorsAsync/friendsACAsync';

//  Временное решение с друзьями
// import { Friends } from './friendsData'

function FriendList() {
  const dispatch = useDispatch()
  const friends = useSelector(state => state.friendsReducer.friends)
  console.log(friends);
  useEffect(() => {
    dispatch(initFriendsFetchAC());
  }, [dispatch])
  return (
    <>
      { friends?.length ? friends.map( el => <FriendCard key={el.id} friend={el}/>) : "У Вас пока нет друзей."}
    </>
  )
}

export default FriendList
