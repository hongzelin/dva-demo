
import axios from 'axios';

export default {
  namespace: 'users',
  state: {
    isFetch: false,
    error: null,
    user: null
  },

  effects: {
    *'user/fetch'({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'user/start' });
      try {
        const users = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users'); // axios.get('https://jsonplaceholder.typicode.com/users')      
        yield put({ type: 'user/sucess', uu: users });
      } catch (e) {
        yield put({ type: 'user/fail', errors: e });
      }
    },
  },

  reducers: {
    'user/start'(state, action) {
      return { 
        ...state,
        error: null,
        user: null
      };
    },
    'user/sucess'(state, action) {
      return { 
        ...state,
        error: null,
        user: action.uu
      };
    },
    'user/fail'(state, action) {
      return { 
        ...state,
        error: action.errors,
        user: null
      };
    },
  },

};
