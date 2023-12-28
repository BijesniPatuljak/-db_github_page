import React from 'react';
import './App.css';
import './assets/stylesheets/backdrop.scss';
import Navigation from './components/navigation';
import Links from './components/links';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
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
                          element={<PagePanel page='Homepage'/>}
                      />
                      <Route
                          path="/education"
                          element={<PagePanel page='Education'/>}
                      />
                      <Route
                          path="/contact"
                          element={<PagePanel page='Contact'/>}
                      />
                  </Routes>
          <Links/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
