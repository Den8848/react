import './App.css';
import React from "react";

function App() {
  return (

      <div>
        <h1 className="App-title">
          Hello World!
        </h1>

        <form action="#" className="App__form form">
          <div className="form__login">
            <label className="form__login-label">Login:</label>
            <input type="text" className="form__login-input"/>
          </div>

          <div className="form__password">
            <label className="form__password-label">Password:</label>
            <input type="password" className="form__password-input"/>
          </div>

          <button className="form__submit-button">Submit</button>
        </form>
      </div>

  );
}

export default App;
