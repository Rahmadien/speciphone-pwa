import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import  NavbarComponent  from './components/NavbarComponent';
import Home from './pages/Home';
import About from './pages/About';
import './App.css'
import Specs from './pages/Specs';
import Watch from './pages/Watch';
import SpecsAcc from './pages/SpecsAcc';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <NavbarComponent/>
            <Routes>
              <Route  path="/" element={<Home/>}></Route>
              <Route  path="/about" element={<About/>} />
              <Route  path="/watch" element={<Watch/>} />
              <Route  path="/specs/:id" element={<Specs/>} />
              <Route  path="/specsAcc/:id" element={<SpecsAcc/>} />
              
              </Routes>
      </BrowserRouter>
    )
  }
}
