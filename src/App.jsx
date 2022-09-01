import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext'
import { AlertContextProvider } from './contexts/AlertContext'
import Alert from './components/Alert'

import Signup from './pages/Signup'
import Login from './pages/Login'

export default function App(pros) { 
  return (
    <AuthContextProvider>
      <AlertContextProvider>
        <Router>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
        <Alert/>
      </AlertContextProvider>
    </AuthContextProvider>
  )
 }
