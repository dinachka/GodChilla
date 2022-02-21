import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { initFriendsFetchAC } from '../../redux/actionCreatorsAsync/friendsACAsync';

export const Dialogs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector(state => state.userReducer);
  if (!user) navigate('/');

  useEffect(() => {
    if (user.id) dispatch(initFriendsFetchAC(user.id));
  }, [user]);

  const friends = useSelector(state => state.friendsReducer.friends) || [];
  const friendsList = friends?.length && (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>
          {friend.name} {friend.lastName}
        </li>
      ))}
    </ul>
  );

  const Dialog = () => {
    <div></div>;
  };

  return <div style={{ maxWidth: '1200px' }}>{friendsList}</div>;
};
