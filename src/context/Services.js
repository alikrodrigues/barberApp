import React, {createContext, useState, useContext} from 'react';

const ServicesContext = createContext();

export default function ServicesProvider({children}) {
  const [services, setServices] = useState([]);

  return (
    <ServicesContext.Provider value={{services, setServices}}>
      {children}
    </ServicesContext.Provider>
  );
}

export function useServicesList() {
  const context = useContext(ServicesContext);
  const {services, setServices} = context;
  return {services, setServices};
}
