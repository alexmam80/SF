import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter  } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './styles.css'
import './i18n'
import i18n from 'i18next'

// menține atributul lang sincronizat
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng || 'ro'
})
document.documentElement.lang = i18n.language || 'ro'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </HelmetProvider>
  </React.StrictMode>
)
