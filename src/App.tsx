import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Calcolator } from './components/calculator/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calcolator></Calcolator>
      </header>
    </div>
  );
}

export default App;
