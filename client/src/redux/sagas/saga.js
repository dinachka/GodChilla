import { call, put, takeEvery } from 'redux-saga/effects'
import { initFriendsAC, addFriendshipAC, initFriendsRequestNotificatiosnAC, acceptFriendshipAC, rejectFriendshipAC } from '../actionCreators/friendsAC';
import { INIT_FRIENDS_ASYNC, ADD_FRIENDSHIP_FETCH, INIT_FRIENDS_REQUEST_NOTIFICATIONS_ASYNC, ACCEPT_FRIENDSHIP_ASYNC, REJECT_FRIENDSHIP_ASYNC } from '../actionTypes/friendsAT';
import { addUserAC, initUserAC, deleteUserAC, initUserslistAC } from '../actionCreators/userAC';
import { REGISTRATION_FETCH, LOGIN_FETCH, LOGOUT_FETCH, INIT_USERSLIST_FETCH, GLOBAL_LOGIN_FETCH } from '../actionTypes/userAT'
import { PUBLIC_EVENTS_FETCH, INIT_USERS_EVENTS_FETCH, FETCH_POST_EVENT, FETCH_DELETE_EVENT, INIT_CLOSEST_EVENTS_FETCH, FETCH_EDIT_EVENT, FETCH_JOIN_EVENT } from '../../redux/actionTypes/eventAT'
import { getPublicEvents, getUsersEvents, addEventAC, deleteEventAC, initClosestEventsAC, editEventAC, addParticipationAC } from '../actionCreators/eventAC';

