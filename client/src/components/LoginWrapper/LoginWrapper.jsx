import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { globalLoginFetchAC } from '../../redux/actionCreatorsAsync/userACAsync';

function LoginWraper({children}) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(globalLoginFetchAC())
  }, [dispatch]);

  return (
    <div>
      {children}
    </div>
  );
}

export default LoginWraper;
