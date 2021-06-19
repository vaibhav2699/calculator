import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Task from "./components/Task";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
