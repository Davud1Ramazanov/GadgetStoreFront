import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignAdmin from './Pages/SignAdmin';
import Registration from './Pages/Registration';
import MainMenu from './Pages/MainMenu';
import CategoryTables from './Pages/CategoryTables';
import SignManager from './Pages/SignManager';
import PhonesCategory from './Pages/PhonesCategory';
import LaptopCategory from './Pages/LaptopCategory';
import SmartWatchCategory from './Pages/SmartWatchCategory';
import CardUpload from './Pages/CardUpload';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/menu' element={<MainMenu />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/table' element={<CategoryTables />}></Route>
        <Route path='/admin' element={<SignAdmin />}></Route>
        <Route path='/manager' element={<SignManager />}></Route>
        <Route path='/phones' element={<PhonesCategory />}></Route>
        <Route path='/laptops' element={<LaptopCategory />}></Route>
        <Route path='/smartwatches' element={<SmartWatchCategory />}></Route>
        <Route path='/card' element={<CardUpload />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
