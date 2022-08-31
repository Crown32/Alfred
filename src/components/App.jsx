import { AuthContextProvider } from '../contexts/AuthContext'
import Signup from './auth/Signup'

export default function App(pros) { 
  return (
    <AuthContextProvider>
      <Signup></Signup>
    </AuthContextProvider>
  )
 }