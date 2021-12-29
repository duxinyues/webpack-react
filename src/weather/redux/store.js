/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-12-28 22:25:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-29 22:47:35
 * @Description: 文件描述
 */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import weatherReducer from './reduers'
const middlewares = [thunkMiddleware];
const win = window;

const reducers = combineReducers({
    weatherStore: weatherReducer
})
export const store = createStore(reducers, {}, compose(applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f))