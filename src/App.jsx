import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext'
import { AlertContextProvider } from './contexts/AlertContext'
import { ShowMoneyContextProvider } from './contexts/ShowMoneyContext'
import Alert from './components/Alert'
import Home from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute'

import Signup from './pages/Signup'
import Login from './pages/Login'

export default function App(pros) { 
  return (
    <AuthContextProvider>
      <AlertContextProvider>
        <ShowMoneyContextProvider>
          <Router>
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            </Routes>
          </Router>
        </ShowMoneyContextProvider>
        <Alert/>
      </AlertContextProvider>
    </AuthContextProvider>
  )
 }
