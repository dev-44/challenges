import React from 'react'
import ReactDOM from 'react-dom/client'
import Game from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ margin: 'auto'}}>
      <Game />
    </div>
  </React.StrictMode>,
)
