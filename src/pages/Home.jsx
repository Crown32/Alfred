import { useAuth } from '../contexts/AuthContext'

export default function Home() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  }

  return (
    <div>
      <h1>{user.email}</h1>
      <button className='btn btn-error' onClick={handleLogout}>Logout</button>
    </div>
    
  )
}
