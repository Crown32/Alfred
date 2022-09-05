import { IoFastFoodOutline } from 'react-icons/io5';

export default function PlanningCard() {
    return (
      <div className='card w-full shadow-lg bg-base-200 mb-3 p-4'>
        <div className='flex items-center'>
          <IoFastFoodOutline className='w-8 h-8'/>
          <div className='ml-3 w-full'>
            <div className='flex justify-between items-end'>
              <h1 className='text-sm font-bold'>Alimentação</h1>
              <span className='text-xs font-bold'>R$100,00 restantes</span>
            </div>
            <progress className="progress progress-primary w-full" value="40" max="100"></progress>
            <div>
              <span className='text-xs'>R$100,00</span>
              <span className='text-xs mx-1'>de</span>
              <span className='text-xs'>R$200,00</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  //TODO: Fazer os valores sumirem ao clicar no botão de esconder valores, fazer isso passando o ShowPassword para o component Home e passando direto para o PlanningList, e depois para o PlanningCard e header