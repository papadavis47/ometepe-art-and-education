import { createContext, useContext, useState } from 'react';

type AppContextType = {
  spanish: boolean;
  toggleSpanish: () => void;
};

export const AppContext = createContext<AppContextType>({
  spanish: false,
  toggleSpanish: () => {},
});

export function ContextWrapper({ children }) {
  const [spanish, setSpanish] = useState(false);

  const toggleSpanish = () => {
    setSpanish(!spanish);
  };

  let sharedState = {
    spanish,
    toggleSpanish,
  };

  return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
