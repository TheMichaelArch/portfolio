import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.module.scss'
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home/homePage';
import HomeLinks from './components/home/homePageLinks'
import Navbar from './components/navbar/navbar';
import AboutMe from './components/aboutMe/aboutMe';
import Contacts from './components/contacts/contacts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/homePage' element={<Home />} />
        <Route path='/homePageLinks' element={<HomeLinks />} />
        <Route path='/aboutMe' element={<AboutMe />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
