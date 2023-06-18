import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DataProvider from './components/DataProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
      <App />
  </DataProvider>
)
