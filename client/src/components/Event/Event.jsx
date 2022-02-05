import React from 'react';
import { Link } from 'react-router-dom';

function CurrentEvent({event}) {
  const users = [{id: 1, name: 'Олех', surname: 'Смирнов', photo: 'https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/678x380'}]
  const user = users.find( el => el.id === event.userID)
  const clickJoinHandler = () => {}
  return (
    <div>
      { event.photo ? <img src='https://pbs.twimg.com/profile_images/445338647261229056/Gf5tt71x_400x400.jpeg' alt='not found'></img>
      : <img src={`/pictures/${event.category}.jpeg`} alt='not found'></img> }
      <div> Заголовок </div>
      <div> { event.title } </div>
      <div> Локация </div>
      <div> { event.location } </div>
      <div> Дата </div>
      <div> { event.dateTime } </div>
      <div> Описание </div>
      <div> { event.description } </div>
      <div> Инициатор </div>
      <Link to={`/profile/${event.userID}`}> { user.name } { user.surname } { user.photo && <img style={{maxWeigth: '1', maxHeight: "1"}} src={user.photo} alt=""/>}</Link>
      <button onClick={clickJoinHandler}>Присоединиться</button>
    </div>
  );
}

export default CurrentEvent;
