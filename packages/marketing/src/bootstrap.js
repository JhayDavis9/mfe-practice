import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function mount (el){
    ReactDOM.render(
        <App>Hello There</App>,
        el
    );

}

if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if(devRoot){
        mount(devRoot);
    }
}

export {mount};