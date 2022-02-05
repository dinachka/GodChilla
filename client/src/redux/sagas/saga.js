import { call, put, takeEvery } from 'redux-saga/effects'
import { initFriendsAC } from '../actionCreators/friendsAC';
import { INIT_FRIENDS } from '../actionTypes/friendsAT';
import { addUserAC, initUserAC, deleteUserAC } from '../actionCreators/userAC';
import { REGISTRATION_FETCH, LOGIN_FETCH, LOGOUT_FETCH } from '../actionTypes/userAT'
import { PUBLIC_EVENTS_FETCH } from '../../redux/actionTypes/eventAT'
import { getPublicEvents } from '../actionCreators/eventAC';
// import { getCatAC } from './ActionCreators/catAC'

async function fetchData({ url, method, headers, body, credentials = 'include' }) {
  const response = await fetch(url, { method, headers, body, credentials
  });
  return (await response.json());
}

function* registrationUserAsync(action) {
  const newUser = yield call(fetchData, { 
    url: process.env.REACT_APP_URL_REGISTRATION, 
    headers: { 'Content-Type': 'Application/json' }, 
    method: 'POST', 
    body: JSON.stringify(action.payload) });

  yield put(addUserAC(newUser));
}

function* loginUserAsync(action) {
  const user = yield call(fetchData, { 
    url: process.env.REACT_APP_URL_LOGIN, 
    headers: { 'Content-Type': 'Application/json' }, 
    method: 'POST', 
    body: JSON.stringify(action.payload) });

  yield put(initUserAC(user));
}

function* initFriendsAsync(){
  const friends = yield call(fetchData, { 
    url: `${process.env.REACT_APP_URL_FRIENDS}/2`,
    method: 'GET', 
    });

  yield put(initFriendsAC(friends));
}



function* logoutUserAsync() {
  const user = yield call(fetchData, {
    url: process.env.REACT_APP_URL_LOGOUT, 
    method: 'GET',
  });
  
  yield put(deleteUserAC(user))
}

// function* getCatAsync() {
//   const cat = yield call(fetchData, { url: 'https://aws.random.cat/meow', credentials: 'same-origin' });
//   yield put(getCatAC(cat));
// }
function* getPublicEventsAsync() {
  const events = yield call(fetchData, { url: process.env.REACT_APP_URL_PUBLIC_EVENTS, credentials: 'same-origin' });
  yield put(getPublicEvents(events));
}

// function* initUserAsync() {
//   const user = yield call(fetchData, { url: "/api/registration" });
//   yield put(initUserAC(user));
// }

export function* sagaWatcher() {
  yield takeEvery(REGISTRATION_FETCH, registrationUserAsync);
  yield takeEvery(LOGIN_FETCH, loginUserAsync);
  yield takeEvery(INIT_FRIENDS, initFriendsAsync)
  // yield takeEvery("FETCH_INIT_USER", initUserAsync);
  yield takeEvery(LOGOUT_FETCH, logoutUserAsync);
  yield takeEvery(PUBLIC_EVENTS_FETCH, getPublicEventsAsync);
}
