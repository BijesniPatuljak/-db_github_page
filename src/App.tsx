import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import Homepage from './pages/homepage';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Homepage/>
    </div>
  );
}

export default App;
