import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './components/App';

import user from './reducers';

const store= createStore(user);
console.log(store);
ReactDOM.render(
    <App store={store} />
,
  document.getElementById('root')
);

