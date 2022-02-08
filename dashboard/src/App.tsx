import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import SignUp from '../src/components/SignUp';
import SignIn from '../src/components/SignIn';
import StartPage from '../src/components/StartPage';

function App(): JSX.Element {
  return (
    <div>
      <Router>
          <Routes>
              <Route path="/" element={<StartPage/>}/>
              <Route path="/sign-in" element={<SignIn/>}/>
              <Route path="/sign-up" element={<SignUp/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App;
