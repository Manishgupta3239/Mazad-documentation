import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

let savedTheme = null
try {
  savedTheme = window.localStorage.getItem('mazad-docs-theme')
} catch {
  savedTheme = null
}

const prefersDark = window.matchMedia
  ? window.matchMedia('(prefers-color-scheme: dark)').matches
  : false
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light')
document.documentElement.setAttribute('data-theme', initialTheme)
document.documentElement.classList.remove('no-js')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
