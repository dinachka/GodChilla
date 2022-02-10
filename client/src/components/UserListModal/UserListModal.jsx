import React, {useState, useEffect} from 'react';
import UserCardInModal from '../UserCardInModal/UserCardInModal';

function UserListModal({ users }) {

  return (
  <div>
     <>
      {users.length && 
      
      users.map(user =><UserCardInModal key={user.id} user={user} />) 
      // :
      // <p>Text</p>
    }
     </>
  </div> 
  )
}

export default UserListModal
