import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import UserMenuModal from "./UserMenuModal";
import Sidebar from "../layout/Sidebar";
import { ShoppingBag, Menu, Sparkles, ChevronDown } from "lucide-react";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
  const location = useLocation();

  // --- MOCK USER DATA ---
  const user = {
    name: "Maria Santos",
    email: "client@demo.com"
  };

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Services", path: "/services" },
    { name: "Calendar", path: "/calendar" },
    { name: "Transactions", path: "/transaction" },
    { name: "History", path: "/history" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Helper to determine active page name for Sidebar based on current path
  const getActivePageName = () => {
    const currentLink = navLinks.find(link => link.path === location.pathname);
    return currentLink ? currentLink.name : "";
  };

  return (
    <>
      <header className="w-full bg-white px-4 md:px-8 py-3 shadow-sm border-b border-gray-100 font-sans fixed top-0 left-0 right-0 z-30">
        
        <div className=" max-w-350 mx-auto flex items-center justify-between">
         
          {/* 1. BRAND LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FCE8EB] rounded-full flex items-center justify-center text-[#E598A5]">
              <Sparkles size={20} fill="currentColor" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <h1
                className="text-xl text-gray-800 leading-none font-bold"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Lash & Beauty
              </h1>
              <span className="text-[10px] text-gray-500 uppercase tracking-wide mt-0.5 font-medium">
                Studio
              </span>
            </div>
          </div>

          {/* 2. DESKTOP NAVIGATION (Hidden on Mobile) */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 xl:px-5 py-2 text-[14px] xl:text-[15px] transition-all duration-200 rounded-full ${
                    isActive
                      ? "bg-[#E0909E] text-white font-medium shadow-sm"
                      : "text-gray-600 hover:text-[#E0909E] hover:bg-pink-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* 3. RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-4">
            
            {/* Shopping Bag (Always Visible) */}
            <button className="text-gray-700 hover:text-gray-900 transition-colors relative">
              <ShoppingBag size={22} strokeWidth={2} />
              {/* Optional: Badge count */}
              {/* <span className="absolute -top-1 -right-1 bg-[#E0909E] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span> */}
            </button>


            {/* --- SCENARIO A: DESKTOP USER MENU (Hidden on Mobile) --- */}
            <div className="hidden lg:block relative">
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100"
              >
                <div className="w-8 h-8 rounded-full bg-[#FCE8EB] flex items-center justify-center text-[#E598A5] font-bold text-sm">
                  MS
                </div>
                <div className="text-left hidden xl:block">
                  <p className="text-sm font-semibold text-gray-800 leading-none">{user.name}</p>
                </div>
                <ChevronDown size={16} className="text-gray-400" />
              </button>

              {/* Desktop Modal */}
              <UserMenuModal 
                isOpen={isUserMenuOpen} 
                onClose={() => setIsUserMenuOpen(false)}
                user={user}
                onSignOut={() => console.log("User signed out")}
              />
            </div>


            {/* --- SCENARIO B: MOBILE HAMBURGER (Hidden on Desktop) --- */}
            <button 
              className="lg:hidden text-gray-700 hover:text-[#E0909E] transition-colors p-1"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={26} strokeWidth={2} />
            </button>
            
          </div>

        </div>
      </header>

      {/* --- SIDEBAR COMPONENT (Mobile/Tablet Only) --- */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        activePage={getActivePageName()} 
      />
      
      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-18 w-full"></div>
    </>
  );
}

export default Navbar;