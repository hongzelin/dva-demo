import React from 'react';
import { connect } from 'dva';
import { counterAdd, counterAsayAdd } from '../actions';
import TestHistory from './TestHistory';

const Counter = ({ dispatch, counter, counterAdd, counterAsayAdd, history }) => {
  function add() {
    // dispatch({
    //   type: 'counter/add',
    //   name: '小米',
    //   params: {
    //     id: 1,
    //     age: 2
    //   }
    // })
    const params = {
      id: 1,
      age: 2
    }
    counterAdd(params);
  }
  function test() {
    // dispatch({
    //   type: 'counter/asayAdd',
    //   name: '小米',
    //   params: {
    //     id: 1,
    //     age: 2
    //   }
    // })
    counterAsayAdd();
  }
  return (
    <div style={{ textAlign: 'center', marginTop: 20 }}>
      <TestHistory />
      <h2>点击最高纪录：{counter.record}</h2>
      <h2>当前点击数：{counter.count}</h2>
      <button onClick={add}>+</button>
      <button onClick={test}>测试</button>
    </div>
  );
};

// mapStateToProps, mapDispatchToProps
export default connect((state) => ({
  counter: state.counter,
}), { counterAdd, counterAsayAdd })(Counter);

