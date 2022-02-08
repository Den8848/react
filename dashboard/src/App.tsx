import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignUp from '../src/components/SignUp';
import SignIn from '../src/components/SignIn';
import StartPage from '../src/components/StartPage';
import Dashboard from "./components/Dashboard";

function App(): JSX.Element {
  return (
    <div>
      <Router>
          <Routes>
              <Route path="/" element={<StartPage/>}/>
              <Route path="/sign-in" element={<SignIn/>}/>
              <Route path="/sign-up" element={<SignUp/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App;
