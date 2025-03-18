import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { Notesprovider } from './Context/notescontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Notesprovider>
    <App />
    </Notesprovider>

    </BrowserRouter>
    
  </StrictMode>,
)