async function fetchData({ url, method, headers, body, credentials = 'include' }) {
  const response = await fetch(url, {
    method, headers, body, credentials
  });
  return (await response.json());
}
// Запрос на регистрацию
function* registrationUserAsync(action) {
  const newUser = yield call(fetchData, {
    url: process.env.REACT_APP_URL_REGISTRATION,
    headers: { 'Content-Type': 'Application/json' },
    method: 'POST',
    body: JSON.stringify(action.payload)
  });

  yield put(addUserAC(newUser));
}
// Запрос на авторизацию
function* loginUserAsync(action) {
  const user = yield call(fetchData, {
    url: `${process.env.REACT_APP_URL_LOGIN}`,
    headers: { 'Content-Type': 'Application/json' },
    method: 'POST',
    body: JSON.stringify(action.payload)
  });

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
function* initFriendsAsync(action) {
  const friends = yield call(fetchData, {
    url: `${process.env.REACT_APP_URL_FRIENDS}/${action.payload}`,
    method: 'GET',
  });

  yield put(initFriendsAC(friends));
}

// Инициализация всех зарегистрированных пользователей 
function* initUsersListAsync(action) {
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

// Инициализация все событий, кроме тех, что создал пользователь
function* getPublicEventsAsync() {
  const events = yield call(fetchData, { url: process.env.REACT_APP_URL_PUBLIC_EVENTS });
  yield put(getPublicEvents(events));
}

// Инициализация событий пользователя
function* getUsersEventsAsync() {
  console.log(123);
  console.log(process.env.REACT_APP_URL_USERS_EVENTLIST);
  const events = yield call(fetchData, { url: process.env.REACT_APP_URL_USERS_EVENTLIST });
  yield put(getUsersEvents(events));
}

// Создание нового события
function* postEventAsync(action) {
  const newEvent = yield call(fetchData, {
    url: `${process.env.REACT_APP_URL_EVENT}`,
    headers: { 'Content-Type': 'Application/json' },
    method: 'POST',
    body: JSON.stringify(action.payload)
  });

  yield put(addEventAC(newEvent));
}


function* deleteEventAsync(action) {
  const id = yield call(fetchData, {
    url: `${process.env.REACT_APP_URL_EVENT}/${action.payload}`,
    headers: { 'Content-Type': 'Application/json' },
    method: 'DELETE' });

  yield put(deleteEventAC(id));
}

function* addFriendshipAsync(action) {
  const newFriendship = yield call(fetchData, {
    url: process.env.REACT_APP_URL_FRIEND_REQ,
    headers: { 'Content-Type': 'Application/json' },
    method: 'POST',
    body: JSON.stringify(action.payload)
  });

  yield put(addFriendshipAC(newFriendship));

}

// Инициализация ближайших событий 
function* initClosestEventsAsync(action) {
  const allEvents = yield call(fetchData, {
    url: process.env.REACT_APP_URL_INIT_CLOSEST_EVENTS,
    headers: { 'Content-Type': 'application/json' },
  })
  yield put(initClosestEventsAC(allEvents))
}

function* editEventAsync(action) {
  const editedEvent = yield call(fetchData, {
    url: `${process.env.REACT_APP_URL_EVENT}/${action.payload.userID}`,
    headers: { 'Content-Type': 'Application/json' },
    method: 'PUT',
    body: JSON.stringify(action.payload) });

  // put - аналог dispatch в redux-saga
  yield put(editEventAC(editedEvent));
}

// вывод увдеомлений о добавлении в друзьями
function* initFriendsRequestNotifications(action){
  const allRequests  = yield call(fetchData, {
    url: process.env.REACT_APP_URL_USERS_FRIENDSHIP_NOTIFICATIONS,
    headers: { 'Content-Type': 'application/json' },
  })
  yield put(initFriendsRequestNotificatiosnAC(allRequests))
}
// принять запрос на добавление друга 
function* acceptFriendship(action){
  const accepted = yield call(fetchData, {
    url: process.env.REACT_APP_URL_ACCEPT_FRIENDSHIP,
    headers: { 'Content-Type': 'application/json' },
  })
  yield put(acceptFriendshipAC(accepted))
}

function* rejectFriendship(action){
  const reject = yield call(fetchData, {
    url: process.env.REACT_APP_URL_REJECT_FRIENDSHIP,
    headers: { 'Content-Type': 'application/json' },
  })
  yield put(rejectFriendshipAC(reject))
}
// запросить разрешение присоединиться к событию
function* joinEventAsync(action) {
  const eventID = yield call(fetchData, {
    url: process.env.REACT_APP_URL_JOIN_EVENT,
    headers: { 'Content-Type': 'Application/json' },
    method: 'POST',
    body: JSON.stringify(action.payload)
  });

  yield put(addParticipationAC(eventID));
}

export function* sagaWatcher() {
  // Запрос на регистрацию
  yield takeEvery(REGISTRATION_FETCH, registrationUserAsync);
  // Запрос на авторизацию
  yield takeEvery(LOGIN_FETCH, loginUserAsync);
  // Иницализация все друзей юзера
  yield takeEvery(INIT_FRIENDS_ASYNC, initFriendsAsync);
  // Прокидывание сессии и куков на все компоненты приложения
  yield takeEvery(GLOBAL_LOGIN_FETCH, globalLoginUserAsync);
  // Запрос на logout, завершение сессии
  yield takeEvery(LOGOUT_FETCH, logoutUserAsync);
  // Инициализация все событий, кроме тех, что создал пользователь
  yield takeEvery(PUBLIC_EVENTS_FETCH, getPublicEventsAsync);
  // Инициализация событий в профиле 
  yield takeEvery(INIT_USERS_EVENTS_FETCH, getUsersEventsAsync);
  // Создание нового события
  yield takeEvery(FETCH_POST_EVENT, postEventAsync);
  // Инициализация всех зарегистрированных пользователей 
  yield takeEvery(INIT_USERSLIST_FETCH, initUsersListAsync);
  // Удаление события автором
  yield takeEvery(FETCH_DELETE_EVENT, deleteEventAsync);
  // Инициализация ближайших событий
  yield takeEvery(INIT_CLOSEST_EVENTS_FETCH, initClosestEventsAsync);
  // Запрос на дружбу
  yield takeEvery(ADD_FRIENDSHIP_FETCH, addFriendshipAsync);
  // Изменение событиях
  yield takeEvery(FETCH_EDIT_EVENT, editEventAsync);
  
  yield takeEvery(INIT_FRIENDS_REQUEST_NOTIFICATIONS_ASYNC, initFriendsRequestNotifications);

  yield takeEvery(ACCEPT_FRIENDSHIP_ASYNC, acceptFriendship);

  yield takeEvery(REJECT_FRIENDSHIP_ASYNC, rejectFriendship);
  // запрос на участие в событии
  yield takeEvery(FETCH_JOIN_EVENT, joinEventAsync);
  
}
