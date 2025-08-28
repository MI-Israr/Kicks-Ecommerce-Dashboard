import React, { createContext, useState } from "react";
import type { OrderStatus } from "@/Data/recentOrder";

export type AppContextType = {
  filter: OrderStatus | null;
  setFilter: (status: OrderStatus | null) => void;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filter, setFilter] = useState<OrderStatus | null>(null);

  return (
    <AppContext.Provider value={{ filter, setFilter }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
