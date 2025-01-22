import { useState } from 'react';
import MenuItem, { MenuItemProps } from '@/components/MenuItem';

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  menus: MenuItemProps[];
}

const Drawer = ({ isOpen, setIsOpen, menus }: DrawerProps) => {
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative bg-gray-100">
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-green-900 text-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <button
            onClick={toggleDrawer}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 19l7-7-7-7"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">
          {menus.map((menu, index) => (
            <MenuItem
              {...menu}
              key={menu.label.replace(/\s/g, '-').toLowerCase()}
            />
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default Drawer;
