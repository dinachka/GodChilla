import React from 'react';

function UserProfile({ user }) {

  // here will be info from params id 


  return (
    <React.Fragment>
      <div className='profileContainer'>
        <div id='mainPhoto'>
          <img src="user.photo" alt="" />
        </div>
        <div>
          user.name
          <br />
          user.message
        </div>

        <div className='friendshipStatusButtons'>
          {/* <buttton>удалить</buttton>
          <buttton>отменить заявку</buttton>
          <buttton>Добавить</buttton> */}
        </div>

        <div className='friendsEvents_box'>
          {/* lenta */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserProfile;
