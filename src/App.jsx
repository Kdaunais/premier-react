import React from 'react';
import './App.css';
import Header from './components/header/Header';
import About from './components/pages/About';


function App() {
  return (
    <div className='page-wrapper'>
      <Header></Header>
      <About/>
    </div>
  );
}

export default App;
