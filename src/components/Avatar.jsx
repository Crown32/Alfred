import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom';

import {FaUserAlt} from 'react-icons/fa';
import {AiOutlineUser} from 'react-icons/ai';
import {BiLogOut, BiCog} from 'react-icons/bi';

export default function Avatar(props) {

  const { user, logout } = useAuth();

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
      <li><a><AiOutlineUser className='w-5 h-5'/><Link to="/perfil">Perfil</Link></a></li>
      <li><a><BiCog className='w-5 h-5'/>Ajustes</a></li>
      <li></li>
      <li className='text-error' onClick={handleLogout}><a><BiLogOut className='w-5 h-5'/>Sair</a></li>
    </ul>
  </div>
  )
}

//Todo: Arrumar os links dentro das tags <a></a> para evitar redundância
//TODO: Colocar icone para troca de tema