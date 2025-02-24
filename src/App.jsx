import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage.jsx';
import ErrorPage from './components/ErrorPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;