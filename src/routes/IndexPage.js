import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <p>
        <button onClick={() => props.history.push('/counter')}>go to counter</button>
        <button onClick={() => props.history.push('/user')} style={{marginLeft: 20}}>go to user</button>
      </p>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
