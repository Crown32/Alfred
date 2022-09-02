import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom';

import {FaUserAlt} from 'react-icons/fa';
import {AiOutlineUser} from 'react-icons/ai';
import {BiLogOut, BiCog} from 'react-icons/bi';

export default function Avatar(props) {

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  }
  
  return (
    <div className="dropdown dropdown-end absolute right-3 top-3">
      <label tabIndex="0" >    
        <div className="avatar placeholder">
          <div className="bg-base-300 text-neutral-content rounded-full w-14">
            <span className="text-2xl"><FaUserAlt className='text-gray-500 opacity-80'></FaUserAlt></span>
          </div>
        </div> 
      </label>
    <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36">
      <li><Link to="/perfil"><AiOutlineUser className='w-5 h-5'/>Perfil</Link></li>
      <li><Link to="/"><BiCog className='w-5 h-5'/>Ajustes</Link></li>
      <li></li>
      <li className='text-error'><Link onClick={handleLogout} to="/login"><BiLogOut className='w-5 h-5'/>Sair</Link></li>
    </ul>
  </div>
  )
}

//TODO: Colocar icone para troca de tema