import { combineReducers } from 'redux';
import { locationReducer as location } from './locationReducer';
import { weatherReducer as weather } from './weatherReducer';

export default combineReducers({location, weather})