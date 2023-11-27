import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReduxContext from './store/context';
import store from './store/index';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ReduxContext.Provider value={store}>
        <App />
    </ReduxContext.Provider>
)
