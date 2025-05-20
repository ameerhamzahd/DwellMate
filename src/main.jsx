import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer, Bounce } from 'react-toastify'
import { RouterProvider } from 'react-router'
import router from './routes/router.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './contexts/AuthProvider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </HelmetProvider>
)
