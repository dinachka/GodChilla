import React from 'react';

function EventOnUserProfile({ event }) {
  const deleteHandle = event => {
    event.preventDefault();
    console.log('delete');
  };

  const editHandle = event => {
    event.preventDefault();
    console.log('edit');
  };

  return (
    <div>
      <div>
        {event.photo ? (
          <img
            src="https://pbs.twimg.com/profile_images/445338647261229056/Gf5tt71x_400x400.jpeg"
            alt="not found"
          ></img>
        ) : (
          <img src={`/pictures/${event.categoryID}.jpg`} alt="not found"></img>
        )}
        <div> Заголовок: {event.title} </div>
        <div> Локация: {event.location} </div>
        <div> Дата: {event.dateTime} </div>
        <div> Описание: {event.description} </div>
        <button onClick={editHandle}>Изменить событие</button>
        <button onClick={deleteHandle}>Отменить событие</button>
      </div>
    </div>
  );
}

export default EventOnUserProfile;
