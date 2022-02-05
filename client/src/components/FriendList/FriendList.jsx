import React from 'react'
import FriendCard from '../FriendCard/FriendCard'

//  Временное решение с друзьями
import { Friends } from './friendsData'

function FriendList() {
  return (
    <>
      { Friends.length ? Friends.map( el => <FriendCard key={el.id} friend={el}/>) : "У Вас пока нет друзей."}
    </>
  )
}

export default FriendList
