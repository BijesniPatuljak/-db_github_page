import React from 'react';
import './App.css';
import './assets/stylesheets/backdrop.scss';
import Navigation from './components/navigation';
import Homepage from './pages/homepage';
import Links from './components/links';

function App() {
  return (
    <div className="backdrop">
      <div className="App">
        <Navigation/>
        <Homepage/>
        <Links/>
      </div>
    </div>
  );
}

export default App;
