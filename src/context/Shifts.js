import React, {createContext, useState} from 'react';

export const ShiftsContext = createContext();

export const ShiftsProvider = ({children}) => {
  const [shift, setShift] = useState(null);
  const [error, setError] = useState(false);

  const saveShift = shiftSelected => {
    setShift(shiftSelected);
  };

  return (
    <ShiftsContext.Provider value={{shift, saveShift}}>
      {children}
    </ShiftsContext.Provider>
  );
};
