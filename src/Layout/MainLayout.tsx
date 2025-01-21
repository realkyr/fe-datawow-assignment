// components/Layout.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen max-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="flex flex-row flex-grow overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* App Component (Main Content) */}
        <main className="flex-grow w-full !bg-gray-app-100 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
