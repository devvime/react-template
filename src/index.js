import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Login from '@pages/login/login';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>
);