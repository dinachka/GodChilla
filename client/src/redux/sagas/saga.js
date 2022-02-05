import { addUserAC, } from '../actionCreators/userAC';
// import { getCatAC } from './ActionCreators/catAC'
import { call, put, takeEvery } from 'redux-saga/effects'
import { initEventsAC } from '../actionCreators/eventAC.js';


async function fetchData({ url, method, headers, body }) {
  const response = await fetch(url, { method, headers, body });
  return (await response.json());
}

function* initEventsAsync(action) {
  const allEvents = yield call(fetchData, {
    url: 'http://localhost:5000/api/',
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
    body: JSON.stringify(action.payload)
  })

  yield put(initEventsAC(allEvents))
}

function* registrationUserAsync(action) {
  console.log(process.env);
  const newUser = yield call(fetchData, {
    url: process.env.REACT_APP_URL_REGISTRATION,
    headers: { 'Content-Type': 'Application/json' },
    method: 'POST',
    body: JSON.stringify(action.payload)
  });

  // put - аналог dispatch в redux-saga
  yield put(addUserAC(newUser));
}

// function* getCatAsync() {
//   const cat = yield call(fetchData, { url: 'https://aws.random.cat/meow', credentials: 'same-origin' });
//   yield put(getCatAC(cat));
// }

// function* initUserAsync() {
//   const user = yield call(fetchData, { url: "/api/registration" });
//   yield put(initUserAC(user));
// }

export function* sagaWatcher() {
  yield takeEvery("REGISTRATION_FETCH", registrationUserAsync);
  yield takeEvery("FETCH_INIT_EVENTS", initEventsAsync);
  // yield takeEvery("FETCH_GET_CAT", getCatAsync);
  // yield takeEvery("FETCH_INIT_USER", initUserAsync);
}
