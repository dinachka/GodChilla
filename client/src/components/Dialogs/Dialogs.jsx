import { useEffect, useRef } from 'react';
import io from 'socket.io-client';

export const Dialogs = () => {
  const ws = useRef(null);
  useEffect(() => {
    ws.current = new io();

    ws.current.on('message', message => console.log(message));
  }, []);
  return <>dialogs</>;
};
