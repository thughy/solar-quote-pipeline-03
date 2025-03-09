
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Zap } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Sun className="h-8 w-8 text-solar-orange animate-pulse-slow" />
          <span className="text-2xl font-bold text-solar-blue-dark">
            Solar<span className="text-solar-orange-dark">Connect</span>
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Link 
            to="/how-it-works" 
            className={`text-solar-blue-dark hover:text-solar-blue transition-colors hidden md:block ${isActive('/how-it-works') ? 'font-medium text-solar-blue' : ''}`}
          >
            How It Works
          </Link>
          <Link 
            to="/about" 
            className={`text-solar-blue-dark hover:text-solar-blue transition-colors hidden md:block ${isActive('/about') ? 'font-medium text-solar-blue' : ''}`}
          >
            About
          </Link>
          <Link
            to="/installers"
            className={`text-solar-blue-dark hover:text-solar-blue transition-colors hidden md:block ${isActive('/installers') ? 'font-medium text-solar-blue' : ''}`}
          >
            Find Installers
          </Link>
          <Link 
            to="/quote" 
            className={`bg-solar-blue hover:bg-solar-blue-dark text-white py-2 px-4 rounded-md flex items-center gap-1.5 transition-colors ${isActive('/quote') ? 'bg-solar-blue-dark' : ''}`}
          >
            <Zap className="h-4 w-4" />
            <span>Get Quotes</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
