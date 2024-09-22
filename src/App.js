import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

const App = () => {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home mode={mode} setMode={setMode}/>} />
        <Route path='/about' element={<About mode={mode} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
