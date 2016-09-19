import {FETCH_POPULAR_FILMS} from '../actions/types';

export default function(state = [], action) {

  switch (action.type) {
    case FETCH_POPULAR_FILMS:
      console.log(action);
      return action.payload.data.results;
  }

  return state;
}
