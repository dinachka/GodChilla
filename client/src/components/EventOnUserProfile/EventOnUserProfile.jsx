import React from 'react';

function EventOnUserProfile({event}) {
  return (
    <div>
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
    </div>
    </div>
  );
}

export default EventOnUserProfile;
