
// src/components/Login.jsx
import React, { useState } from "react";
import { login } from "../services/authService";
import "./Login.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await login(email, password);
      onLogin(); // avisar app que logou
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-logo" style={{ marginTop: 100 }}>VandaSoft</div>
        <h2>Bem-vindo de volta!</h2>
        <p>Por favor, insira os detalhes de login abaixo</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Digite seu email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <label>Senha</label>
          <div className="password-field">
            <input
              type="password"
              placeholder="Digite sua senha"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <span className="toggle-visibility"></span>
          </div>

          {error && <p className="error-message">{error}</p>}

          <div className="login-options">
            <a href="#">Esqueceu a senha?</a>
          </div>

          <button type="submit" className="login-button">Entrar</button>
        </form>
      </div>

      <div className="login-right">
        <div className="info">
          <h2>Sistema para gerenciamento personalizado</h2>
          <p>Otimizar seus processos de inventário, reduzir custos e aumentar a produtividade</p>
        </div>
        <div className="mockup"></div>
      </div>
    </div>
  );
}

export default Login;
