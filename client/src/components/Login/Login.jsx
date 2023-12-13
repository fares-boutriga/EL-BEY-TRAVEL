import React from 'react';
import './Login.css'
function Login() {
  return (
    <div className="overlay">
      <form>
        <header className="head-form">
          <h2>Log In</h2>
          <p>connectez-vous ici en utilisant votre nom d'utilisateur et votre mot de passe</p>
        </header>
        <br />
        <div className="field-set">
          <span className="input-item">
            <i className="fa fa-user-circle"></i>
          </span>
          <input
            className="form-input"
            id="txt-input"
            type="text"
            placeholder="nom d'utilisateur"
            required
          />
          <br />
          <span className="input-item">
            <i className="fa fa-key"></i>
          </span>
          <input
            className="form-input"
            type="password"
            placeholder="Mot de passe "
            id="pwd"
            name="password"
            required
          />
     
        
        </div>

        <div className="other">
          <button className="btn submits frgt-pass">Mot de passe oublié</button>
          <button className="btn submits sign-up">
            Log in <i className="fa fa-user-plus" aria-hidden="true"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
