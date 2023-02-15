import { createContext, useContext, useState } from 'react';

type SpanishContextType = {
  spanish: boolean;
  toggleSpanish: () => void;
};

export const SpanishContext = createContext({ spanish: false, toggleSpanish: () => {} });

export function ContextWrapper({ children }) {
  const [spanish, setSpanish] = useState<boolean>(false);

  const toggleSpanish = () => {
    setSpanish(!spanish);
  };

  let sharedState = {
    spanish,
    toggleSpanish,
  };

  return <SpanishContext.Provider value={sharedState}>{children}</SpanishContext.Provider>;
}

export function useSpanishContext() {
  return useContext(SpanishContext);
}
