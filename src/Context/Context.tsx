import React, { createContext } from "react";

export type AppContextType = {
  // Extend later if needed
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppProvider;
