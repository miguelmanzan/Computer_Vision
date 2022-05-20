import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './css/bootstrap.min.css';
import './css/assets/animate.min.css';
import './css/assets/animate-headline.css';
import './css/default.css';
import './css/style.css';

import App from './App';
import Home from "./views/Home";
import Dataset from "./views/Dataset";
import Preprocessing from "./views/Preprocessing";
import Training from "./views/Training";
import Prediction from "./views/Prediction";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dataset" element={<Dataset />} />
        <Route path="preprocessing" element={<Preprocessing />} />
        <Route path="training" element={<Training />} />
        <Route path="prediction" element={<Prediction />} />
      </Routes>
      <script src="js/vendor/jquery-3.2.1.min.js"></script>
      <script src="js/plugins.js"></script>
      <script src="js/custom.js"></script>
    </BrowserRouter>
  </React.StrictMode>
);

