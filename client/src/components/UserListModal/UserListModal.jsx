import React, {useState, useEffect} from 'react';
import UserCardInModal from '../UserCardInModal/UserCardInModal';
import './userListModal.css'

function UserListModal({ users }) {

  return (
  <div className='user_list'>
      {users.length && 
      
      users.map(user =><UserCardInModal key={user.id} user={user} />) 
      // :
      // <p>Text</p>
    }
  </div> 
  )
}

export default UserListModal
