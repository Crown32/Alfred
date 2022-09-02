import TransactionItem from './TransactionItem'
import { Link } from 'react-router-dom'

export default function TransactionList() {
  return(
    <div className='w-screen p-5'>
      <div className='mb-3 flex w-full justify-between items-baseline'>
        <h1 className='text-lg font-bold'>Suas últimas transações</h1>
        <Link to="/plannings" className='text-xs text-primary'>Todas transações</Link>
      </div>
      <ul className=' pt-4 pb-2 rounded-lg bg-base-200'>
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
      </ul>
    </div>
  )
}