import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link, Route, IndexRoute, browserHistory } from 'react-router';
import {
  cognito,
  configure,
  ChangePassword,
} from 'react-cognito';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './App.jsx';
import Dashboard from './Dashboard.jsx';
import ChangePasswordForm from './ChangePasswordForm.jsx';

const reducers = combineReducers({
  cognito,
});
const store = createStore(
  reducers,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(configure({
  region: 'eu-west-1',
  userPool: 'eu-west-1_4bpnxxQKX',
  identityPool: 'eu-west-1:3e151c70-ad45-4e36-8b87-f0125da6c13e',
  clientId: '7oc1qboh1jldlrd929ksv7cgta',
}));

const changePassword = () => (
  <div>
    <ChangePasswordForm />
    <Link to="/">Home</Link>
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="/change_password" component={changePassword} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
