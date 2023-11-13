import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import AuthPage from './pages/Register'

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
