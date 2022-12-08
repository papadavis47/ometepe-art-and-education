import { createContext, useContext, useState } from 'react';

// interface AppContextInterface {
// spanish: boolean;
// }

const AppContext = createContext(null);

export function ContextWrapper({ children }) {
  const [spanish, setSpanish] = useState(false);

  const toggleSpanish = () => {
    setSpanish(!spanish);
  };
  let sharedState = {
    spanish,
    setSpanish,
    toggleSpanish,
  };

  return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
