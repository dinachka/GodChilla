import React from 'react';

function ParticularUserEventsForFriends({ user }) {

 const inviteHandler = (event) => {
   console.log(111, '111');
   console.log(user.title);
 }

  return (
    <div>
      <p>Название встречи: {user.title}</p>
      <p>Описание: {user.description}</p>
      <p>Место: {user.location}</p>
      <br />
      <button onClick={inviteHandler}>Присоединиться</button>
    </div>
  );
}

export default ParticularUserEventsForFriends;
