import React from 'react';

function ParticularUserPublicEvents({ user }) {

 const inviteHandler = (event) => {
   console.log(111, '111');
   console.log(user.title);
 }

  return (
    <h5>
      <p>Название встречи: {user.title}</p>
      <p>Описание: {user.description}</p>
      <p>Место: {user.location}</p>
      <button onClick={inviteHandler} style={{ color:'red'}}>Присоединиться</button>
      <br/>
    </h5>
  );
}


export default ParticularUserPublicEvents;
