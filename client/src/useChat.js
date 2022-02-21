import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';

export default () => {
  const dispatch = useDispatch();
  const ws = useRef(null);
  const session = useSelector(state => state.userReducer);

  useEffect(() => {
    if (session?.user?.isUser) {
      ws.current = new io();
      ws.current.on('message', message => console.log(message));

      return () => ws.current.disconnect();
    }
  }, [session.user.isUser]);
};
