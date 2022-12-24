import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss'
import reportWebVitals from './reportWebVitals';
import {
  HashRouter as Router, // use HashRouter instead of BrowserRouter to solve url problem in github if not in Firebase
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
    <Router>
      <Navbar />
      <HomeLinks />
      <Routes>
        {/* <Route path='/homePageLinks' element={<HomeLinks />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/aboutMe' element={<AboutMe />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
