import React, {createContext, useState, useContext} from 'react';

export const ServicesContext = createContext();

export const ServicesProvider = ({children}) => {
  const [services, setServices] = useState([]);

  const saveServices = service => {
    const alreadySelected = services.findIndex(item => item.id === service.id);

    if (alreadySelected >= 0) {
      const filteredItems = services.filter(item => item.id !== service.id);
      setServices(filteredItems);
    } else {
      setServices([...services, service]);
    }
  };

  return (
    <ServicesContext.Provider value={{services, saveServices}}>
      {children}
    </ServicesContext.Provider>
  );
};
