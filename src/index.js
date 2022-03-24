import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import TodoContainer from './functionBased/components/TodoContainer';
import About from './functionBased/pages/About';
import NotMatch from './functionBased/pages/NotMatch';
import SinglePage from './functionBased/pages/SinglePage';
import Navbar from './functionBased/components/Navbar';

import './functionBased/App.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<TodoContainer />} />
          <Route path="about" element={<About />}>
            <Route path=":about" element={<SinglePage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
