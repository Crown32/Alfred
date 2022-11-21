import { Link } from 'react-router-dom'
import {AiOutlineHome, AiOutlineCreditCard, AiOutlineUser, AiOutlinePlus} from 'react-icons/ai';
import {BsPiggyBank} from 'react-icons/bs';

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 flex justify-around w-screen h-14 bg-base-300 text-base border-t-2 border-primary">
      <Link to="/" className="flex flex-col items-center justify-center">
        <AiOutlineHome className="w-6 h-6"/>
        <span className="text-xs">Home</span>
      </Link>
      <Link to="/" className="flex flex-col items-center justify-center">
        <AiOutlineCreditCard className="w-6 h-6"/>
        <span className="text-xs">Orçamentos</span>
      </Link>
      <button className="btn btn-primary btn-circle -mt-6 w-14 h-14">
        <AiOutlinePlus className="w-6 h-6"/>
      </button>
      <Link to="/" className="flex flex-col items-center justify-center">
        <AiOutlineUser className="w-6 h-6"/>
        <span className="text-xs">Insights</span>
      </Link>
      <Link to="/" className="flex flex-col items-center justify-center">
        <BsPiggyBank className="w-6 h-6"/>
        <span className="text-xs">Porquinho</span>
      </Link>
    </div>
  )
}