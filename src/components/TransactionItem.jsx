import {AiOutlineQuestionCircle} from 'react-icons/ai';
import MoneyText from './MoneyText';

export default function TransactionItem() {
  return (
    <li className='flex items-center justify-between mb-3 py-2 px-4 rounded-lg'>
      <div className='flex items-center'>
        <AiOutlineQuestionCircle className='w-8 h-8'/>
        <div className='ml-3'>
        <h1 className='text-base font-bold'>McDonalds</h1>
        <span className='text-xs'>12/08/22 18:32</span>
      </div>
      </div>
      <div className="badge badge-outline badge-primary mb-1 text-xs">NuBank</div>
      <div className='flex flex-col'>        
        <MoneyText value="20,00" className='text-xs' type="in"/>
      </div>
    </li>
  )
}
