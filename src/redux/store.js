import { createStore,applyMiddleware } from 'redux'
import { taskReducer } from './task/taskReducer';
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(taskReducer,composeWithDevTools(applyMiddleware()))