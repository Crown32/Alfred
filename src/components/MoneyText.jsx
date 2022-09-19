import { useShowMoney } from '../contexts/ShowMoneyContext';

export default function MoneyText({className, value, type}) {
  const {showMoney} = useShowMoney()
  return(
    <span className={`${type === "out"  && showMoney ? "text-red-500" : ""} ${type === "in"  && showMoney ? "text-green-500" : ""} ${className}`}>
      {type === 'out' && showMoney ? '- ' : ''}
      {type === 'in' && showMoney ? '+ ' : ''}
      {showMoney? `R$ ${value}` : '•••••'}
    </span>
  )
}