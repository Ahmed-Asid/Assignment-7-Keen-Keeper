import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/Routes'
import { RouterProvider } from 'react-router'
import Interactions from './context/Interactions'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Interactions>
      <RouterProvider router={router} />
    </Interactions>
  </StrictMode>,
)
