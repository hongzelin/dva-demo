import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';

const TestHistory = ({ history, counter }, context) => {
  return (
    <div>Test
      <button onClick={() => context.router.history.push('/')}>go to home</button>
    </div>
  )
}

TestHistory.contextTypes = { // 子组件需要指定 contextTypes 
  router: PropTypes.object
}

export default connect((state) => ({
  counter: state.counter,
}))(TestHistory);





