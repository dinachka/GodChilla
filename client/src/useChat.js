import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';

export default () => {
  const ws = useRef(null);
  const session = useSelector(state => state.userReducer);

  useEffect(() => {
    if (session.user.isUser) {
      ws.current = new io();
      ws.current.on('message', message => console.log(message));
      return () => ws.current.disconnect();
    }
  }, [session.user.isUser]);
};
