import {useState, useCallback, createContext, useContext} from 'react';

const alertContext = createContext({
  alert: null,
  addAlert: () => {},
  removeAlert: () => {}
});

export const useAlert = () => useContext(alertContext);

export function AlertContextProvider({children}) {
  const [alert, setAlert] = useState(null);
  const removeAlert = useCallback(() => setAlert(null), []);
  const showAlert = useCallback(alert => setAlert(alert), []);

  return (
    <alertContext.Provider value={{alert, showAlert, removeAlert}}>
      {children}
    </alertContext.Provider>
  );
}