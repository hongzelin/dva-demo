const context = require.context('./', false, /\.js$/);
// console.log(context);

// 取出 keys
const keys = context.keys();
// console.log(keys); // ["./counter.js", "./example.js", "./index.js", "./products.js"]

// 过滤index.js
const filterIndex = keys.filter(item => item !== './index.js');
// console.log(filterIndex); // ["./counter.js", "./example.js", "./products.js"]

// 获取对应的上下文
const result = filterIndex.map(item => context(item));
// console.log(result);


export default result;

