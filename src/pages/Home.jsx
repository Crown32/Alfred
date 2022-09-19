import Header from '../components/Header';
import PlanningList from '../components/BudgetList';
import TransactionList from '../components/TransactionList';

export default function Home() {

  return (
    <div>
      <Header />
      <PlanningList />
      <TransactionList />
    </div>
    
  )
}
