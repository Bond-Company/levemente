import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <App path={window.location.pathname} />
  </StrictMode>
)

// Em produção o HTML já vem pré-renderizado; em desenvolvimento a raiz está vazia.
if (container.hasChildNodes()) hydrateRoot(container, app)
else createRoot(container).render(app)
