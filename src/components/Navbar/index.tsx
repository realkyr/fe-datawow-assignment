// components/Navbar.js
import LoginProfile from '@/components/Navbar/LoginProfile';

export default function Navbar() {
  return (
    <div className="bg-dark-green text-white flex items-center justify-between px-4 py-2 shadow-md h-16">
      {/* Left Side: Logo */}
      <div className="font-serif italic text-lg">a Board</div>

      {/* Right Side: User Profile */}
      <LoginProfile />
    </div>
  );
}
