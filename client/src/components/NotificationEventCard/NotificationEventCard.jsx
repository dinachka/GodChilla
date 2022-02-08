import React from 'react';

function NotificationEventCard({event}) {

  const key = Object.values(event)

const acceptEventRequest = () => {

}

const rejectEventRequest = () => {

}

  return (
    <div>
      {/* {/* {event.User.name}     */}
      пользователь {key[19]} {key[20]} хочет учавствовать в "{key[9]}"" 
  Вы можете <button onClick={acceptEventRequest}>принять</button> или <button onClick={rejectEventRequest}>отклонить</button> запрос
    </div>
  );
}

export default NotificationEventCard;
