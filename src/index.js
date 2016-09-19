import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import FilmsDetail from './components/filmsDetails';
import App from './components/app';
import reducers from './reducers';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={App} />
        <Route path="/film/:id" component={FilmsDetail}/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
