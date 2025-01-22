// components/MenuItem.tsx
import React from 'react';

interface MenuItemProps {
  icon: React.ReactNode; // Accepts any icon or element as an icon
  label: string; // Label for the menu item
  active?: boolean; // Indicates if the menu item is active
  onClick?: () => void; // Function to be called when the menu item is clicked
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  label,
  active = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer 
        ${active ? 'text-black font-bold' : 'text-gray-800 hover:bg-gray-300 hover:text-gray-900'}`}
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default MenuItem;
