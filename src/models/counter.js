// import { delay } from 'redux-saga';
import { delay } from 'dva/saga';
import key from 'keymaster';
import { routerRedux } from 'dva/router';
import queryString from 'query-string';
import pathToRegexp from 'path-to-regexp';

export default {
  namespace: 'counter',
  state: {
    count: 0,
    record: 0,
  },
  reducers: {
    'add'(state, { type, payload }) {
      const newCount = state.count + 1;
      const r = state.record > newCount ? state.record : newCount;
      localStorage.setItem('record', r);
      return {
        ...state,
        count: newCount,
        record: r
      }
    },
  },
  effects: {
    *asayAdd(action, { put, call, select }) {
      yield call(delay, 1000);
      yield put({ type: 'add' }); // 同一个model不用加namespace
      yield put(routerRedux.push({
        pathname: '/',
        search: queryString.stringify({
          name: 'xiaoming',
          age: 11
        })
      }));
    }
  },
  subscriptions: {
    loginSub({ dispatch, history }) {
      history.listen(location => {
        const flag = pathToRegexp('/counter').exec(location.pathname);
        if(flag) {
          // dispatch({type: 'add'});
        }
      });
    },
    keyboardWatcher({ dispatch }) {
      key('⌘+up, ctrl+up', () => { dispatch({ type: 'add' }) });
    },
  },
}
