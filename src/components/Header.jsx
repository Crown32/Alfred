import Avatar from './Avatar'
import {FiEye, FiEyeOff} from 'react-icons/fi'
import {useState} from 'react'

export default function Header(props) {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <header className='h-32 w-screen bg-base-200 flex'>
      <div className="form-control w-40 ml-4 mt-2">
        <label className="label">
          <span className="label-text text-base font-bold text-primary">Seu saldo</span>
        </label>
        <div className='ml-1 flex flex-row'>
          <input type={showPassword?"text":"password"} value={"1.000,00"} className="pointer-events-none text-2xl w-full bg-base-200" />
        </div>
        <label className="label">
          <span className="label-text-alt text-xm">Ver transaçoes</span>
        </label>
      </div>
        {showPassword?
          <FiEyeOff className='text-gray-500 cursor-pointer absolute top-7 right-[90px] w-5 h-5' onClick={handleShowPassword}/>
        :
          <FiEye className='  text-gray-500 cursor-pointer absolute top-7 right-[90px] w-5 h-5' onClick={handleShowPassword}/>
        }
      <Avatar/>
    </header>
  )
}

//TODO: Arrumar a responsividade do valor do saldo