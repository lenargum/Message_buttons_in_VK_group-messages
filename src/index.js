import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const anchor = document.createElement('div');
anchor.id = 'extension-root';
document.getElementsByClassName("im-chat-input--txt-wrap _im_text_wrap")[0].appendChild(anchor);

ReactDOM.render(<App />, document.getElementById('extension-root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
