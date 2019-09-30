import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import * as serviceWorker from './serviceWorker';



const users = ["Amine", "Julie", "Kevin"];
const title = "Integration Week-End";
const rows = [
    {"owner" : users[0], "name": "Burger", "price" : 45.0},
    {"owner" : users[1], "name": "Cinema", "price" : 35.0},
    {"owner" : users[2], "name": "Escape Game", "price" : 70.0},
    {"owner" : users[0], "name": "Playing cards", "price" : 6.0},
    {"owner" : users[2], "name": "Drought beers", "price" : 120.0},
    {"owner" : users[0], "name": "Costumes", "price" : 150.0},
    {"owner" : users[1], "name": "Cleaning stuff", "price" : 80.0},
    {"owner" : users[1], "name": "Tequila", "price" : 22.0},
    {"owner" : users[1], "name": "Shooters", "price" : 50.0}
    ];

const element = <App rows={rows} users = {users} title={title}/>;

ReactDOM.render(element, document.getElementById('root'));

serviceWorker.unregister();
