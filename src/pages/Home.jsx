import Header from '../components/Header';
import PlanningList from '../components/BudgetList';
import TransactionList from '../components/TransactionList';
import BottomNav from '../components/BottomNav';

export default function Home() {

  return (
    <div>
      <Header />
      <PlanningList />
      <TransactionList />
      <BottomNav />
    </div>
    
  )
}
