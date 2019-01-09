import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// Alert the instructions.
setTimeout(function () {
    alert("Instructions: Don't pick the same character twice, pick all twelve characters and win the game. Good luck!");
}, 1500);

ReactDOM.render(<App />, document.getElementById('root'));
