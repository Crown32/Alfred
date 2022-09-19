import {useState, createContext, useContext} from 'react';

const ShowMoneyContext = createContext({
  showMoney: false,
  setShowMoney: () => {}
});

export const useShowMoney = () => useContext(ShowMoneyContext);

export function ShowMoneyContextProvider({children}) {
  const [showMoney, setShowMoney] = useState(null);

  return (
    <ShowMoneyContext.Provider value={{showMoney, setShowMoney}}>
      {children}
    </ShowMoneyContext.Provider>
  );
}