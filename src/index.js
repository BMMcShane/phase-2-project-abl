import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter } from "react-router-dom";

const port = process.env.PORT || 4000;
const root = ReactDOM.createRoot(document.getElementById('root'));

var corsOptions = {
    origin: 'https://toad-test-abl.herokuapp.com/leaders',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);


