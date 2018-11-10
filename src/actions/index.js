import { createAction } from 'redux-actions'; // 主要利用createAction这个方法

// counter
export const counterAdd = createAction('counter/add');
export const counterAsayAdd = createAction('counter/asayAdd');

// Products
export const productsDelete = createAction('products/delete');

// user
export const userfetch = createAction('users/user/fetch'); // dispatch type的内容
