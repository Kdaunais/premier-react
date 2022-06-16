import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import AuthProvider from './context/AuthProvider';
import Navbar from './components/navbar/Navbar';
import Star from './components/star/Star';


ReactDOM.createRoot(document.getElementById('root')).render(


    <BrowserRouter>
      <App />
      <Star />
      <AuthProvider>
        <Routes>
            <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
);


