import dva from 'dva';
import './index.css';
import { createBrowserHistory as createHistory } from 'history';
import createLoading from 'dva-loading'; 
import { createLogger } from 'redux-logger';
// import counter from './models/counter';

const extraReducers = {
  myExtraData(state=false, action){ // myExtraData 作为namespace，则可以在UI Component中取到
    switch(action.type) {
      case 'SHOW' : 
        return true;
      case 'HIDE' :
        return false;
      default:
         return state;
    }
  }
}

function onEffect(effect, { put }, model, actionType) {
  const { namespace } = model;
  return function*(...args) {
    yield put({ type: 'SHOW', payload: { namespace, actionType } });
    yield effect(...args);
    yield put({ type: 'HIDE', payload: { namespace, actionType } });
  };
}

// 1. Initialize
// const app = dva();
const app = dva({
  history: createHistory(),
  onAction: createLogger(),
  extraReducers: extraReducers,
  onEffect: onEffect, // 异步动作才发挥作用
  initialState: {
    products: [
      { name: 'dva', id: 1, key: 1 },
      { name: 'antd', id: 2, key: 2 },
    ],
    counter: {
      record: localStorage.getItem('record') || 0,
      count: 0,
    }
  },
 
});

// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
// app.model(require('./models/example').default);
// app.model(require('./models/products').default);
// app.model(require('./models/counter').default);
// app.model(counter);

// require('./models').default  获取models/index 默认导出的数组值
// .forEach(element => app.model(element.default)) 遍历每个元素对象
// element.default 再获取每个每个元素，默认导出的值
// 其实：app.model(element.default) === app.model(require('./models/counter').default)
require('./models').default.forEach(element => app.model(element.default));
// require('./models/index').default.forEach(element => app.model(element.default));


// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
