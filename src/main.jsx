import { createContext, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import ProtectedRouter from './Protected/ProtectedRoute.jsx'
import Chat from './components/Chat.jsx'
import Login from './auth/Login.jsx'
import Projects from './components/Projects.jsx'
import Profile from './components/Profile.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/projects', element: <Projects /> },
      {
        path: '/profile',
        element: ( 
          <ProtectedRouter>
            <Profile />
          </ProtectedRouter> 
        )
      },
      {
        path: '/chat',
        element: ( 
          <ProtectedRouter>
            <Chat />
          </ProtectedRouter> 
        )
      },
    ]
  },
  { path: '/login', element: <Login /> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
