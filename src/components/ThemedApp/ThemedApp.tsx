import PageModeContext, { PageModeContextType } from 'contexts/PageModeContext';
import { useContext, useEffect } from 'react';

const ThemedApp = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
  const { mode } = useContext(PageModeContext) as PageModeContextType;

  useEffect(() => {
    if (mode === 'PHYSIO') {
      document.body.style.backgroundColor = '#010638';
    } else {
      document.body.style.backgroundColor = '#16191c';
    }
  }, [mode]);

  return <>{children}</>;
};

export default ThemedApp;
