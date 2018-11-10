# dva-demo
dva + dva-loading + redux-actions + react-router-redux + axios ajax请求实例

#### 总结体会
- dva是个框架，并不是库，简单理解：dva = React-Router + Redux + Redux-saga
- 实际功能模块的开发，就是 配置路由 + UI Component + Model + connect
- 知识点包括action、reducers、effects等概念的理解和他们之间的联系，以及subscriptions、connect等。
- model模块导入，统一入口，使用webpack require.context 技术。
- app = dva(opts)，对dva实例，可配置属性，如：initialState、history、onAction、extraReducers、onEffect等的学习。
- dva-loading插件、redux-logger中间件、redux-actions库、react-router-redux库等的运用；
- 路由跳转方式的总结，包括react跳转方法，和在effects中运用react-router-redux库的push方法进行跳转等。
- axios ajax请求实例，简单的体会dva开发一个功能模块的大体流程。

#### 参考
- [dva github地址](https://github.com/dvajs/dva)
- [dva官网](https://dvajs.com/)
- [dva-loading](https://github.com/dvajs/dva/tree/master/packages/dva-loading)
- [redux-logger](https://github.com/evgenyrodionov/redux-logger) 
- [redux-actions](https://github.com/redux-utilities/redux-actions)
- [webpack require.context](https://webpack.js.org/guides/dependency-management/#context-module-api)
