import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './router/router';
import AuthProvider from './Povider/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <div className='PT-Sans'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>

  </StrictMode>,
)
