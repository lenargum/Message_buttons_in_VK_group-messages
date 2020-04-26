import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


if (window.location.href.indexOf("vk.com/gim") !== -1) {
    const anchor = document.createElement('div');
    anchor.id = 'extension-root';
    document.getElementsByClassName("im-chat-input--txt-wrap _im_text_wrap")[0].appendChild(anchor);
    ReactDOM.render(<App/>, document.getElementById('extension-root'));
    //document.getElementsByClassName("im-chat-history-resize--track _im_chat_resize_track")[0].dispatchEvent(new Event("touchstart"));
    // todo: find how to fix problem with input-textbox rendering above the last messages.
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
