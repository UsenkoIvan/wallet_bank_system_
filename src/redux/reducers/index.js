import { combineReducers } from 'redux';
import ui from './ui/index';
import app from './app';
import domain from './domain';

export default combineReducers({
  // ui,
  app,
  domain,
});
