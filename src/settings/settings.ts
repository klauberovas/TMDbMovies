import { createContext, useContext } from 'react';

interface LanguageContextType {
  language: string;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'cs-CZ',
});
export const useLanguageContext = () => useContext(LanguageContext);
