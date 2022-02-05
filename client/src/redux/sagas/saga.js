import { call, put, takeEvery } from 'redux-saga/effects'
import { addUserAC, initUserAC } from '../actionCreators/userAC';
import { REGISTRATION_FETCH, LOGIN_FETCH } from '../actionTypes/userAT'
import { PUBLIC_EVENTS_FETCH } from '../../redux/actionTypes/eventAT'
import { getPublicEvents } from '../actionCreators/eventAC';


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
  yield takeEvery(PUBLIC_EVENTS_FETCH, getPublicEventsAsync);
}
