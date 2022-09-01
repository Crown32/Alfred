import {FiAtSign,FiLock, FiEye, FiEyeOff} from 'react-icons/fi';
import { useState, useRef } from 'react';
import LoginLayout from '../components/LoginLayout';
import { useAuth } from '../contexts/AuthContext';
import {useNavigate, Link} from 'react-router-dom';
import {useAlert} from '../contexts/AlertContext';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const {showAlert} = useAlert();
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      showAlert({
        message: "Erro ao fazer login, verifique seus dados",
        type: 'error'
      });
    }
  }

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
      <LoginLayout>
        <h1 className='text-4xl ml-5 mb-3 font-bold'>Login</h1>
        <form action="#" className='w-screen p-5'>
          <div className='form-control w-full mas-w-xs flex flex-row items-end'>
            <FiAtSign className='w-6 h-6 mr-3 text-gray-400'></FiAtSign>
            <input ref={emailRef} type="email" placeholder='Email' className='input w-full max-w-sm border-b-2 border-black border-0 rounded-none focus:rounded-md focus:text-base transition-all'/>
          </div>
          <div className='form-control w-full mas-w-xs mt-6 flex flex-row items-end relative'>
            <FiLock className='w-6 h-6 mr-3 text-gray-400'></FiLock>
            <input ref={passwordRef} type={showPassword?"text":"password"} placeholder='Senha' className='input w-full max-w-sm border-b-2 border-black border-0 rounded-none focus:rounded-md focus:text-base transition-all'/>
            <label className='label absolute top-14 right-1'>
              <span className='label-text-alt text-blue-600 font-bold'>Esqueceu sua senha?</span>
            </label>
            {showPassword?
              <FiEyeOff className='absolute top-5 right-2 text-gray-500 cursor-pointer' onClick={handleShowPassword}></FiEyeOff>
              :
              <FiEye className='absolute top-5 right-2 text-gray-500 cursor-pointer' onClick={handleShowPassword}></FiEye>
            }
          </div>
          <div className='form-control w-full mas-w-xs mt-6 flex flex-row items-end'>
            <label className='flex mt-4'>
              <input type="checkbox" className='checkbox checkbox-primary'/>
              <span className='label-text ml-4 mt-[2px]'>Lembre-se de mim</span>
            </label>
          </div>
          <button type='submit' className='btn btn-primary btn-block mt-8' onClick={handleSubmit}>Entrar</button>
        </form>
        <div className='w-screen items-center justify-center flex'>
          <small className=''>Ainda não possui uma conta? </small>
          <small className='text-blue-600 ml-1 font-bold'>
            <Link to="/signup">Registre-se</Link>
          </small>
        </div>
      </LoginLayout>
    );
} 
