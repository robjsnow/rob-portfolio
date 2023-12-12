import React from 'react';
import Header from './components/Header/header';
import './App.css';
import './fonts/fonts.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
