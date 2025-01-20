import React, { createContext, ReactNode, useState } from 'react';

interface DropdownContextProps {
  openDropdownId: string | null;
  setOpenDropdownId: (id: string | null) => void;
}

interface DropdownProviderProps {
  children: ReactNode;
}

export const DropdownContext = createContext<DropdownContextProps | undefined>(
  undefined
);

export const DropdownProvider: React.FC<DropdownProviderProps> = ({
  children,
}) => {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  return (
    <DropdownContext.Provider value={{ openDropdownId, setOpenDropdownId }}>
      {children}
    </DropdownContext.Provider>
  );
};
