import React from 'react';

function ParticularUserEventsForFriends({ user }) {
console.log(user);
 const clickJoinHandler = (event) => {
   console.log(111, user, '111');
   console.log(user.title);
 }

  return (
    <h5>
      <p>Название встречи: {user.title}</p>
      <p>Описание: {user.description}</p>
      <p>Место: {user.location}</p>
      <button onClick={clickJoinHandler} style={{ color:'red'}}>Присоединиться</button>
      {/* {event.status === 'В обработке' ? <button onClick={clickCancelJoinHandler}>Не участвовать</button>
      : <button onClick={clickJoinHandler}>Присоединиться</button> */}
      <br/>
    </h5>
  );
}

export default ParticularUserEventsForFriends;
