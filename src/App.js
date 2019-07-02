import React from 'react';
import logo from './logo.svg';
import {Route, Router} from 'react-router-dom'
import './App.css';
import Routes from './routes/routes'
import 'bootstrap/dist/css/bootstrap.css'
import './assests/fonts/Benyamin.ttf'

function App() {
  return (
    <div>
     <Routes/>
    </div>
  );
}

export default App;
