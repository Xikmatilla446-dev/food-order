import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import makeInspectable from 'mobx-devtools-mst';
import { setupRootStore } from "./models/store/index";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";


const { rootTree } = setupRootStore();

makeInspectable(rootTree);


ReactDOM.render(
    <Provider rootTree={rootTree}>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
