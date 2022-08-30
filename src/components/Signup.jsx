import {FiAtSign,FiLock, FiEye, FiEyeOff, FiUser} from 'react-icons/fi';
import { useState, useRef } from 'react';
import LoginLayout from './LoginLayout';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
      <LoginLayout>
        <h1 className='text-4xl ml-5 mb-2 font-bold'>Registre-se</h1>
        <form action="#" className='w-screen p-5'>
          <div className='form-control w-full mas-w-xs flex flex-row items-end'>
            <FiUser className='w-6 h-6 mr-3 text-gray-400'></FiUser>
            <input ref={nameRef} type="text" placeholder='Nome' className='input w-full max-w-sm border-b-2 border-black border-0 rounded-none focus:rounded-md focus:text-base transition-all' required/>
          </div>
          <div className='form-control w-full mas-w-xs mt-6 flex flex-row items-end'>
            <FiAtSign className='w-6 h-6 mr-3 text-gray-400'></FiAtSign>
            <input ref={emailRef} type="email" placeholder='Email' className='input w-full max-w-sm border-b-2 border-black border-0 rounded-none focus:rounded-md focus:text-base transition-all' required/>
          </div>
          <div className='form-control w-full mas-w-xs mt-6 flex flex-row items-end relative'>
            <FiLock className='w-6 h-6 mr-3 text-gray-400'></FiLock>
            <input ref={passwordRef} type={showPassword?"text":"password"} placeholder='Senha' className='input w-full max-w-sm border-b-2 border-black border-0 rounded-none focus:rounded-md focus:text-base transition-all' required/>
            {showPassword?
              <FiEyeOff className='absolute top-5 right-2 text-gray-500 cursor-pointer' onClick={handleShowPassword}></FiEyeOff>
              :
              <FiEye className='absolute top-5 right-2 text-gray-500 cursor-pointer' onClick={handleShowPassword}></FiEye>
            }
          </div>
          <button className='btn btn-primary btn-block mt-7'>Registrar</button>
        </form>
        <div className='w-screen items-center justify-center flex'>
          <small className=''>Já possui uma conta?</small>
          <small className='text-blue-600 ml-1 font-bold'>
            <a href="/login">Acesse</a>
          </small>
        </div>
      </LoginLayout>
    );
} 