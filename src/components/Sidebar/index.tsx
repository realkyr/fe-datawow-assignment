// components/Sidebar.tsx
import React from 'react';
import MenuItem from '../MenuItem';

const Sidebar: React.FC = () => {
  return (
    <div className="!bg-gray-app-100 h-[calc(100vh-64px)] w-64 p-4">
      <MenuItem icon="🏠" label="Home" active={true} />
      <MenuItem icon="✍️" label="Our Blog" />
    </div>
  );
};

export default Sidebar;
