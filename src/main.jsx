import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/Routes'
import { RouterProvider } from 'react-router'
import Interactions from './context/Interactions'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Interactions>
      <RouterProvider router={router} />
      <ToastContainer />
    </Interactions>
  </StrictMode>,
)
