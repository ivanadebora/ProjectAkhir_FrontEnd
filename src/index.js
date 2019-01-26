import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import './supports/css/bootstrap.min.css';
import './supports/css/style.css';
import './supports/form-regis/css/style1.css'
import './supports/lib/font-awesome/css/font-awesome.css';
import './supports/fontawesome-free/css/fontawesome.css';





ReactDOM.render(
    <BrowserRouter>
            <App />
        </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();