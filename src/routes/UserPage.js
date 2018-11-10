import React from 'react';
import { connect } from 'dva';
import { userfetch } from '../actions';

const UserPage = (props) => {
  const { userfetch } = props;
  const { error, user } = props.user;

  const isFetch = props.loading.effects['users/user/fetch'];

    let data = "";
    if (isFetch) {
      data = '正在加载中。。。'
    } else if (user) {
      data = user.data[0]['name'];
    } else if (error) {
      data = error.message;
    }

  function start() {
    userfetch();
  }

  return(
    <div>
      <h1>User</h1>
      <p>{data}</p>
      <p>
        <button onClick={start}>发送请求</button>
      </p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.users,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { userfetch })(UserPage);

















// const UserPage = (props) => {
//   console.log(props.loading);

//   const { userfetch } = props;
//   function start() {
//     userfetch();
//   }
//   return(
//     <div>
//       <button onClick={start}>发送请求</button>
//     </div>
//   )
// }
// const mapStateToProps = (state) => {
//   // console.log(state);
//   return {
//     user: state.users,
//     loading: state.loading
//   }
// }

// export default connect(mapStateToProps, { userfetch })(UserPage);