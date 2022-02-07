import React from 'react';
import { Link } from 'react-router-dom';

function CurrentEvent({event}) {
  const clickJoinHandler = () => {}
  return (
    <div>
      { event.photo ? <img src='https://pbs.twimg.com/profile_images/445338647261229056/Gf5tt71x_400x400.jpeg' alt='not found'></img>
      : <img src={`/pictures/${event.categoryID}.jpg`} alt='not found'></img> }
      <div> Заголовок </div>
      <div> { event.title } </div>
      <div> Локация </div>
      <div> { event.location } </div>
      <div> Дата </div>
      <div> { event.dateTime } </div>
      <div> Описание </div>
      <div> { event.description } </div>
      <div> Инициатор </div>
      <Link to={`/profile/${event.User.id}`}> { event.User.name } { event.User.lastName } { event.User.isFriend && <div>ДРУЖИЩЕ</div> } { event.User.photo && <img style={{maxWeigth: '1', maxHeight: "1"}} src={event.User.photo} alt=""/>}</Link>
      <button onClick={clickJoinHandler}>Присоединиться</button>
    </div>
  );
}

export default CurrentEvent;
