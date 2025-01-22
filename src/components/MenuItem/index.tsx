// components/MenuItem.tsx
import React from 'react';

export interface MenuItemProps {
  icon: React.ReactNode; // Accepts any icon or element as an icon
  label: string; // Label for the menu item
  active?: boolean; // Indicates if the menu item is active
  onClick?: () => void; // Function to be called when the menu item is clicked
  color?: string; // Color of the menu item
  visible?: boolean; // Indicates if the menu item is visible

  hoverColor?: string; // Color of the menu item when hovered
  hoverBg?: string; // Background color of the menu item when hovered
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  label,
  active = false,
  onClick,
  color = 'black',
  hoverColor = 'gray-900',
  hoverBg = 'gray-300',
  visible = true,
}) => {
  if (!visible) {
    return null;
  }

  return (
    <div
      onClick={onClick}
      className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer
        ${active ? `text-${color} font-bold` : `text-${color} hover:bg-${hoverBg} hover:text-${hoverColor}`}`}
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default MenuItem;
