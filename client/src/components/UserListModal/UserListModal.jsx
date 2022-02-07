import React from 'react';
import UserCardInModal from '../UserCardInModal/UserCardInModal';

function UserListModal({ users }) {


  return (
  <div>
     {users.length ? users.map(user =><UserCardInModal key={user.id} user={user} />) : "Нет доступных пользователей!"}
  </div> 
  )
}

export default UserListModal
