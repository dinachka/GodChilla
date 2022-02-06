import React from 'react';
import UserCardInModal from '../UserCardInModal/UserCardInModal';
import './userListModal.css';

function UserListModal({ users }) {


  return (
  <div className='userListModal'>
     {users.length ? users.map(user =><UserCardInModal key={user.id} user={user} />) : "Нет доступных пользователей!"}
  </div> 
  )
}

export default UserListModal
