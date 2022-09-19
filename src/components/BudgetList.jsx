import { Link } from 'react-router-dom'
import PlanningCard from './BudgetCard'

export default function BudgetList() {
  return (
    <div className='w-screen p-5'>
      <div className='mb-3 flex w-full justify-between items-baseline'>
        <h1 className='text-lg font-bold'>Seus orçamentos</h1>
        <Link to="/plannings" className='text-xs text-primary'>Todos orçamentos</Link>
      </div>
      <PlanningCard />
      <PlanningCard />
      <PlanningCard />
      <PlanningCard />
    </div>
  )
}