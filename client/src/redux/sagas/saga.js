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

export function* globalWatcher() {
  yield takeEvery("FETCH_INIT_EVENTS", initEventsAsync);
}
