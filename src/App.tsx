import React from 'react';
import './App.css';
import './assets/stylesheets/backdrop.scss';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Links from './components/links';
import Navigation from './components/navigation';
import PagePanel from './pages/pagePanel';

function App() {
  return (
    <BrowserRouter>
      <div className="backdrop">
        <div className="App">
          <Navigation/>
          <Routes>
            <Route
                path="/"
                element={<PagePanel pageInNavigation="Homepage"/>}
            />
            <Route
                path="/homepage"
                element={<PagePanel pageInNavigation="Homepage"/>}
            />
            <Route
                path="/about"
                element={<PagePanel pageInNavigation="About"/>}
            />
            <Route
                path="/education"
                element={<PagePanel pageInNavigation="Education"/>}
            />
            <Route
                path="/code"
                element={<PagePanel pageInNavigation="Code"/>}
            />
            <Route
                path="/contact"
                element={<PagePanel pageInNavigation="Contact"/>}
            />
          </Routes>
          <Links/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
