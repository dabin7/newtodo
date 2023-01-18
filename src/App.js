import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Today from './pages/today';
import Month from './pages/month';
import Year from './pages/year';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Today />} />
        <Route path='month' element={<Month />} />
        <Route path='year' element={<Year />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
