import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Functionarios from './pages/funcionarios';

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/funcionarios" element={<Functionarios />} />
    </Routes>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
