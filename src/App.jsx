import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext'
import { AlertContextProvider } from './contexts/AlertContext'
import Alert from './components/Alert'
import Home from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute'

import Signup from './pages/Signup'
import Login from './pages/Login'

export default function App(pros) { 
  return (
    <AuthContextProvider>
      <AlertContextProvider>
        <Router>
          <Routes>
            <Route path="/signup" element={<ProtectedRoute><Signup /></ProtectedRoute>} />
            <Route path="/login" element={<ProtectedRoute><Login /></ProtectedRoute>} />
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          </Routes>
        </Router>
        <Alert/>
      </AlertContextProvider>
    </AuthContextProvider>
  )
 }
