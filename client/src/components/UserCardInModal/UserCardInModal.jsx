import React from 'react'
import './userCardInModal.css'

function UserCardInModal({ user }) {
  return (
    <div className='userCardInModal' >
      <div>{ user.name }</div>
      <div>{ user.lastName }</div>
      <button>Добавить в друзья!</button>
      <br />
    </div>
  )
}

export default UserCardInModal
