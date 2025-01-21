// components/Navbar.js
export default function Navbar() {
  return (
    <div className="bg-dark-green text-white flex items-center justify-between px-4 py-2 shadow-md h-16">
      {/* Left Side: Logo */}
      <div className="font-serif italic text-lg">a Board</div>

      {/* Right Side: User Profile */}
      <div className="flex items-center">
        <span className="mr-2">Jessica</span>
        <div className="w-8 h-8 rounded-full overflow-hidden">
          {/* Example profile picture */}
          <img
            src="https://via.placeholder.com/32"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
