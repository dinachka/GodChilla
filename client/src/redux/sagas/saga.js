import { call, put, takeEvery } from 'redux-saga/effects'
import { initFriendsAC } from '../actionCreators/friendsAC';
import { INIT_FRIENDS_ASYNC, INIT_FRIENDS } from '../actionTypes/friendsAT';
import { addUserAC, initUserAC, deleteUserAC, initUserslistAC } from '../actionCreators/userAC';
import { REGISTRATION_FETCH, LOGIN_FETCH, LOGOUT_FETCH, INIT_USERSLIST_FETCH, GLOBAL_LOGIN_FETCH } from '../actionTypes/userAT'
import { PUBLIC_EVENTS_FETCH, INIT_USERS_EVENTS_FETCH, FETCH_POST_EVENT, FETCH_DELETE_EVENT } from '../../redux/actionTypes/eventAT'
import { getPublicEvents, getUsersEvents, addEventAC, deleteEventAC } from '../actionCreators/eventAC';

// import { getCatAC } from './ActionCreators/catAC'


async function fetchData({ url, method, headers, body, credentials = 'include' }) {
  const response = await fetch(url, { method, headers, body, credentials
  });
  return (await response.json());
}
// Запрос на регистрацию
function* registrationUserAsync(action) {
  const newUser = yield call(fetchData, { 
    url: process.env.REACT_APP_URL_REGISTRATION, 
    headers: { 'Content-Type': 'Application/json' }, 
    method: 'POST', 
    body: JSON.stringify(action.payload) });

  yield put(addUserAC(newUser));
}
// Запрос на авторизацию
function* loginUserAsync(action) {
  const user = yield call(fetchData, { 
    url: `${process.env.REACT_APP_URL_LOGIN}`, 
    headers: { 'Content-Type': 'Application/json' }, 
    method: 'POST', 
    body: JSON.stringify(action.payload) });

  yield put(initUserAC(user));
}

// Прокидывание сессии и куков на все компоненты приложения
function* globalLoginUserAsync() {
  const user = yield call(fetchData, { 
    url: process.env.REACT_APP_URL_LOGIN,
    method: 'GET'
   });

  yield put(initUserAC(user));
}

// Иницализация все друзей юзера
function* initFriendsAsync(action){
  console.log('friends', process.env.REACT_APP_URL_FRIENDS);
  const friends = yield call(fetchData, { 
    url: `${process.env.REACT_APP_URL_FRIENDS}/${action.payload}`,
    method: 'GET', 
    });

  yield put(initFriendsAC(friends));
}

// Инициализация всех зарегестрированных пользователей 
function* initUsersListAsync(action){
  console.log(action.payload);
  const users = yield call(fetchData, {
    url: `${process.env.REACT_APP_URL_USERS}/${action.payload}`,
    // headers: { 'Content-Type': 'Application/json' },
    method: 'GET',
    // body: JSON.stringify(action.payload)
    });

  yield put(initUserslistAC(users));
}

// Запрос на logout, завершение сессии
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

// Инициализация все событий, кроме тех, что создал пользователь
function* getPublicEventsAsync() {
  const events = yield call(fetchData, { url: process.env.REACT_APP_URL_PUBLIC_EVENTS});
  yield put(getPublicEvents(events));
}


// Создание нового события
function* getUsersEventsAsync(action) {
  const events = yield call(fetchData, { url: process.env.REACT_APP_URL_FRIENDS });
  yield put(getUsersEvents(events));
}

function* postEventAsync(action) {
  const newEvent = yield call(fetchData, {
    url: `${process.env.REACT_APP_URL_EVENT}`,
    headers: { 'Content-Type': 'Application/json' },
    method: 'POST',
    body: JSON.stringify(action.payload) });

  yield put(addEventAC(newEvent));
}

function* deleteEventAsync(action) {
  const id = yield call(fetchData, {
    url: `${process.env.REACT_APP_URL_EVENT}/${action.payload}`,
    headers: { 'Content-Type': 'Application/json' },
    method: 'DELETE' });

  // put - аналог dispatch в redux-saga
  yield put(deleteEventAC(id));
}

// function* initUserAsync() {
//   const user = yield call(fetchData, { url: "/api/registration" });
//   yield put(initUserAC(user));
// }


export function* sagaWatcher() {
  // Запрос на регистрацию
  yield takeEvery(REGISTRATION_FETCH, registrationUserAsync);
  // Запрос на авторизацию
  yield takeEvery(LOGIN_FETCH, loginUserAsync);
  // Иницализация все друзей юзера
  yield takeEvery(INIT_FRIENDS_ASYNC, initFriendsAsync)
  // Прокидывание сессии и куков на все компоненты приложения
  yield takeEvery(GLOBAL_LOGIN_FETCH, globalLoginUserAsync);

  // yield takeEvery("FETCH_INIT_USER", initUserAsync);
  // Запрос на logout, завершение сессии
  yield takeEvery(LOGOUT_FETCH, logoutUserAsync);
  // Инициализация все событий, кроме тех, что создал пользователь
  yield takeEvery(PUBLIC_EVENTS_FETCH, getPublicEventsAsync);

  // Создание нового события
  yield takeEvery(INIT_USERS_EVENTS_FETCH, getUsersEventsAsync);
  yield takeEvery(FETCH_POST_EVENT, postEventAsync);
  // Инициализация всех зарегестрированных пользователей 
  yield takeEvery(INIT_USERSLIST_FETCH, initUsersListAsync);
  // Удаление события автором
  yield takeEvery(FETCH_DELETE_EVENT, deleteEventAsync)
}
