import React from 'react';
import { Routes, Route } from 'react-router';
import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/logo.png';
import MainPage from './pages/MainPage';
import NewPage from './pages/NewPage';
import SharePage from './pages/SharePage';

export default function App() {
  return (
      <div className='container'>
        <div className='header'>
          <img src={logo} id="logo" alt="img" />
        </div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/new" element={<NewPage />} / >
          <Route path="/share" element={<SharePage />} />
        </Routes>
      </div>
  );
}