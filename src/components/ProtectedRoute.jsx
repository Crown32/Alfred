
import {useNavigate} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }else{
      navigate('/');
    }
  }
  //Else aqui para que o usuário logado não acesse o login e o signup

  , [navigate,user]);
  return <>{user ? children : null}</>;

}