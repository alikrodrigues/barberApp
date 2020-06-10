import React, {createContext, useState} from 'react';

export const ProfessionalContext = createContext();

export const ProfessionalProvider = ({children}) => {
  const [professional, setProfessional] = useState(null);

  const saveProfessional = selectedProfessional => {
    setProfessional(selectedProfessional);
  };

  return (
    <ProfessionalContext.Provider value={{professional, saveProfessional}}>
      {children}
    </ProfessionalContext.Provider>
  );
};
