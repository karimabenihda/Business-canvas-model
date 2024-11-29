import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BmcComponent from './BmcComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BmcComponent />
  </StrictMode>,
)
