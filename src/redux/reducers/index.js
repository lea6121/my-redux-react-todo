import { combineReducers } from 'redux'
import todos from './todos'

export default combineReducers({ todoState: todos })
