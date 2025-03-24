import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import PasswordGen  from './PasswordGen.jsx'
import FetchingProduct from './fetchingProduct.jsx'
import TypeSpeedTracker from './TypeSpeedTracker.jsx'
import EcomTask from './EcomTask.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App  /> */}
    {/* < PasswordGen /> */}
    < FetchingProduct/>
    {/* <TypeSpeedTracker/> */}
    {/* <EcomTask/> */}

  </StrictMode>,
)
