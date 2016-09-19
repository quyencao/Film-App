import { combineReducers } from 'redux';
import FilmsReducers from './filmsReducers';

const rootReducer = combineReducers({
  films: FilmsReducers
});

export default rootReducer;
