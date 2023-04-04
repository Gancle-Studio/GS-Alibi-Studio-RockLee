import { createContext, useState } from 'react';

export type PageModeContextType = {
  mode: 'PHYSIO' | 'TRAININGS';
  handleThemeChange: (_mode: 'TRAININGS' | 'PHYSIO') => void;
};

const PageModeContext = createContext<PageModeContextType | null>(null);
PageModeContext.displayName = 'PageModeContext';

const PageModeProvider = ({
  children
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  const [mode, setMode] = useState<'PHYSIO' | 'TRAININGS'>('TRAININGS');

  const handleThemeChange = (_mode: 'TRAININGS' | 'PHYSIO') => {
    setMode(_mode);
  };

  return (
    <PageModeContext.Provider value={{ mode, handleThemeChange }}>
      {children}
    </PageModeContext.Provider>
  );
};

export { PageModeProvider };
export default PageModeContext;
