import React from 'react';
import ReactDOM from 'react-dom/client';
import C from  './App.js';
import A from './component/Button.js';
import B from './component/Joke.js';
import './component/Button.css';
import  './component/Joke.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
<BrowserRouter>
<Routes>
<Route path="/" element={<B/>}></Route>
<Route path="/Button" element={<A/>}></Route>
<Route path="/App" element={<C/>}></Route>
</Routes>
</BrowserRouter>
 </>
);


reportWebVitals();
