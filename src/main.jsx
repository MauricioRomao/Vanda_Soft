import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Dashboard from "./Components/Dashboard/Dashboard.jsx" // exemplo de componente pós-login

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Rota pública de login */}
        <Route path="/" element={<App/>} />
        {/* Rota protegida (você pode criar um wrapper de autenticação) */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Você pode montar todo o App com navegação interna */}
        {/* <Route path="/*" element={<App />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
