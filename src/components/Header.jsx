import Avatar from './Avatar'
import {FiEye, FiEyeOff} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { useShowMoney } from '../contexts/ShowMoneyContext';
import MoneyText from './MoneyText';

export default function Header(props) {
  const {showMoney, setShowMoney} = useShowMoney()

  function handleShowMoney() {
    setShowMoney(!showMoney);
  }

  return (
    <header className='h-32 w-screen bg-base-200 flex'>
      <div className="form-control w-48 ml-4 mt-2">
        <label className="label">
          <span className="label-text text-base font-bold">Seu saldo</span>
        </label>
        <div className='ml-1 flex flex-row'>
          <MoneyText className="text-2xl w-full bg-base-200 font-semibold" value="1.000,00"/>
        </div>
        <label className="label">
          <span className="label-text-alt text-xm text-primary"><Link to="/transactions">Ver transaçoes</Link></span>
        </label>
      </div>
        {showMoney?
          <FiEyeOff className='text-gray-500 cursor-pointer absolute top-7 right-[90px] w-5 h-5' onClick={handleShowMoney}/>
        :
          <FiEye className='  text-gray-500 cursor-pointer absolute top-7 right-[90px] w-5 h-5' onClick={handleShowMoney}/>
        }
      <Avatar/>
    </header>
  )
}
