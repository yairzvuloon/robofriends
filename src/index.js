import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cards from './Cards';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { robots } from './robots';

ReactDOM.render(
  <React.StrictMode>
    <Cards robots={robots} />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.register();
